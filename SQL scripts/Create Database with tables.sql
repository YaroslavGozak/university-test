CREATE DATABASE University
GO
USE University
CREATE TABLE Tests(
	TestID int PRIMARY KEY IDENTITY(1,1),
	TestName nvarchar(30) NOT NULL,
	CreatedDate Date DEFAULT GETDATE(),
	EstimatedTime int
)
GO
CREATE TABLE Questions(
	QuestionID int PRIMARY KEY IDENTITY(1,1),
	Question nvarchar(50) NOT NULL,
	Points int DEFAULT 1,
	TestID int FOREIGN KEY REFERENCES Tests(TestID)
)
GO
CREATE TABLE Answers(
	AnswerID int PRIMARY KEY IDENTITY(1,1),
	Answer nvarchar(50) NOT NULL,
	QuestionID int FOREIGN KEY REFERENCES Questions(QuestionID),
	IsCorrect bit DEFAULT 0
)