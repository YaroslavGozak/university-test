using Dapper;
using System.Collections.Generic;
using University_Test.Common;
using University_Test.Models;

namespace University_Test.Services
{
    public class TestService
    {
        public IEnumerable<Test> GetAllTests()
        {
            using (var context = Global.Sql())
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
                var sql = @"SELECT Question
                    FROM
                      Question
                    WHERE
                    TestID = @id";

                var result = context.Query<Test>(sql); 
                return result;
            }
        }
        public IEnumerable<Answer> GetCorrectAnswers(int answerID)
        {
            using (var context = Global.Sql())
            {
                var sql = @"SELECT IsCorrect
                    FROM
                      Answer
                    WHERE
                      AnswerID = @answerID";
                var result = context.Query<Answer>(sql);
                return result;
            }
        }
    }
}