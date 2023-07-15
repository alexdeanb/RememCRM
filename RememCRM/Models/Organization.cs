using System.Reflection.Metadata;
using System.Runtime.InteropServices;

namespace RememCRM.Models
{
    public class Organization
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PrimaryColor { get; set; }
        public Blob Logo { get; set; }

    }
}
