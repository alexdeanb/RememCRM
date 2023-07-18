USE [RememCRM];
GO



------------------------------------------------------------------------------
----------------------------Populating Static Tables--------------------------


set identity_insert [UserTypes] on
insert into UserTypes (Id, [Name]) values (1, 'Sales Professional'), (2, 'Sales Manager'), (3, 'Organizational Admin')
set identity_insert [UserTypes] off

set identity_insert [ContractTypes] on
insert into ContractTypes (Id, [Name]) values (1,'Preneed'),(2,'At-Need'),(3,'Funeral Insurance'),(4,'Funeral Trust'), (5,'Travel Plan')
set identity_insert [ContractTypes] off

set identity_insert [Sources] on
insert into Sources (Id, [Name], Code) values
(1,'Aftercare','AC'),(2,'Annual Cemetery Event', 'ACE'),(3,'Call-in', 'CI'),(4,'Cold Call', 'CC'),
(5,'Community Outreach', 'CO'),(6,'Deed Delivery','DD'), (7,'Dine and Learn','DL'),(8,'Direct Mail','DM'),
(9,'Door to Door', 'DTD'), (10, 'Email Blast', 'EB'),(11,'Employee Referral', 'EF'),(12,'Facebook','FB'),
(13,'File Review','FR'),(14,'Location Signage','LS'),(15,'Marketing Agent','MA'),(16,'Newsletter','NL'),
(17,'Newspaper Ad','NA'),(18,'Park Ranger','PR')
set identity_insert [Sources] off

set identity_insert [Relationships] on
insert into Relationships (Id, [Name]) values
(1,'Spouse'),(2,'Son'),(3,'Daughter'),(4,'Brother'),(5,'Sister'),(6,'Father'),(7,'Mother'),(8,'POA'),(9,'Executor'),
(10,'Niece'),(11,'Nephew'),(12,'Son-in-Law'),(13,'Daughter-in-Law'),(14,'Sister-in-Law'),(15,'Brother-in-Law'),
(16,'Mother-in-Law'),(17,'Father-in-Law'),(18,'Friend'),(19,'Grandchild'),(20,'Cousin'),(21,'Partner'),(22,'Grandmother'),
(23,'Grandfather'),(24,'Grandparents'),(25,'Parents'),(26,'Aunt'),(27,'Uncle')
set identity_insert [Relationships] off

set identity_insert [BurialTypes] on
insert into BurialTypes (Id, [Name]) values (1,'Cremation Placement'),(2,'Ground Burial'),(3,'Lawn Crypt'),(4,'Mausoleum Entombment')
set identity_insert [BurialTypes] off

set identity_insert [ServiceTypes] on
insert into ServiceTypes (Id, [Name]) values (1,'Burial'),(2,'Entombment'),(3,'Cremation'),(4,'Ship-Out')
set identity_insert [ServiceTypes] off

set identity_insert [Priority] on
insert into [Priority] (Id, [Name]) values (1,'Low'),(2,'Medium'),(3,'High')
set identity_insert [Priority] off

set identity_insert [Status] on
insert into [Status] (Id, [Name]) values (1,'Active'),(2,'Deceased'),(3,'Do Not Call'),(4,'Inactive'),(5,'PreArranged/Sold')
set identity_insert [Status] off


------------------------------------------------------------------------------
----------------------------Populating User Tables----------------------------


set identity_insert [Organization] on
insert into [Organization] (Id, [Name], PrimaryColor) values (1,'Grass Park','#c82b0a')
set identity_insert [Organization] off

set identity_insert UserProfile on
insert into UserProfile (Id, [Name], Email, OrganizationId, UserTypeId, FirebaseUserId) values
(1,'John McSales','mrsales@sales.com', 1, 1, 'J1FNzJ5jkOPDbFKmwbyX3BU8rz13'),
(2,'Joe McManager','mrmanager@sales.com', 1, 2, 'G2d6bNelBATeOMHp7LySZzuToS22')
set identity_insert UserProfile off

set identity_insert Teams on
insert into Teams (Id, ManagerUserId, SalespersonUserId) values
(1,2,1)
set identity_insert Teams off

