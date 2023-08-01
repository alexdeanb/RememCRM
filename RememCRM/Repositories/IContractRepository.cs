using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface IContractRepository
    {
        void AddContract(Contract contract);
        void DeleteContract(int id);
        List<Contract> GetAllUserContracts(int id);
        Contract GetContractByContactId(int id);
        Contract GetContractById(int id);
        void UpdateContract(Contract contract);
    }
}