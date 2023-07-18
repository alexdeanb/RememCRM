using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using RememCRM.Models;
using RememCRM.Utils;

namespace RememCRM.Repositories
{
    public class ListOptionRepository : BaseRepository, IListOptionRepository
    {

        public ListOptionRepository(IConfiguration configuration) : base(configuration) { }
        public List<ListOption> GetAllStatuses()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [Status]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var Statuses = new List<ListOption>();
                        while (reader.Read())
                        {
                            Statuses.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return Statuses;
                    }
                }
            }
        }
        public List<ListOption> GetAllUserTypes()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [UserTypes]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var UserTypes = new List<ListOption>();
                        while (reader.Read())
                        {
                            UserTypes.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return UserTypes;
                    }
                }
            }
        }
        public List<ListOption> GetAllContractTypes()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [ContractTypes]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var ContractTypes = new List<ListOption>();
                        while (reader.Read())
                        {
                            ContractTypes.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return ContractTypes;
                    }
                }
            }
        }
        public List<ListOption> GetAllRelationships()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [Relationships]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var Relationships = new List<ListOption>();
                        while (reader.Read())
                        {
                            Relationships.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return Relationships;
                    }
                }
            }
        }
        public List<ListOption> GetAllBurialTypes()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [BurialTypes]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var BurialTypes = new List<ListOption>();
                        while (reader.Read())
                        {
                            BurialTypes.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return BurialTypes;
                    }
                }
            }
        }
        public List<ListOption> GetAllServiceTypes()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [ServiceTypes]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var ServiceTypes = new List<ListOption>();
                        while (reader.Read())
                        {
                            ServiceTypes.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return ServiceTypes;
                    }
                }
            }
        }
        public List<ListOption> GetAllPriorities()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [Priority]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var Priority = new List<ListOption>();
                        while (reader.Read())
                        {
                            Priority.Add(new ListOption()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            });
                        }
                        return Priority;
                    }
                }
            }
        }

    }
}
