using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface ISourceRepository
    {
        List<Source> GetAllSources();
    }
}