CREATE LOGIN WebUser
WITH PASSWORD = 'WebUserPassword',
DEFAULT_DATABASE = University
GO
CREATE USER WebUser
FOR LOGIN WebUser
GRANT SELECT, UPDATE, INSERT, DELETE ON OBJECT:: dbo.Tests
TO WebUser
GRANT SELECT, UPDATE, INSERT, DELETE ON OBJECT:: dbo.Questions
TO WebUser
GRANT SELECT, UPDATE, INSERT, DELETE ON OBJECT:: dbo.Answers
TO WebUser

--After running this comman restart the server. (In Object Explorer right-click on server name 
											-- -> press "Restart" 
											-- -> in opened dialog window press confirmation button)