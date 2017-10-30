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
        var test = context.Query<Test>(@"
          SELECT
            TestID
            ,TestName
            ,EstimatedTime
          FROM
            Tests
          WHERE
            TestID = @testId
          ", new
        {
          testId = id
        }).FirstOrDefault();
        if (test == null) return null;
        var questions = context.Query<Question>(@"
          SELECT
            QuestionID
            ,Question AS QuestionText
            ,Points
          FROM
            Questions
          WHERE
            TestID = @testId
          ", new
        {
          testId = id
        }).Distinct().ToList();
        var answers = context.Query<Answer>(@"
          SELECT
            AnswerID
            ,Answer AS AnswerText
            ,IsCorrect
            ,QuestionID
          FROM
            Answers
          WHERE
            QuestionID IN @questionIds
          ", new
        {
          questionIds = questions.Select(q => q.QuestionID)
        });
        foreach (var question in questions)
          question.Answers = answers.Where(a => a.QuestionID == question.QuestionID).ToList();
        test.Questions = questions;
        return test;
      }
    }
  }
}
