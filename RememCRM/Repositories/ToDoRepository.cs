using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using RememCRM.Models;
using Microsoft.Data.SqlClient;
using RememCRM.Utils;

namespace RememCRM.Repositories
{
    public class ToDoRepository : BaseRepository, IToDoRepository
    {
        public ToDoRepository(IConfiguration configuration) : base(configuration) { }

        public List<ToDoItem> GetAllByUserId(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
                                        td.Id, td.UserId, td.Description, td.ContactId, td.PriorityId, td.due, td.Completed,
                                        c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, c.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralContactId, c.SourceId, c.StatusId,
                                        p.Name as 'PriorityName', 
                                        up.Name as 'UserName', up.Email as 'UserEmail',up.OrganizationId, up.UserTypeId, up.FirebaseUserId
                                        FROM ToDoItems td
                                        JOIN Contacts c ON td.ContactId = c.Id
                                        JOIN [Priority] p ON td.PriorityId = p.Id
                                        JOIN UserProfile up ON up.Id = td.UserId
                                        WHERE td.UserId = @id AND td.completed = 0
                                        ORDER BY td.due";
                   
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var ToDos = new List<ToDoItem>();
                        while (reader.Read())
                        {
                            ToDos.Add(new ToDoItem()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                Description = DbUtils.GetString(reader, "Description"),
                                ContactId = DbUtils.GetNullableInt(reader, "ContactId"),
                                PriorityId = DbUtils.GetNullableInt(reader, "PriorityId"),
                                Due = DbUtils.GetNullableDateTime(reader, "Due"),
                                Completed = reader.GetBoolean(reader.GetOrdinal("Completed")),
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
                                Priority = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "PriorityId"),
                                    Name = DbUtils.GetString(reader, "PriorityName")
                                },
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    Name = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "UserEmail"),
                                    FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                    OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                }
                            });

                        }
                        return ToDos;
                    }
                }
            }
        }

        public ToDoItem GetItemById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT
                                        td.Id, td.UserId, td.Description, td.ContactId, td.PriorityId, td.due, td.Completed,
                                        c.AssignedUserId, c.PrimaryFirstName, c.PrimaryLastName, c.PrimaryEmailAddress, c.PrimaryDOB, c.SecondaryFirstName, c.SecondaryLastName, c.SecondaryEmailAddress, c.SecondaryDOB,
                                        c.Address, c.City, c.State, c.Zip, c.HomePhone, c.HomePhoneNote, c.CellPhone, c.CellPhoneNote, c.Notes, c.ReferralContactId, c.SourceId, c.StatusId,
                                        p.Name as 'PriorityName', 
                                        up.Name as 'UserName', up.Email as 'UserEmail',up.OrganizationId, up.UserTypeId, up.FirebaseUserId
                                        FROM ToDoItems td
                                        JOIN Contacts c ON td.ContactId = c.Id
                                        JOIN [Priority] p ON td.PriorityId = p.Id
                                        JOIN UserProfile up ON up.Id = td.UserId
                                        WHERE td.Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        
                        ToDoItem ToDo = null;
                        if (reader.Read())
                        {
                            ToDo = new ToDoItem()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                Description = DbUtils.GetString(reader, "Description"),
                                ContactId = DbUtils.GetNullableInt(reader, "ContactId"),
                                PriorityId = DbUtils.GetNullableInt(reader, "PriorityId"),
                                Due = DbUtils.GetNullableDateTime(reader, "Due"),
                                Completed = reader.GetBoolean(reader.GetOrdinal("Completed")),
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
                                Priority = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "PriorityId"),
                                    Name = DbUtils.GetString(reader, "PriorityName")
                                },
                                User = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserId"),
                                    Name = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "UserEmail"),
                                    FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                    OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                }

                            };
                  

                        }
                        return ToDo;
                    }
                }
            }
        }

        public void AddToDo(ToDoItem ToDo)
        { 
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO ToDoItems (UserId, Description, ContactId, PriorityId, Due, Completed)
                                        OUTPUT INSERTED.Id
                                        VALUES (@UserId, @Description, @ContactId, @PriorityId, @Due, @Completed)";
                    DbUtils.AddParameter(cmd, "@UserId", ToDo.UserId);
                    DbUtils.AddParameter(cmd, "@Description", ToDo.Description);
                    DbUtils.AddParameter(cmd, "@ContactId", ToDo.ContactId);
                    DbUtils.AddParameter(cmd, "@PriorityId", ToDo.PriorityId);
                    DbUtils.AddParameter(cmd, "@Due", ToDo.Due);
                    DbUtils.AddParameter(cmd, "@Completed", ToDo.Completed);

                    ToDo.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateToDo(ToDoItem ToDo)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE ToDoItems
                                        SET UserId = @UserId, Description = @Description, ContactId = @ContactId, PriorityId = @PriorityId, Due = @Due, Completed = @Completed
                                        WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@UserId", ToDo.UserId);
                    DbUtils.AddParameter(cmd, "@Description", ToDo.Description);
                    DbUtils.AddParameter(cmd, "@ContactId", ToDo.ContactId);
                    DbUtils.AddParameter(cmd, "@PriorityId", ToDo.PriorityId);
                    DbUtils.AddParameter(cmd, "@Due", ToDo.Due);
                    DbUtils.AddParameter(cmd, "@Completed", ToDo.Completed);
                    DbUtils.AddParameter(cmd, "@Id", ToDo.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteToDo(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM ToDoItems WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
