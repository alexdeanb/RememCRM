using Microsoft.OpenApi.Expressions;
using Microsoft.VisualBasic;
using System;

namespace RememCRM.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public int AssignedUserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zip { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNotes { get; set; }
        public string Notes { get; set; }
        public int ReferralUserId { get; set; }
        public int DeceasedId { get; set; }
        public int SourceId { get; set; }
        public ListOptions Source { get; set; }
        public int StatusId { get; set; }
        public ListOptions Status { get; set; }
    }
}
