using System;

namespace RememCRM.Models
{
    public class ToDoItem
    {

        public int Id { get; set; }
        public int UserId { get; set; }
        public UserProfile User { get; set; }
        public string Description { get; set; }
        public int? ContactId { get; set; }
        public Contact Contact { get; set; }
        public int? PriorityId { get; set; }
        public ListOption Priority { get; set; }
        public DateTime? Due { get; set; }
        public bool Completed { get; set; }
    }
}
