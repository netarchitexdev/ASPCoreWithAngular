--DROP TABLE [dbo].[RoleAttribute]
--GO

CREATE TABLE [dbo].RoleAttribute
(
	[RoleAttributeId]   INT IDENTITY (1,1)  NOT NULL,
	[RoleId]            UNIQUEIDENTIFIER    NOT NULL,
	[AttributeId]       INT         		NOT NULL,
    PRIMARY KEY CLUSTERED ([RoleAttributeId] ASC)
)
GO