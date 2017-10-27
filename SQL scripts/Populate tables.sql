Use University
INSERT INTO Tests(TestName) VALUES
(N'Test'),
(N'UKR')
GO
INSERT INTO Questions(Question, TestID) VALUES
(N'Where the test?',1),
(N'What is test',1)
GO
INSERT INTO Answers(Answer, QuestionID, IsCorrect) VALUES
(N'Exigo',1,0),
(N'Avisae',1,0),
(N'Alunier',1,1),
(N'Hairstory',1,0),
(N'Exigo',2,1),
(N'Avisae',2,0),
(N'Alunier',2,1),
(N'Hairstory',2,0)