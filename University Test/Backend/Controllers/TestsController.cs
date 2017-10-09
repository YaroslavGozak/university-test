using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using University_Test.Services;
using University_Test.Models;

namespace University_Test.Controllers
{
  [Produces("application/json")]
  [Route("api/Tests")]
  public class TestsController : Controller
  {
    // GET: api/Tests
    [HttpGet]
    public IEnumerable<Test> Get()
    {
      var testService = new TestService();
      var tests = testService.GetAllTests();
      return tests;
    }

    // GET: api/Tests/5
    [HttpGet("{id}", Name = "Get")]
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/Tests
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/Tests/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
