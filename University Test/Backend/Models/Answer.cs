using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace University_Test.Models
{
  public class Answer
  {
    public int AnswerID { get; set; }
    public string AnswerText { get; set; }
    public Question Question { get; set; }
    public bool IsCorrect { get; set; }
  }
}
