﻿namespace RememCRM.Models
{
    public class DistributableTemplate
    {
        public int Id { get; set; }
        public int OrganizationId { get; set; }
        public Organization Organization { get; set; }
        public string Description { get; set; }
    }
}
