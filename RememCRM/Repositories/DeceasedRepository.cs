using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using RememCRM.Models;
using Microsoft.Data.SqlClient;
using RememCRM.Utils;

namespace RememCRM.Repositories
{
    public class DeceasedRepository : BaseRepository
    {
        public DeceasedRepository(IConfiguration configuration) : base(configuration) { }

        public List<Deceased> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT 
                                        d.Id, d.Location, d.MaritalStatus, d.ReligiousAffiliation, d.BurialLocation, d.DeceasedName, d.DOD, d.RelationID, d.ServiceTypeId, d.BurialTypeId,
                                        r.Name as 'Relationship',
                                        st.Name as 'ServiceType',
                                        bt.Name as 'BurialType'
                                        FROM Deceased d
                                        JOIN Relationships r
                                        ON d.RelationID = r.Id
                                        JOIN ServiceTypes st
                                        ON d.ServiceTypeId = st.Id
                                        JOIN BurialTypes bt
                                        ON d.BurialTypeId = bt.Id";
                    using(SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var Deceased = new List<Deceased>();
                        while (reader.Read())
                        {
                            Deceased Decedent = new Deceased()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Location = DbUtils.GetNullableString(reader, "Location"),
                                MaritalStatus = DbUtils.GetNullableString(reader, "MaritalStatus"),
                                ReligiousAffiliation = DbUtils.GetNullableString(reader, "ReligiousAffiliation"),
                                BurialLocation = DbUtils.GetNullableString(reader, "BurialLocation"),
                                DeceasedName = DbUtils.GetString(reader, "DeceasedName"),
                                DOD = DbUtils.GetDateTime(reader, "DOD"),
                                RelationId = DbUtils.GetInt(reader, "RelationId"),
                                Relation = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "RelationId"),
                                    Name = DbUtils.GetString(reader, "Relationship"),
                                },
                                ServiceTypeId = DbUtils.GetNullableInt(reader, "ServiceTypeId"),
                                BurialTypeId = DbUtils.GetNullableInt(reader, "BurialTypeId")
                                
                            };
                           
                            if (DbUtils.GetNullableInt(reader, "ServiceTypeId") != null)
                            {
                                Decedent.ServiceType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "ServiceTypeId"),
                                    Name = DbUtils.GetString(reader, "ServiceType")
                                };
                            }

                            if (DbUtils.GetNullableInt(reader, "BurialTypeId") != null)
                            {
                                Decedent.BurialType = new ListOption()
                                {
                                    Id = DbUtils.GetInt(reader, "BurialTypeId"),
                                    Name = DbUtils.GetString(reader, "BurialTypeId"),
                                };
                            }

                            Deceased.Add(Decedent);
                        }

                        return Deceased;
                    }
                }
            }
        }
    }
}
