using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface IContactRepository
    {
        void AddContact(Contact contact);
        List<Contact> GetAll();
        Contact GetById(int id);
        List<Contact> GetByUserId(int id);
        void UpdateContact(Contact contact);
    }
}