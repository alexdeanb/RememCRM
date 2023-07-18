namespace RememCRM.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int OrganizationId { get; set; }
        public Organization Organization { get; set; }
        public int UserTypeId { get; set; }
        public ListOption UserType { get; set; }
        public string FirebaseUserId { get; set; }

    }
}
