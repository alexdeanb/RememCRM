USE [master]
GO

IF db_id('RememCRM') IS NOT NULL
BEGIN
  ALTER DATABASE [RememCRM] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
  DROP DATABASE [RememCRM]
END
GO

CREATE DATABASE [RememCRM]
GO

USE [RememCRMN]
GO

-----------------------------------------------------------------------------------
----------------------------------TABLE CREATION-----------------------------------

CREATE TABLE [Organization] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(50) NOT NULL,
  [PrimaryColor] varchar(7),
  [Logo] blob
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [OragnizationId] int NOT NULL,
  [UserTypeId] int NOT NULL,
  [FirebaseUserId] int NOT NULL,
  [Name] varchar(50) NOT NULL,
  [Email] varchar(25) NOT NULL
)
GO

CREATE TABLE [ManagerTeams] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [ManagerUserId] int NOT NULL,
  [SalespersonUserId] int NOT NULL
)
GO

CREATE TABLE [UserTypes] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

CREATE TABLE [Widgets] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserTypeId] int NOT NULL,
  [Name] varchar(50) NOT NULL
)
GO

CREATE TABLE [Contacts] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserId] int NOT NULL,
  [FirstName] varchar(25) NOT NULL,
  [LastName] varchar(25) NOT NULL,
  [EmailAddress] varchar(50),
  [DOB] Date,
  [Address] varchar(100),
  [City] varchar(25),
  [State] varchar(2),
  [Zip] int,
  [Phone] varchar(12),
  [PhoneNote] text,
  [Notes] text,
  [ReferralUserId] int,
  [DeceasedId] int,
  [SourceId] int NOT NULL,
  [StatusId] int NOT NULL
)
GO

CREATE TABLE [Deceased] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Location] varchar(50),
  [MaritalStatus] varchar(50),
  [ReligiousAffiliation] varchar(50),
  [ServiceTypeId] int,
  [BurialTypeId] int,
  [BurialLocation] varchar(50),
  [DeceasedName] varchar(50) NOT NULL,
  [RelationID] int NOT NULL,
  [DOD] Date NOT NULL
)
GO

CREATE TABLE [Contracts] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [LeadId] int,
  [UserId] int,
  [ContractTypeId] int,
  [FuneralAmount] int,
  [TravelAmount] int,
  [CloseDate] Date
)
GO

CREATE TABLE [ContractTypes] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(50)
)
GO

CREATE TABLE [ToDoItems] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserId] int NOT NULL,
  [Description] text NOT NULL,
  [ContactId] int,
  [PriotityId] int,
  [Due] Date,
  [Completed] Boolean
)
GO

CREATE TABLE [EmailTemplates] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [OrganizationId] int NOT NULL,
  [Desription] text NOT NULL
)
GO

CREATE TABLE [MailTemplates] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [OrganizationId] int NOT NULL,
  [Description] text NOT NULL
)
GO

CREATE TABLE [Sources] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

CREATE TABLE [Relationships] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

CREATE TABLE [BurialTypes] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

CREATE TABLE [ServiceTypes] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

CREATE TABLE [Priority] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

CREATE TABLE [Status] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(25) NOT NULL
)
GO

ALTER TABLE [UserTypes] ADD FOREIGN KEY ([Id]) REFERENCES [UserProfile] ([UserTypeId])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([OragnizationId]) REFERENCES [Organization] ([Id])
GO

ALTER TABLE [Widgets] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserTypes] ([Id])
GO

ALTER TABLE [Contacts] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Contracts] ADD FOREIGN KEY ([LeadId]) REFERENCES [Contacts] ([Id])
GO

ALTER TABLE [ToDoItems] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [MailTemplates] ADD FOREIGN KEY ([OrganizationId]) REFERENCES [Organization] ([Id])
GO

ALTER TABLE [EmailTemplates] ADD FOREIGN KEY ([OrganizationId]) REFERENCES [Organization] ([Id])
GO

ALTER TABLE [Contacts] ADD FOREIGN KEY ([ReferralUserId]) REFERENCES [Contacts] ([Id])
GO

ALTER TABLE [Sources] ADD FOREIGN KEY ([Id]) REFERENCES [Contacts] ([SourceId])
GO

ALTER TABLE [Relationships] ADD FOREIGN KEY ([Id]) REFERENCES [Deceased] ([RelationID])
GO

ALTER TABLE [BurialTypes] ADD FOREIGN KEY ([Id]) REFERENCES [Deceased] ([BurialTypeId])
GO

ALTER TABLE [ServiceTypes] ADD FOREIGN KEY ([Id]) REFERENCES [Deceased] ([ServiceTypeId])
GO

ALTER TABLE [Contracts] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [ToDoItems] ADD FOREIGN KEY ([ContactId]) REFERENCES [Contacts] ([Id])
GO

ALTER TABLE [ToDoItems] ADD FOREIGN KEY ([PriotityId]) REFERENCES [Priority] ([Id])
GO

ALTER TABLE [Status] ADD FOREIGN KEY ([Id]) REFERENCES [Contacts] ([StatusId])
GO

ALTER TABLE [Deceased] ADD FOREIGN KEY ([Id]) REFERENCES [Contacts] ([DeceasedId])
GO

ALTER TABLE [Contracts] ADD FOREIGN KEY ([ContractTypeId]) REFERENCES [ContractTypes] ([Id])
GO

ALTER TABLE [ManagerTeams] ADD FOREIGN KEY ([ManagerUserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [ManagerTeams] ADD FOREIGN KEY ([SalespersonUserId]) REFERENCES [UserProfile] ([Id])
GO
