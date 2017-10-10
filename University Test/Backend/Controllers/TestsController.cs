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
    private TestService testService;

    public TestsController()
    {
      testService = new TestService();
    }
    // GET: api/Tests
    [HttpGet]
    public IEnumerable<Test> Get()
    {
      return testService.GetAllTests();
    }

    // GET: api/Tests/5
    [HttpGet("{id}", Name = "Get")]
    public Test Get(int id)
    {
      return testService.GetTest(id);
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
