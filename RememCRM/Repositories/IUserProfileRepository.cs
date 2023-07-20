using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetByFirebaseUserId(string id);
        UserProfile GetById(int id);
        void Update(UserProfile profile);
    }
}