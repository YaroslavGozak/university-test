using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace University_Test.Models
{
  public class Question
  {
    public int QuestionID { get; set; }
    public string QuestionText { get; set; }
    public int Points { get; set; }
    public Test Test { get; set; }
    public int TestID { get; set; }
    public IList<Answer> Answers { get; set; }
  }
}
