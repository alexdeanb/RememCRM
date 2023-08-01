using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using RememCRM.Models;
using RememCRM.Utils;

namespace RememCRM.Repositories
{
    public class ContractRepository : BaseRepository, IContractRepository
    {

        public ContractRepository(IConfiguration configuration) : base(configuration) { }

        public List<Contract> GetAllUserContracts(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                        cr.Id, cr.ContactId, cr.UserId, cr.ContractTypeId, cr.FuneralAmount, cr.TravelAmount, cr.CloseDate,
                                        ct.PrimaryFirstName, ct.PrimaryLastName, ct.PrimaryEmailAddress, ct.PrimaryDOB,
                                        ct.SecondaryFirstName, ct.SecondaryLastName, ct.SecondaryEmailAddress, ct.SecondaryDOB,
                                        ct.Address, ct.City, ct.State, ct.Zip, ct.HomePhone, ct.HomePhoneNote, ct.CellPhone, ct.CellPhoneNote,
                                        ct. Notes, ct.ReferralContactId, ct.SourceId, ct.StatusId, ct.AssignedUserId,
                                        up.Name as 'UserName', up.Email as 'UserEmail', up.OrganizationId, up.UserTypeId,
                                        crt.Name as 'ContractTypeName'
                                        FROM Contracts cr
                                        JOIN Contacts ct on cr.ContactId = ct.Id
                                        JOIN ContractTypes crt on cr.ContractTypeId = crt.Id
                                        JOIN UserProfile up on cr.UserId = up.Id
                                        WHERE cr.UserId = @id
                                        ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var Contracts = new List<Contract>();
                        while (reader.Read())
                        {
                            Contracts.Add(new Contract()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                ContactId = DbUtils.GetInt(reader, "ContactId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                ContractTypeId = DbUtils.GetInt(reader, "ContractTypeId"),
                                FuneralAmount = DbUtils.GetInt(reader, "FuneralAmount"),
                                TravelAmount = DbUtils.GetInt(reader, "TravelAmount"),
                                CloseDate = DbUtils.GetDateTime(reader, "CloseDate"),
                                Contact = new Contact()
                                {
                                    Id = DbUtils.GetInt(reader, "Id"),
                                    AssignedUserId = DbUtils.GetInt(reader, "AssignedUserId"),
                                    PrimaryFirstName = DbUtils.GetString(reader, "PrimaryFirstName"),
                                    PrimaryLastName = DbUtils.GetString(reader, "PrimaryLastName"),
                                    PrimaryEmailAddress = DbUtils.GetNullableString(reader, "PrimaryEmailAddress"),
                                    PrimaryDOB = DbUtils.GetNullableDateTime(reader, "PrimaryDOB"),
                                    SecondaryFirstName = DbUtils.GetString(reader, "SecondaryFirstName"),
                                    SecondaryLastName = DbUtils.GetString(reader, "SecondaryLastName"),
                                    SecondaryEmailAddress = DbUtils.GetNullableString(reader, "SecondaryEmailAddress"),
                                    SecondaryDOB = DbUtils.GetNullableDateTime(reader, "SecondaryDOB"),
                                    Address = DbUtils.GetNullableString(reader, "Address"),
                                    City = DbUtils.GetNullableString(reader, "City"),
                                    State = DbUtils.GetNullableString(reader, "State"),
                                    Zip = DbUtils.GetNullableInt(reader, "Zip"),
                                    HomePhone = DbUtils.GetNullableString(reader, "HomePhone"),
                                    HomePhoneNote = DbUtils.GetNullableString(reader, "HomePhoneNote"),
                                    CellPhone = DbUtils.GetNullableString(reader, "CellPhone"),
                                    CellPhoneNote = DbUtils.GetNullableString(reader, "CellPhoneNote"),
                                    Notes = DbUtils.GetNullableString(reader, "Notes"),
                                    ReferralContactId = DbUtils.GetNullableInt(reader, "ReferralContactId"),
                                    SourceId = DbUtils.GetInt(reader, "SourceId"),
                                    StatusId = DbUtils.GetInt(reader, "StatusId")
                                },
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    Name = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "UserEmail"),
                                    OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                },
                                ContractType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "ContractTypeId"),
                                    Name = DbUtils.GetString(reader, "ContractTypeName")
                                }
                            });
                        }
                        return Contracts;
                    }
                }
            }
        }
        public Contract GetContractById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                        cr.Id, cr.ContactId, cr.UserId, cr.ContractTypeId, cr.FuneralAmount, cr.TravelAmount, cr.CloseDate,
                                        ct.PrimaryFirstName, ct.PrimaryLastName, ct.PrimaryEmailAddress, ct.PrimaryDOB,
                                        ct.SecondaryFirstName, ct.SecondaryLastName, ct.SecondaryEmailAddress, ct.SecondaryDOB,
                                        ct.Address, ct.City, ct.State, ct.Zip, ct.HomePhone, ct.HomePhoneNote, ct.CellPhone, ct.CellPhoneNote,
                                        ct. Notes, ct.ReferralContactId, ct.SourceId, ct.StatusId, ct.AssignedUserId,
                                        up.Name as 'UserName', up.Email as 'UserEmail', up.OrganizationId, up.UserTypeId,
                                        crt.Name as 'ContractTypeName'
                                        FROM Contracts cr
                                        JOIN Contacts ct on cr.ContactId = ct.Id
                                        JOIN ContractTypes crt on cr.ContractTypeId = crt.Id
                                        JOIN UserProfile up on cr.UserId = up.Id
                                        WHERE cr.Id = @id
                                        ";

                    DbUtils.AddParameter(cmd, "@id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Contract Contract = null;
                        if (reader.Read())
                        {
                            Contract = new Contract()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                ContactId = DbUtils.GetInt(reader, "ContactId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                ContractTypeId = DbUtils.GetInt(reader, "ContractTypeId"),
                                FuneralAmount = DbUtils.GetInt(reader, "FuneralAmount"),
                                TravelAmount = DbUtils.GetInt(reader, "TravelAmount"),
                                CloseDate = DbUtils.GetDateTime(reader, "CloseDate"),
                                Contact = new Contact()
                                {
                                    Id = DbUtils.GetInt(reader, "Id"),
                                    AssignedUserId = DbUtils.GetInt(reader, "AssignedUserId"),
                                    PrimaryFirstName = DbUtils.GetString(reader, "PrimaryFirstName"),
                                    PrimaryLastName = DbUtils.GetString(reader, "PrimaryLastName"),
                                    PrimaryEmailAddress = DbUtils.GetNullableString(reader, "PrimaryEmailAddress"),
                                    PrimaryDOB = DbUtils.GetNullableDateTime(reader, "PrimaryDOB"),
                                    SecondaryFirstName = DbUtils.GetString(reader, "SecondaryFirstName"),
                                    SecondaryLastName = DbUtils.GetString(reader, "SecondaryLastName"),
                                    SecondaryEmailAddress = DbUtils.GetNullableString(reader, "SecondaryEmailAddress"),
                                    SecondaryDOB = DbUtils.GetNullableDateTime(reader, "SecondaryDOB"),
                                    Address = DbUtils.GetNullableString(reader, "Address"),
                                    City = DbUtils.GetNullableString(reader, "City"),
                                    State = DbUtils.GetNullableString(reader, "State"),
                                    Zip = DbUtils.GetNullableInt(reader, "Zip"),
                                    HomePhone = DbUtils.GetNullableString(reader, "HomePhone"),
                                    HomePhoneNote = DbUtils.GetNullableString(reader, "HomePhoneNote"),
                                    CellPhone = DbUtils.GetNullableString(reader, "CellPhone"),
                                    CellPhoneNote = DbUtils.GetNullableString(reader, "CellPhoneNote"),
                                    Notes = DbUtils.GetNullableString(reader, "Notes"),
                                    ReferralContactId = DbUtils.GetNullableInt(reader, "ReferralContactId"),
                                    SourceId = DbUtils.GetInt(reader, "SourceId"),
                                    StatusId = DbUtils.GetInt(reader, "StatusId")
                                },
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    Name = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "UserEmail"),
                                    OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                },
                                ContractType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "ContractTypeId"),
                                    Name = DbUtils.GetString(reader, "ContractTypeName")
                                }
                            };

                        }
                        return Contract;
                    }
                }
            }
        }
        public Contract GetContractByContactId(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                        cr.Id, cr.ContactId, cr.UserId, cr.ContractTypeId, cr.FuneralAmount, cr.TravelAmount, cr.CloseDate,
                                        ct.PrimaryFirstName, ct.PrimaryLastName, ct.PrimaryEmailAddress, ct.PrimaryDOB,
                                        ct.SecondaryFirstName, ct.SecondaryLastName, ct.SecondaryEmailAddress, ct.SecondaryDOB,
                                        ct.Address, ct.City, ct.State, ct.Zip, ct.HomePhone, ct.HomePhoneNote, ct.CellPhone, ct.CellPhoneNote,
                                        ct. Notes, ct.ReferralContactId, ct.SourceId, ct.StatusId, ct.AssignedUserId,
                                        up.Name as 'UserName', up.Email as 'UserEmail', up.OrganizationId, up.UserTypeId,
                                        crt.Name as 'ContractTypeName'
                                        FROM Contracts cr
                                        JOIN Contacts ct on cr.ContactId = ct.Id
                                        JOIN ContractTypes crt on cr.ContractTypeId = crt.Id
                                        JOIN UserProfile up on cr.UserId = up.Id
                                        WHERE cr.ContactId = @id
                                        ";

                    DbUtils.AddParameter(cmd, "@id", id);
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Contract Contract = null;
                        if (reader.Read())
                        {
                            Contract = new Contract()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                ContactId = DbUtils.GetInt(reader, "ContactId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                ContractTypeId = DbUtils.GetInt(reader, "ContractTypeId"),
                                FuneralAmount = DbUtils.GetInt(reader, "FuneralAmount"),
                                TravelAmount = DbUtils.GetInt(reader, "TravelAmount"),
                                CloseDate = DbUtils.GetDateTime(reader, "CloseDate"),
                                Contact = new Contact()
                                {
                                    Id = DbUtils.GetInt(reader, "Id"),
                                    AssignedUserId = DbUtils.GetInt(reader, "AssignedUserId"),
                                    PrimaryFirstName = DbUtils.GetString(reader, "PrimaryFirstName"),
                                    PrimaryLastName = DbUtils.GetString(reader, "PrimaryLastName"),
                                    PrimaryEmailAddress = DbUtils.GetNullableString(reader, "PrimaryEmailAddress"),
                                    PrimaryDOB = DbUtils.GetNullableDateTime(reader, "PrimaryDOB"),
                                    SecondaryFirstName = DbUtils.GetString(reader, "SecondaryFirstName"),
                                    SecondaryLastName = DbUtils.GetString(reader, "SecondaryLastName"),
                                    SecondaryEmailAddress = DbUtils.GetNullableString(reader, "SecondaryEmailAddress"),
                                    SecondaryDOB = DbUtils.GetNullableDateTime(reader, "SecondaryDOB"),
                                    Address = DbUtils.GetNullableString(reader, "Address"),
                                    City = DbUtils.GetNullableString(reader, "City"),
                                    State = DbUtils.GetNullableString(reader, "State"),
                                    Zip = DbUtils.GetNullableInt(reader, "Zip"),
                                    HomePhone = DbUtils.GetNullableString(reader, "HomePhone"),
                                    HomePhoneNote = DbUtils.GetNullableString(reader, "HomePhoneNote"),
                                    CellPhone = DbUtils.GetNullableString(reader, "CellPhone"),
                                    CellPhoneNote = DbUtils.GetNullableString(reader, "CellPhoneNote"),
                                    Notes = DbUtils.GetNullableString(reader, "Notes"),
                                    ReferralContactId = DbUtils.GetNullableInt(reader, "ReferralContactId"),
                                    SourceId = DbUtils.GetInt(reader, "SourceId"),
                                    StatusId = DbUtils.GetInt(reader, "StatusId")
                                },
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    Name = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "UserEmail"),
                                    OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                },
                                ContractType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "ContractTypeId"),
                                    Name = DbUtils.GetString(reader, "ContractTypeName")
                                }
                            };

                        }
                        return Contract;
                    }
                }
            }
        }
        public void AddContract(Contract contract)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Contracts (ContactId, UserId, ContractTypeId, FuneralAmount, TravelAmount, CloseDate)
                                        OUTPUT INSERTED.Id
                                        VALUES (@ContactId, @UserId, @ContractTypeId, @FuneralAmount, @TravelAmount, @CloseDate)";
                    DbUtils.AddParameter(cmd, "@ContactId", contract.ContactId);
                    DbUtils.AddParameter(cmd, "@UserId", contract.UserId);
                    DbUtils.AddParameter(cmd, "@ContractTypeId", contract.ContractTypeId);
                    DbUtils.AddParameter(cmd, "@FuneralAmount", contract.FuneralAmount);
                    DbUtils.AddParameter(cmd, "@TravelAmount", contract.TravelAmount);
                    DbUtils.AddParameter(cmd, "@CloseDate", contract.CloseDate);

                    contract.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void UpdateContract(Contract contract)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Contracts
                                        SET ContactId = @ContactId, UserId = @UserId, ContractTypeId = @ContractTypeId,
                                        FuneralAmount = @FuneralAmount, TravelAmount = @TravelAmount, CloseDate = @CloseDate
                                        WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@ContactId", contract.ContactId);
                    DbUtils.AddParameter(cmd, "@UserId", contract.UserId);
                    DbUtils.AddParameter(cmd, "@ContractTypeId", contract.ContractTypeId);
                    DbUtils.AddParameter(cmd, "@FuneralAmount", contract.FuneralAmount);
                    DbUtils.AddParameter(cmd, "@TravelAmount", contract.TravelAmount);
                    DbUtils.AddParameter(cmd, "@CloseDate", contract.CloseDate);
                    DbUtils.AddParameter(cmd, "@Id", contract.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void DeleteContract(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Contracts WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
