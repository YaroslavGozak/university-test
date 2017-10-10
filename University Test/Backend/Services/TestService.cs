using Dapper;
using System.Collections.Generic;
using System.Linq;
using University_Test.Common;
using University_Test.Models;

namespace University_Test.Services
{
  public class TestService
  {
    public IEnumerable<Test> GetAllTests()
    {
      using(var context = Global.Sql())
      {
        var sql = @"SELECT TestID
                           ,TestName
                           ,CreatedDate
                    FROM
                      Tests";
        var result = context.Query<Test>(sql);
        return result;
      }
    }

    public Test GetTest(int id)
    {
      using (var context = Global.Sql())
      {
        Test test = new Test();
        var sql = @"SELECT t.TestName 
		                    ,q.Question AS QuestionText
		                    ,q.Points
		                    ,a.Answer AS AnswerText
		                    ,a.IsCorrect
                    FROM Tests t
                    LEFT JOIN Questions q
                      ON q.TestID = t.TestID
                    LEFT JOIN Answers a
                      ON a.QuestionID = q.QuestionID
                    WHERE t.TestID = @id";

        var result = context.Query<Test, Question, Answer, Test>(sql,
          (queriedTest, queriedQuestion, queriedAnswer) =>
          {
            if (test.TestName == default(string))
              test.TestName = queriedTest.TestName;
            if (test.Questions == null)
              test.Questions = new List<Question>();
            Question question = null;
            foreach(var testQuestion in test.Questions)
            {
              if(testQuestion.QuestionText == queriedQuestion.QuestionText)
              {
                question = testQuestion;
                break;
              }
            }
            if (question == null)
            {
              test.Questions.Add(queriedQuestion);
              question = queriedQuestion;
            }
            if (question.Answers == null)
              question.Answers = new List<Answer>();
            if (!question.Answers.Contains(queriedAnswer))
              question.Answers.Add(queriedAnswer);
            return test;
          }, new
          {
            id = id
          },
          splitOn:"QuestionText,AnswerText").Distinct().ToList();
        return result.Single();
      }
    }
  }
}
