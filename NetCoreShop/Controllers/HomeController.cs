using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreShop.Controllers
{
    public class HomeController : Controller
    {
        private IWebHostEnvironment _env;

        public HomeController(IWebHostEnvironment env)
        {
            _env = env;
        }


        private static string LoadStarter(IWebHostEnvironment env, string name)
        {


            string html = "Error loading starter";

            try
            {

                DirectoryInfo basedir = new DirectoryInfo(env.WebRootPath + "/min/");
#if DEBUG

                basedir = new DirectoryInfo(env.WebRootPath);
#endif
                FileSystemInfo starter = basedir.GetFileSystemInfos(name)[0];



                using (var myReader = System.IO.File.OpenText(starter.FullName))
                {
                    // do some stuff

                    html = myReader.ReadToEnd();
                }

            }
            catch (Exception ex)
            {
                // TODO LOG ERROR
            }

            return html;

        }

        private string SafeLang(string lang)
        {
            string safeLang = "";
            switch (lang)
            {
                case null: safeLang = "ru"; break;
                case "ru": safeLang = "ru"; break;
                case "en": safeLang = "en"; break;
                case "de": safeLang = "de"; break;
                case "es": safeLang = "es"; break;
                case "fr": safeLang = "fr"; break;
                case "pt": safeLang = "pt"; break;
            }
            return safeLang;
        }


        [Route("")] // любой запрос        
        [Route("{lang:maxlength(2)}/")] // главная языка http://host.ru/ru/ или 
        [Route("{lang:maxlength(2)}/txex/")] // главная языка http://host.ru/ru/ или 
        public IActionResult Home(string lang)
        {
            string html = LoadStarter(_env, "starter.html");


            string safeLang = SafeLang(lang);

            if (safeLang == "") return NotFound("404");


            html = html.Replace("%lang%", safeLang);

            string minJs = "min/";
#if DEBUG
            minJs = "";
#endif
            html = html.Replace("%min%", minJs);



            return Content(html, new MediaTypeHeaderValue("text/html"));
        }
    }
}
