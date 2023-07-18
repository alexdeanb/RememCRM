using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using RememCRM.Models;
using RememCRM.Utils;

namespace RememCRM.Repositories
{
    public class ContactRepository: BaseRepository
    {
        public ContactRepository(IConfiguration configuration) : base(configuration) { }

        public List<Contact> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT c.Id, c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, C.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralUserId, c.SourceId, c.StatusId,
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
                                PrimaryEmail = DbUtils.GetNullableString(reader, "PrimaryEmail"),
                                PrimaryDOB = DbUtils.GetNullableDateTime(reader, "PrimaryDOB"),
                                SecondaryFirstName = DbUtils.GetString(reader, "SecondaryFirstName"),
                                SecondaryLastName = DbUtils.GetString(reader, "SecondaryLastName"),
                                SecondaryEmail = DbUtils.GetNullableString(reader, "SecondaryEmail"),
                                SecondaryDOB = DbUtils.GetNullableDateTime(reader, "SecondaryDOB"),
                                Address = DbUtils.GetNullableString(reader, "Address"),
                                City = DbUtils.GetNullableString(reader, "City"),
                                State = DbUtils.GetNullableString(reader, "State"),
                                Zip = DbUtils.GetNullableInt(reader, "Zip"),
                                HomePhone = DbUtils.GetNullableString(reader, "HomePhone"),
                                HomePhoneNotes = DbUtils.GetNullableString(reader, "HomePhoneNotes"),
                                CellPhone = DbUtils.GetNullableString(reader, "CellPhone"),
                                CellPhoneNotes = DbUtils.GetNullableString(reader, "CellPhoneNotes"),
                                Notes = DbUtils.GetNullableString(reader, "Notes"),
                                ReferralContactId = DbUtils.GetNullableInt(reader, "ReferralUserId"),
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
                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT c.Id, c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, C.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralUserId, c.SourceId, c.StatusId,
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
                                PrimaryEmail = DbUtils.GetNullableString(reader, "PrimaryEmail"),
                                PrimaryDOB = DbUtils.GetNullableDateTime(reader, "PrimaryDOB"),
                                SecondaryFirstName = DbUtils.GetString(reader, "SecondaryFirstName"),
                                SecondaryLastName = DbUtils.GetString(reader, "SecondaryLastName"),
                                SecondaryEmail = DbUtils.GetNullableString(reader, "SecondaryEmail"),
                                SecondaryDOB = DbUtils.GetNullableDateTime(reader, "SecondaryDOB"),
                                Address = DbUtils.GetNullableString(reader, "Address"),
                                City = DbUtils.GetNullableString(reader, "City"),
                                State = DbUtils.GetNullableString(reader, "State"),
                                Zip = DbUtils.GetNullableInt(reader, "Zip"),
                                HomePhone = DbUtils.GetNullableString(reader, "HomePhone"),
                                HomePhoneNotes = DbUtils.GetNullableString(reader, "HomePhoneNotes"),
                                CellPhone = DbUtils.GetNullableString(reader, "CellPhone"),
                                CellPhoneNotes = DbUtils.GetNullableString(reader, "CellPhoneNotes"),
                                Notes = DbUtils.GetNullableString(reader, "Notes"),
                                ReferralContactId = DbUtils.GetNullableInt(reader, "ReferralUserId"),
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

        public Contact GetByUserId(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT c.Id, c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, C.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralUserId, c.SourceId, c.StatusId,
                                        ss.Name as 'SourceName', ss.Code as 'SourceCode',
                                        st.Name as 'StatusName'
                                        FROM contacts c JOIN sources ss on c.sourceId = ss.Id JOIN Status st on c.StatusId = st.Id
                                        WHERE c.AssignedUserId = @id";
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
                                PrimaryEmail = DbUtils.GetNullableString(reader, "PrimaryEmail"),
                                PrimaryDOB = DbUtils.GetNullableDateTime(reader, "PrimaryDOB"),
                                SecondaryFirstName = DbUtils.GetString(reader, "SecondaryFirstName"),
                                SecondaryLastName = DbUtils.GetString(reader, "SecondaryLastName"),
                                SecondaryEmail = DbUtils.GetNullableString(reader, "SecondaryEmail"),
                                SecondaryDOB = DbUtils.GetNullableDateTime(reader, "SecondaryDOB"),
                                Address = DbUtils.GetNullableString(reader, "Address"),
                                City = DbUtils.GetNullableString(reader, "City"),
                                State = DbUtils.GetNullableString(reader, "State"),
                                Zip = DbUtils.GetNullableInt(reader, "Zip"),
                                HomePhone = DbUtils.GetNullableString(reader, "HomePhone"),
                                HomePhoneNotes = DbUtils.GetNullableString(reader, "HomePhoneNotes"),
                                CellPhone = DbUtils.GetNullableString(reader, "CellPhone"),
                                CellPhoneNotes = DbUtils.GetNullableString(reader, "CellPhoneNotes"),
                                Notes = DbUtils.GetNullableString(reader, "Notes"),
                                ReferralContactId = DbUtils.GetNullableInt(reader, "ReferralUserId"),
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


        public void AddContact(Contact contact)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using(SqlCommand cmd = conn.CreateCommand())
                {
                   
                }
            }
        }

    }
}
