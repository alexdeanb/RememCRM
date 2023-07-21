using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using RememCRM.Models;
using RememCRM.Utils;

namespace RememCRM.Repositories
{
    public class ContactRepository : BaseRepository, IContactRepository
    {
        public ContactRepository(IConfiguration configuration) : base(configuration) { }

        public List<Contact> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT c.Id, c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, C.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralContactId, c.SourceId, c.StatusId,
                                        ss.Name as 'SourceName', ss.Code as 'SourceCode',
                                        st.Name as 'StatusName'
                                        FROM contacts c JOIN sources ss on c.sourceId = ss.Id JOIN Status st on c.StatusId = st.Id
                                        ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var contacts = new List<Contact>();
                        while (reader.Read())
                        {
                            contacts.Add(new Contact()
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
                                Source = new Source()
                                {
                                    Id = DbUtils.GetInt(reader, "SourceId"),
                                    Name = DbUtils.GetString(reader, "SourceName"),
                                    Code = DbUtils.GetString(reader, "SourceCode")
                                },
                                StatusId = DbUtils.GetInt(reader, "StatusId"),
                                Status = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "StatusId"),
                                    Name = DbUtils.GetString(reader, "StatusName")
                                }


                            });
                        }
                        return contacts;
                    }
                }
            }
        }

        public Contact GetById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT c.Id, c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, C.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralContactId, c.SourceId, c.StatusId,
                                        ss.Name as 'SourceName', ss.Code as 'SourceCode',
                                        st.Name as 'StatusName'
                                        FROM contacts c JOIN sources ss on c.sourceId = ss.Id JOIN Status st on c.StatusId = st.Id
                                        WHERE c.Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Contact contact = null;
                        if (reader.Read())
                        {
                            contact = new Contact()
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
                                Source = new Source()
                                {
                                    Id = DbUtils.GetInt(reader, "SourceId"),
                                    Name = DbUtils.GetString(reader, "SourceName"),
                                    Code = DbUtils.GetString(reader, "SourceCode")
                                },
                                StatusId = DbUtils.GetInt(reader, "StatusId"),
                                Status = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "StatusId"),
                                    Name = DbUtils.GetString(reader, "StatusName")
                                }
                            };
                        }
                        return contact;
                    }
                }
            }
        }

        public List<Contact> GetByUserId(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT c.Id, c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, C.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralContactId, c.SourceId, c.StatusId,
                                        ss.Name as 'SourceName', ss.Code as 'SourceCode',
                                        st.Name as 'StatusName'
                                        FROM contacts c JOIN sources ss on c.sourceId = ss.Id JOIN Status st on c.StatusId = st.Id
                                        WHERE c.AssignedUserId = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var contacts = new List<Contact>();
                        while (reader.Read())
                        {
                            contacts.Add(new Contact()
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
                                Source = new Source()
                                {
                                    Id = DbUtils.GetInt(reader, "SourceId"),
                                    Name = DbUtils.GetString(reader, "SourceName"),
                                    Code = DbUtils.GetString(reader, "SourceCode")
                                },
                                StatusId = DbUtils.GetInt(reader, "StatusId"),
                                Status = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "StatusId"),
                                    Name = DbUtils.GetString(reader, "StatusName")
                                }
                            });
                        }
                        return contacts;
                    }
                }
            }
        }


        public void AddContact(Contact contact)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Contacts (AssignedUserId, PrimaryFirstName, PrimaryLastName, PrimaryEmailAddress,
                      PrimaryDOB, SecondaryFirstName, SecondaryLastName, SecondaryEmailAddress, SecondaryDOB, 
                      Address, City, State, Zip, HomePhone, HomePhoneNote, CellPhone, CellPhoneNote, Notes, ReferralContactId,
                      SourceId, StatusId)
                      OUTPUT INSERTED.Id
                      Values (@AssignedUserId, @PrimaryFirstName, @PrimaryLastName, @PrimaryEmailAddress,
                      @PrimaryDOB, @SecondaryFirstName, @SecondaryLastName, @SecondaryEmailAddress, @SecondaryDOB, 
                      @Address, @City, @State, @Zip, @HomePhone, @HomePhoneNote, @CellPhone, @CellPhoneNote, @Notes, @ReferralContactId,
                      @SourceId, @StatusId)";
                    DbUtils.AddParameter(cmd, "@AssignedUserId", contact.AssignedUserId);
                    DbUtils.AddParameter(cmd, "@PrimaryFirstName", contact.PrimaryFirstName);
                    DbUtils.AddParameter(cmd, "@PrimaryLastName", contact.PrimaryLastName);
                    DbUtils.AddParameter(cmd, "@PrimaryEmailAddress", contact.PrimaryEmailAddress);
                    DbUtils.AddParameter(cmd, "@PrimaryDOB", contact.PrimaryDOB);
                    DbUtils.AddParameter(cmd, "@SecondaryFirstName", contact.SecondaryFirstName);
                    DbUtils.AddParameter(cmd, "@SecondaryLastName", contact.SecondaryLastName);
                    DbUtils.AddParameter(cmd, "@SecondaryEmailAddress", contact.SecondaryEmailAddress);
                    DbUtils.AddParameter(cmd, "@SecondaryDOB", contact.SecondaryDOB);
                    DbUtils.AddParameter(cmd, "@Address", contact.Address);
                    DbUtils.AddParameter(cmd, "@City", contact.City);
                    DbUtils.AddParameter(cmd, "@State", contact.State);
                    DbUtils.AddParameter(cmd, "@Zip", contact.Zip);
                    DbUtils.AddParameter(cmd, "@HomePhone", contact.HomePhone);
                    DbUtils.AddParameter(cmd, "@HomePhoneNote", contact.HomePhoneNote);
                    DbUtils.AddParameter(cmd, "@CellPhone", contact.CellPhone);
                    DbUtils.AddParameter(cmd, "@CellPhoneNote", contact.CellPhoneNote);
                    DbUtils.AddParameter(cmd, "@Notes", contact.Notes);
                    DbUtils.AddParameter(cmd, "@ReferralContactId", contact.ReferralContactId);
                    DbUtils.AddParameter(cmd, "@SourceId", contact.SourceId);
                    DbUtils.AddParameter(cmd, "@StatusId", contact.StatusId);

                    contact.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void UpdateContact(Contact contact)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Contacts
                      SET AssignedUserId = @AssignedUserId, PrimaryFirstName = @PrimaryFirstName, PrimaryLastName = @PrimaryLastName, PrimaryEmailAddress = @PrimaryEmailAddress,
                      PrimaryDOB = @PrimaryDOB, SecondaryFirstName = @SecondaryFirstName, SecondaryLastName = @SecondaryLastName, SecondaryEmailAddress = @SecondaryEmailAddress, SecondaryDOB = @SecondaryDOB, 
                      Address = @Address, City = @City, State = @State, Zip = @Zip, HomePhone = @HomePhone, HomePhoneNote = @HomePhoneNote, CellPhone = @CellPhone, CellPhoneNote = @CellPhoneNote, Notes = @Notes,
                      ReferralContactId = @ReferralContactId, SourceId = @SourceId, StatusId = @StatusId
                      WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@AssignedUserId", contact.AssignedUserId);
                    DbUtils.AddParameter(cmd, "@PrimaryFirstName", contact.PrimaryFirstName);
                    DbUtils.AddParameter(cmd, "@PrimaryLastName", contact.PrimaryLastName);
                    DbUtils.AddParameter(cmd, "@PrimaryEmailAddress", contact.PrimaryEmailAddress);
                    DbUtils.AddParameter(cmd, "@PrimaryDOB", contact.PrimaryDOB);
                    DbUtils.AddParameter(cmd, "@SecondaryFirstName", contact.SecondaryFirstName);
                    DbUtils.AddParameter(cmd, "@SecondaryLastName", contact.SecondaryLastName);
                    DbUtils.AddParameter(cmd, "@SecondaryEmailAddress", contact.SecondaryEmailAddress);
                    DbUtils.AddParameter(cmd, "@SecondaryDOB", contact.SecondaryDOB);
                    DbUtils.AddParameter(cmd, "@Address", contact.Address);
                    DbUtils.AddParameter(cmd, "@City", contact.City);
                    DbUtils.AddParameter(cmd, "@State", contact.State);
                    DbUtils.AddParameter(cmd, "@Zip", contact.Zip);
                    DbUtils.AddParameter(cmd, "@HomePhone", contact.HomePhone);
                    DbUtils.AddParameter(cmd, "@HomePhoneNote", contact.HomePhoneNote);
                    DbUtils.AddParameter(cmd, "@CellPhone", contact.CellPhone);
                    DbUtils.AddParameter(cmd, "@CellPhoneNote", contact.CellPhoneNote);
                    DbUtils.AddParameter(cmd, "@Notes", contact.Notes);
                    DbUtils.AddParameter(cmd, "@ReferralContactId", contact.ReferralContactId);
                    DbUtils.AddParameter(cmd, "@SourceId", contact.SourceId);
                    DbUtils.AddParameter(cmd, "@StatusId", contact.StatusId);
                    DbUtils.AddParameter(cmd, "@Id", contact.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
