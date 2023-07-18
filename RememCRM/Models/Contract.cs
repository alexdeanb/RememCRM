using System;

namespace RememCRM.Models
{
    public class Contract
    {
        public int Id { get; set; }
        public int ContactId { get; set; }
        public Contact Contact { get; set; }
        public int UserId { get; set; }
        public UserProfile User { get; set; }
        public int ContractTypeId { get; set; }
        public ListOption ContractType { get; set; }
        public int FuneralAmount { get; set; }
        public int TravelAmount { get; set; }
        public DateTime CloseDate { get; set; }

    }
}
