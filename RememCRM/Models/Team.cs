using Microsoft.Identity.Client;
using System.Collections.Generic;

namespace RememCRM.Models
{
    public class Team
    {
        public int Id { get; set; }
        public UserProfile Manager { get; set; }
        public List<UserProfile> TeamMembers { get; set; }

    }
}
