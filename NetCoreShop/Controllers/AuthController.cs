using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NetCoreShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // GET: api/<AuthController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            // TODO Current session Auth

            return new string[] { "value1", "value2" };
        }

        // GET api/<AuthController>/5
        [HttpGet("{player}")]
        public string Get(string uuid)
        {
            return "player not found";
        }

        // POST api/<AuthController>
        [HttpPost]
        public void Post()
        {
            //TODO Register 

            //TODO Login

            //TODO ChangePass


        }

    }
}
