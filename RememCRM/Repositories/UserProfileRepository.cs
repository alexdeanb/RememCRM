using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using RememCRM.Models;
using RememCRM.Utils;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT up.Id, up.Name, up.Email, up.FirebaseUserId, up.OrganizationId, up.UserTypeId,
                                        o.Name as 'OrganizationName', o.PrimaryColor, o.Logo,
                                        ut.Name as 'UserTypeName'
                                        FROM UserProfile up
                                        JOIN Organization o on up.OrganizationId = o.Id
                                        JOIN UserTypes ut on ut.Id = up.UserTypeId";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var profiles = new List<UserProfile>();
                        while (reader.Read())
                        {
                            profiles.Add(new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Email = DbUtils.GetString(reader, "Email"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                Organization = new Organization()
                                {
                                    Id = DbUtils.GetInt(reader, "OrganizationId"),
                                    Name = DbUtils.GetString(reader, "OrganizationName"),
                                    PrimaryColor = DbUtils.GetNullableString(reader, "PrimaryColor"),
                                },
                                UserType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "UserTypeId"),
                                    Name = DbUtils.GetString(reader, "UserTypeName")
                                }
                            });
                        }
                        return profiles;
                    }
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT up.Id, up.Name, up.Email, up.FirebaseUserId, up.OrganizationId, up.UserTypeId,
                                        o.Name as 'OrganizationName', o.PrimaryColor, o.Logo,
                                        ut.Name as 'UserTypeName'
                                        FROM UserProfile up
                                        JOIN Organization o on up.OrganizationId = o.Id
                                        JOIN UserTypes ut on ut.Id = up.UserTypeId
                                        WHERE up.Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        UserProfile profile = null;
                        if (reader.Read())
                        {
                            profile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Email = DbUtils.GetString(reader, "Email"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                Organization = new Organization()
                                {
                                    Id = DbUtils.GetInt(reader, "OrganizationId"),
                                    Name = DbUtils.GetString(reader, "OrganizationName"),
                                    PrimaryColor = DbUtils.GetNullableString(reader, "PrimaryColor"),
                                },
                                UserType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "UserTypeId"),
                                    Name = DbUtils.GetString(reader, "UserTypeName")
                                }
                            };
                        }
                        return profile;
                    }
                }
            }
        }

        public UserProfile GetByFirebaseUserId(string id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT up.Id, up.Name, up.Email, up.FirebaseUserId, up.OrganizationId, up.UserTypeId,
                                        o.Name as 'OrganizationName', o.PrimaryColor, o.Logo,
                                        ut.Name as 'UserTypeName'
                                        FROM UserProfile up
                                        JOIN Organization o on up.OrganizationId = o.Id
                                        JOIN UserTypes ut on ut.Id = up.UserTypeId
                                        WHERE up.FirebaseUserId = @id";
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        UserProfile profile = null;
                        if (reader.Read())
                        {
                            profile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Email = DbUtils.GetString(reader, "Email"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                OrganizationId = DbUtils.GetInt(reader, "OrganizationId"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                Organization = new Organization()
                                {
                                    Id = DbUtils.GetInt(reader, "OrganizationId"),
                                    Name = DbUtils.GetString(reader, "OrganizationName"),
                                    PrimaryColor = DbUtils.GetNullableString(reader, "PrimaryColor"),
                                },
                                UserType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "UserTypeId"),
                                    Name = DbUtils.GetString(reader, "UserTypeName")
                                }
                            };
                        }
                        return profile;
                    }
                }
            }
        }

        public void Update(UserProfile profile)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE UserProfile SET Name = @name, Email = @email, 
                                        WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@name", profile.Name);
                    DbUtils.AddParameter(cmd, "@email", profile.Email);
                    DbUtils.AddParameter(cmd, "@id", profile.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
