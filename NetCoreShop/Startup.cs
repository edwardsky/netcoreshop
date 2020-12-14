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
        public static string Yoomoney = null;
        public static string PSQL = null;

        public static string RSAKEYserver = null;
        public static string RSAKEYpublic = null;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            RsaKeyPairGenerator rsaGenerator = new RsaKeyPairGenerator();
            rsaGenerator.Init(new KeyGenerationParameters(new SecureRandom(), 1024));
            var keyPair = rsaGenerator.GenerateKeyPair();


            using (TextWriter privateKeyTextWriter = new StringWriter())
            {

                PemWriter pemWriter = new PemWriter(privateKeyTextWriter);
                pemWriter.WriteObject(keyPair.Private);
                pemWriter.Writer.Flush();
                RSAKEYserver = privateKeyTextWriter.ToString();
            }

            Console.WriteLine($">>>>>> OpenSSL RSA PRIVATE KEY {RSAKEYserver.Length} <<<<<");
            Console.WriteLine();

            using (TextWriter publicKeyTextWriter = new StringWriter())
            {

                PemWriter pemWriter = new PemWriter(publicKeyTextWriter);
                pemWriter.WriteObject(keyPair.Public);
                pemWriter.Writer.Flush();
                RSAKEYpublic = publicKeyTextWriter.ToString();
            }

            Console.WriteLine(">>>>>> OpenSSL RSA PUBLIC KEY <<<<<");
            Console.WriteLine();
            Console.WriteLine(RSAKEYpublic);

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            PSQL = Configuration["psql"];            
            Yoomoney = Configuration["yoomoney"];
            
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
