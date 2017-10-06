CREATE LOGIN WebUser
WITH PASSWORD = 'WebUserPassword',
DEFAULT_DATABASE = University
GO
CREATE USER WebUser
FOR LOGIN WebUser
GO

--After running this comman restart the server. (In Object Explorer right-click on server name 
											-- -> press "Restart" 
											-- -> in opened dialog window press confirmation button)