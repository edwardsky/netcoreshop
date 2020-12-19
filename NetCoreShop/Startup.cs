using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.OpenSsl;
using Org.BouncyCastle.Security;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreShop
{


    public class Startup
    {

        //Todo read from config
        public static string ShopName = null;
        public static string[] ShopLangs = null;
        public static string Yoomoney = null;        
  
        public static string PSQL = null;
        public static string RCON = null;
        public static bool RCONTEST = false;

        public static int RSA = 1024;
        public static string RSAKEYserver = null;
        public static string RSAKEYpublic = null;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;            
        }

        private void GenerateRSA(int bit)
        {
            RsaKeyPairGenerator rsaGenerator = new RsaKeyPairGenerator();
            rsaGenerator.Init(new KeyGenerationParameters(new SecureRandom(), bit));
            var keyPair = rsaGenerator.GenerateKeyPair();


            using (TextWriter privateKeyTextWriter = new StringWriter())
            {

                PemWriter pemWriter = new PemWriter(privateKeyTextWriter);
                pemWriter.WriteObject(keyPair.Private);
                pemWriter.Writer.Flush();
                RSAKEYserver = privateKeyTextWriter.ToString();
            }

            Console.WriteLine($">>>>>> OpenSSL RSA PRIVATE KEY {bit} bits <<<<<");
            

            using (TextWriter publicKeyTextWriter = new StringWriter())
            {

                PemWriter pemWriter = new PemWriter(publicKeyTextWriter);
                pemWriter.WriteObject(keyPair.Public);
                pemWriter.Writer.Flush();
                RSAKEYpublic = publicKeyTextWriter.ToString();
            }

            //Console.WriteLine(">>>>>> OpenSSL RSA PUBLIC KEY <<<<<");
            Console.WriteLine();
            Console.WriteLine(RSAKEYpublic);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            ShopName = Configuration["shopname"];

            var assemblyVersion = typeof(Program).Assembly.GetName().Version.ToString();
            var assemblyName = typeof(Program).Assembly.GetName().Name.ToString();
            var Dll = typeof(Program).Assembly.Location;
            string Title = $"{assemblyName} {assemblyVersion} on { System.Runtime.InteropServices.RuntimeInformation.OSDescription }";
            var Ver = assemblyVersion;

            Console.WriteLine($"{assemblyName} {Ver}-{ThisAssembly.Git.Commit} OS:{ System.Runtime.InteropServices.RuntimeInformation.OSDescription }");
            Console.WriteLine($"=================================");
            Console.WriteLine($"Launch Shop {ShopName} at config");

            try
            {
                string rsastr = Configuration["RSA"];
                if(rsastr != null) RSA = int.Parse(rsastr);

                GenerateRSA(RSA);

            } catch (Exception ex)
            {
                Console.WriteLine("WARN: RSA key error > " + ex.Message);
            }

            var langs = Configuration["shoplangs"];
            if (langs is null) ShopLangs = "ru".Split(",");
            else ShopLangs = langs.Split(",");

            PSQL = Configuration["psql"];            
            if (PSQL is null) Console.WriteLine("WARN: PSQL is not setup");

            Yoomoney = Configuration["yoomoney"];
            if (Yoomoney is null) Console.WriteLine("WARN: Yoomoney is not setup");

            RCON = Configuration["RCON"];
            RCONTEST = bool.Parse(Configuration["RCONTEST"]);
            if (RCON is null) Console.WriteLine("WARN: RCON is not setup");

            services.AddControllers();

            services.AddControllersWithViews().AddNewtonsoftJson();
            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseStaticFiles();

            app.UseAuthorization();
            app.UseForwardedHeaders();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
