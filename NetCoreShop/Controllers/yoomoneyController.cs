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


//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Hosting.Diagnostics[1]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Request starting HTTP/1.1 POST http://sablins.ru/api/yoomoney application/x-www-form-urlencoded 401
//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Routing.EndpointMiddleware[0]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Executing endpoint 'NetCoreShop.Controllers.YoomoneyController.Post (NetCoreShop)'
//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker[3]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Route matched with {action = "Post", controller = "Yoomoney"}. Executing controller action with signature Microsoft.AspNetCore.Mvc.IActionResult Post() on controller NetCoreShop.Controllers.YoomoneyController (NetCoreShop).
//дек 15 11:22:35 nginx-lb sablins[29523]: notification_type=card-incoming&zip=&bill_id=&amount=97.02&firstname=&codepro=false&withdraw_amount=99.00&city=&unaccepted=false&label=VIP2323&building=&lastname=&datetime=2020-12-15T08%3A22%3A24Z&suite=&sender=&phone=&sha1_hash=5006f3f32368e08ad44814ed3bf89c436caa3c8d&street=&flat=&fathersname=&operation_label=276a85f3-0011-5000-9000-1989f3b4d6a1&operation_id=661335744656013204&currency=643&email=
//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Mvc.Infrastructure.ObjectResultExecutor[1]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Executing ObjectResult, writing value of type 'System.String'.
//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker[2]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Executed action NetCoreShop.Controllers.YoomoneyController.Post (NetCoreShop) in 17.5265ms
//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Routing.EndpointMiddleware[1]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Executed endpoint 'NetCoreShop.Controllers.YoomoneyController.Post (NetCoreShop)'
//дек 15 11:22:35 nginx-lb sablins[29523]: info: Microsoft.AspNetCore.Hosting.Diagnostics[2]
//дек 15 11:22:35 nginx-lb sablins[29523]:       Request finished in 22.5338ms 200 text/plain; charset=utf-8



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
