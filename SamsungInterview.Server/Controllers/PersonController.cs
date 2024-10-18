using Microsoft.AspNetCore.Mvc;

namespace SamsungInterview.Server.Controllers
{
    public class Person
    {
        public required string Name { get; set; }

        public string? Address { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        static readonly Person[] _peopleList =
        [
            new Person { Name = "Adam", Address = "Austin" },
            new Person { Name = "Bruce", Address = "Berlin" },
            new Person { Name = "Chan", Address = "Chicago" },
        ];

        [HttpGet]
        public Person[] Get()
        {
            return _peopleList;
        }
    }
}
