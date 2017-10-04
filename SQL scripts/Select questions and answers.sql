SELECT q.Question, a.Answer, a2.Answer AS [Correct Answer]
 FROM Questions q
 LEFT JOIN AnswersToQuestions qa ON qa.QuestionID = q.QuestionID
 LEFT JOIN Answers a ON a.AnswerID = qa.AnswerID
 LEFT JOIN CorrectAnswers ca ON ca.QuestionID = q.QuestionID
 LEFT JOIN Answers a2 ON ca.AnswerID = a2.AnswerID