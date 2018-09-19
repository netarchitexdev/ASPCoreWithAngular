USE [CrspPortalDataSandbox]
GO

INSERT INTO [dbo].[Role]
	([RoleId], [RoleName])
	VALUES
	(NEWID(), 'Administrator')

INSERT INTO [dbo].[Role]
	([RoleId], [RoleName])
	VALUES
	(NEWID(), 'Tester')


