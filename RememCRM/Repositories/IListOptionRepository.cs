using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface IListOptionRepository
    {
        List<ListOption> GetAllBurialTypes();
        List<ListOption> GetAllContractTypes();
        List<ListOption> GetAllPriorities();
        List<ListOption> GetAllRelationships();
        List<ListOption> GetAllServiceTypes();
        List<ListOption> GetAllStatuses();
        List<ListOption> GetAllUserTypes();
    }
}