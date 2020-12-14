using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class yoomoneyController : ControllerBase
    {

        // https://yoomoney.ru/docs/payment-buttons/using-api/forms

        [HttpPost]
        public IActionResult Post()
        {
            string body = "";

            using (StreamReader stream = new StreamReader(HttpContext.Request.Body)) { body = stream.ReadToEnd(); }


            // or login 
            if (body == "")
            {
                return BadRequest(Crypto.packJSON("{\"result\":\"fail\",\"info\":\"Empty body request!\"}"));
            }

            //var jbody = JObject.Parse(body);

            //string req = "";
            
            // TODO Set Status Payed OK

            
            // Run task for deilvery digital content

            Console.WriteLine(body);

            return Ok("Ok!");
        }

    }
}
