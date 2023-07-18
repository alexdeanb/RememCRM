using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using RememCRM.Models;
using RememCRM.Utils;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public class SourceRepository: BaseRepository
    {
        public SourceRepository(IConfiguration configuration) : base(configuration) { }

        public List<Source> GetAllSources()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT * FROM [Sources]";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var Sources = new List<Source>();
                        while (reader.Read())
                        {
                            Sources.Add(new Source()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Code = DbUtils.GetString(reader,"Code")
                            });
                        }
                        return Sources;
                    }
                }
            }
        }
    }
}
