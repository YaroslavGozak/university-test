using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace University_Test.Models
{
    public class Test
    {
        public int TestID { get; set; }
        public string TestName { get; set; }
        public DateTime CreatedDate { get; set; }
        public IEnumerable<Question> Questions { get; set; }
    }
}