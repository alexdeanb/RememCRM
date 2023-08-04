using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface IDeceasedRepository
    {
        List<Deceased> GetAll();
    }
}