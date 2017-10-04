
CREATE TABLE Tests(
TestID int IDENTITY(1,1),
TestName nvarchar(30),
CreatedDate Date,
CONSTRAINT PK_Tests_TestID PRIMARY KEY (TestID)
)


CREATE TABLE AnswerTypes(
AnswerTypeID int IDENTITY(1,1),
AnswerType nvarchar(20),
CONSTRAINT PK_AnswerTypes_AnswerTypeID PRIMARY KEY (AnswerTypeID)
)


CREATE TABLE Questions(
QuestionID int IDENTITY(1,1),
Question nvarchar(100),
CorrectAnswerID int,
AnswerTypeID int,
TestID int,
CONSTRAINT PK_Questions_QuestionID PRIMARY KEY (QuestionID),
CONSTRAINT FK_Questions_TestID FOREIGN KEY (TestID) REFERENCES Tests(TestID),
CONSTRAINT FK_Questions_AnswerType FOREIGN KEY (AnswerTypeID) REFERENCES AnswerTypes(AnswerTypeID)
)


CREATE TABLE Answers(
AnswerID int IDENTITY(1,1),
Answer nvarchar(100)
CONSTRAINT PK_Answer_AnswerID PRIMARY KEY (AnswerID),
)

CREATE TABLE AnswersToQuestions(
QuestionID int,
AnswerID int, 
CONSTRAINT FK_AnswersToQuestions_QuestionID FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID),
CONSTRAINT FK_AnswersToQuestions_AnswerID FOREIGN KEY (AnswerID) REFERENCES Answers(AnswerID)
)

CREATE TABLE CorrectAnswers(
QuestionID int,
AnswerID int, 
CONSTRAINT FK_CorrectAnswers_QuestionID FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID),
CONSTRAINT FK_CorrectAnswers_AnswerID FOREIGN KEY (AnswerID) REFERENCES Answers(AnswerID)
)