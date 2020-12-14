﻿using CoreRCON;
using CoreRCON.Parsers.Standard;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NetCoreShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RconTestController : ControllerBase
    {
        // GET: api/<RconTestController>
        [HttpGet]
        public string Get()
        {
            string result = "";
            try
            {

                //test local server            
                var rcon = new RCON(IPAddress.Parse("192.168.88.188"), 25555, "");
                rcon.ConnectAsync().Wait();

                // Set vip OK
                //result = rcon.SendCommandAsync("lp user Edwardsky parent set vip").Result;
                
                //give 64 apples
                //result = rcon.SendCommandAsync("give Edwardsky apple 64").Result;
                //op Ok
                //result = rcon.SendCommandAsync("op Edwardsky").Result;

                // Set money OK                
                //result = rcon.SendCommandAsync("economy give Edwardsky 100000").Result;
                
                
                Status status = rcon.SendCommandAsync<Status>("status").Result;

                result = status.Version;

            } catch (Exception ex)
            {
                result = ex.ToString();
            }
            return result;
        }

        // GET api/<RconTestController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RconTestController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RconTestController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RconTestController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
