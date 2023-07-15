using System;

namespace RememCRM.Models
{
    public class Deceased
    {
        public int Id { get; set; }
        public string Location { get; set; }
        public string MaritalStatus { get; set; }
        public string ReligiousAffiliation { get; set; }
        public string BurialLocation { get; set; }
        public string Name { get; set; }
        public DateTime DOD { get; set; }
        public int RelationId { get; set; }
        public ListOptions Relation { get; set; }
        public int ServiceTypeId { get; set; }
        public ListOptions ServiceType { get; set; }
        public int BurialTypeId { get; set; }
        public ListOptions BurialType { get; set; }

    }
}
