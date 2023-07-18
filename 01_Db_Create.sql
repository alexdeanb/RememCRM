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

USE [RememCRM]
GO

-----------------------------------------------------------------------------------
----------------------------------TABLE CREATION-----------------------------------

CREATE TABLE [Organization] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(50) NOT NULL,
  [PrimaryColor] varchar(7),
  [Logo] image
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] varchar(50) NOT NULL,
  [Email] varchar(25) NOT NULL,
  [OrganizationId] int NOT NULL,
  [UserTypeId] int NOT NULL,
  [FirebaseUserId] varchar(255) NOT NULL
)
GO

CREATE TABLE [Teams] (
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

CREATE TABLE [ContactsDeceased] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [DeceasedId] int NOT NULL,
  [ContactId] int NOT NULL
)
GO

CREATE TABLE [Contacts] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [AssignedUserId] int NOT NULL,
  [PrimaryFirstName] varchar(25) NOT NULL,
  [PrimaryLastName] varchar(25) NOT NULL,
  [PrimaryEmailAddress] varchar(50),
  [PrimaryDOB] Date,
  [SecondaryFirstName] varchar(25),
  [SecondaryLastName] varchar(25),
  [SecondaryEmailAddress] varchar(50),
  [SecondaryDOB] Date,
  [Address] varchar(100),
  [City] varchar(25),
  [State] varchar(25),
  [Zip] int,
  [HomePhone] varchar(12),
  [HomePhoneNote] text,
  [CellPhone] varchar(12),
  [CellPhoneNote] text,
  [Notes] text,
  [ReferralContactId] int,
  [SourceId] int NOT NULL,
  [StatusId] int NOT NULL
)
GO

CREATE TABLE [Deceased] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Location] varchar(50),
  [MaritalStatus] varchar(50),
  [ReligiousAffiliation] varchar(50),
  [BurialLocation] varchar(50),
  [DeceasedName] varchar(50) NOT NULL,
  [DOD] Date NOT NULL,
  [RelationID] int NOT NULL,
  [ServiceTypeId] int,
  [BurialTypeId] int
)
GO

CREATE TABLE [Contracts] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [ContactId] int,
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
  [Completed] bit
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
  [Name] varchar(25) NOT NULL,
  [Code] varchar(10) NOT NULL
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

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserTypes] ([Id])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([OrganizationId]) REFERENCES [Organization] ([Id])
GO

ALTER TABLE [Widgets] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserTypes] ([Id])
GO

ALTER TABLE [Contacts] ADD FOREIGN KEY ([AssignedUserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Contracts] ADD FOREIGN KEY ([ContactId]) REFERENCES [Contacts] ([Id])
GO

ALTER TABLE [ToDoItems] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [MailTemplates] ADD FOREIGN KEY ([OrganizationId]) REFERENCES [Organization] ([Id])
GO

ALTER TABLE [EmailTemplates] ADD FOREIGN KEY ([OrganizationId]) REFERENCES [Organization] ([Id])
GO

ALTER TABLE [Contacts] ADD FOREIGN KEY ([ReferralContactId]) REFERENCES [Contacts] ([Id])
GO

ALTER TABLE [Contacts] ADD FOREIGN KEY ([SourceId]) REFERENCES [Sources] ([Id])
GO

ALTER TABLE [Deceased] ADD FOREIGN KEY ([RelationID]) REFERENCES [Relationships] ([Id])
GO

ALTER TABLE [Deceased] ADD FOREIGN KEY ([BurialTypeId]) REFERENCES [BurialTypes] ([Id])
GO

ALTER TABLE [Deceased] ADD FOREIGN KEY ([ServiceTypeId]) REFERENCES [ServiceTypes] ([Id])
GO

ALTER TABLE [Contracts] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [ToDoItems] ADD FOREIGN KEY ([ContactId]) REFERENCES [Contacts] ([Id])
GO

ALTER TABLE [ToDoItems] ADD FOREIGN KEY ([PriotityId]) REFERENCES [Priority] ([Id])
GO

ALTER TABLE [Contacts] ADD FOREIGN KEY ([StatusId]) REFERENCES [Status] ([Id])
GO

ALTER TABLE [Contracts] ADD FOREIGN KEY ([ContractTypeId]) REFERENCES [ContractTypes] ([Id])
GO

ALTER TABLE [Teams] ADD FOREIGN KEY ([ManagerUserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Teams] ADD FOREIGN KEY ([SalespersonUserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [ContactsDeceased] ADD FOREIGN KEY ([DeceasedId]) REFERENCES [Deceased] ([Id])
GO

ALTER TABLE [ContactsDeceased] ADD FOREIGN KEY ([ContactId]) REFERENCES [Contacts] ([Id])
GO
