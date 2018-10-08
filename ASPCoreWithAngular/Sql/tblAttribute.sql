--DROP TABLE [dbo].[Attribute]
--GO

CREATE TABLE [dbo].Attribute
(
	[AttributeId]   INT IDENTITY (1,1)  NOT NULL,
	[AttributeName] VARCHAR (50)		NOT NULL,
    PRIMARY KEY CLUSTERED ([AttributeId] ASC)
)
GO

CREATE UNIQUE INDEX [UX_Attribute_AttributeName]
    ON [dbo].[Attribute]([AttributeName] ASC);
GO