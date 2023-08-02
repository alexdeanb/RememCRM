using RememCRM.Models;
using System.Collections.Generic;

namespace RememCRM.Repositories
{
    public interface IToDoRepository
    {
        void AddToDo(ToDoItem ToDo);
        void DeleteToDo(int id);
        List<ToDoItem> GetAllByUserId(int id);
        List<ToDoItem> GetAllCompletedByContactId(int id);
        ToDoItem GetItemById(int id);
        void UpdateToDo(ToDoItem ToDo);
    }
}