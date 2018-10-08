--DROP TABLE [dbo].[Role]
--GO

CREATE TABLE [dbo].[Role] (
    [RoleId]   UNIQUEIDENTIFIER NOT NULL,
    [RoleName] VARCHAR (50)     NOT NULL,
    PRIMARY KEY CLUSTERED ([RoleId] ASC)
);
GO

CREATE UNIQUE INDEX [UX_Role_RoleName]
    ON [dbo].[Role]([RoleName] ASC);
GO
