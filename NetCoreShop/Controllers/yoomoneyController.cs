using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
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
    public class YoomoneyController : ControllerBase
    {

        // https://yoomoney.ru/docs/payment-buttons/using-api/forms


        const string url = "https://yoomoney.ru/quickpay/confirm.xml";


        [HttpGet("{order}")]
        public IActionResult GetUrl(string order)
        {
            int sum = 99;
            
            var param = new Dictionary<string, string>() {
                { "receiver", Startup.Yoomoney },
                { "quickpay-form", "shop" },
                { "targets", "Заказ #" + order },
                { "paymentType", "AC" },
                { "sum", sum.ToString() },
                { "formcomment", "Minecraft Sablins.ru server" },
                { "label", "VIP" + 2323 },
                { "successURL", "https://sablins.ru/success/yoomoney" },
            };

            var newUrl = new Uri(QueryHelpers.AddQueryString(url, param));

            return Ok(newUrl.ToString());
        }

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

            

           //parce notification_type=p2p-incoming&bill_id=&amount=437.78&datetime=2020-12-14T18%3A57%3A47Z&codepro=false&sender=41001000040&sha1_hash=8c963199e3f2f059aee52de121c892042053683a&test_notification=true&operation_label=&operation_id=test-notification&currency=643&label=

            

            //string req = "";
            
            // TODO Set Status Payed OK

            
            // Run task for deilvery digital content

            Console.WriteLine(body);

            return Ok("Ok!");
        }

    }
}
