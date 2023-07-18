using Microsoft.OpenApi.Expressions;
using Microsoft.VisualBasic;
using System;

namespace RememCRM.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public int AssignedUserId { get; set; }
        public string PrimaryFirstName { get; set; }
        public string PrimaryLastName { get; set; }
        public string PrimaryEmail { get; set; }
        public DateTime? PrimaryDOB { get; set; }
        public string SecondaryFirstName { get; set; }
        public string SecondaryLastName { get; set; }
        public string SecondaryEmail { get; set; }
        public DateTime? SecondaryDOB { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int? Zip { get; set; }
        public string HomePhone { get; set; }
        public string HomePhoneNotes { get; set; }
        public string CellPhone { get; set; }
        public string CellPhoneNotes { get; set; }
        public string Notes { get; set; }
        public int? ReferralContactId { get; set; }
        public int SourceId { get; set; }
        public Source Source { get; set; }
        public int StatusId { get; set; }
        public ListOption Status { get; set; }
    }
}
