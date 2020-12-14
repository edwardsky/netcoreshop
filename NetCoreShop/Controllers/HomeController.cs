using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreShop.Controllers
{
    public class HomeController : Controller
    {
        [Route("")] // любой запрос        
        [Route("{lang:maxlength(2)}/")] // главная языка http://host.ru/ru/ или 
        [Route("{lang:maxlength(2)}/txex/")] // главная языка http://host.ru/ru/ или 
        public IActionResult Home(string lang)
        {
            return Ok("Hello!");
        }
    }
}
