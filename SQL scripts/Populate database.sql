INSERT INTO Tests(TestName,CreatedDate) VALUES
(N'Test test', N'01/01/2001'),
(N'UKR',N'04/10/2017')
GO
INSERT INTO AnswerTypes(AnswerType) VALUES
(N'ONE'),
(N'MANY'),
(N'WRITE')
GO
INSERT INTO Answers(Answer) VALUES
(N'Alumier'),
(N'Exigo'),
(N'Green Tea'),
(N'Avisae')
GO
TRUNCATE TABLE Questions
INSERT INTO Questions(Question, TestID, AnswerTypeID, CorrectAnswerID) VALUES
(N'What?',1,1,3),
(N'Where?',1,1,1)
GO
TRUNCATE TABLE AnswersToQuestions
INSERT INTO AnswersToQuestions(QuestionID,AnswerID) VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,1),
(2,2),
(2,3),
(2,4)

INSERT INTO CorrectAnswers(QuestionID,AnswerID) VALUES
(1,1),
(2,3)