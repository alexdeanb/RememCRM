using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RememCRM.Models;
using RememCRM.Repositories;

namespace RememCRM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoRepository _toDoRepository;

        public ToDoController(IToDoRepository toDoRepository)
        {
            _toDoRepository = toDoRepository;
        }

        [HttpGet("User/{id}")]
        public IActionResult GetByUserId(int id)
        {
            return Ok(_toDoRepository.GetAllByUserId(id));
        }

        [HttpGet("Item/{id}")]
        public IActionResult GetItemById(int id)
        {
            return Ok(_toDoRepository.GetItemById(id));

        }

        [HttpGet("Contact/{id}")]
        public IActionResult GetCompletedByContactId(int id)
        {
            return Ok(_toDoRepository.GetAllCompletedByContactId(id));

        }

        [HttpPost]
        public IActionResult AddToDo(ToDoItem ToDo)
        {
            _toDoRepository.AddToDo(ToDo);
            return CreatedAtAction("GetItemById", new { id = ToDo.Id }, ToDo);
        }

        [HttpPut]
        public IActionResult Put(ToDoItem ToDo)
        {
            if (ToDo == null)
            {
                return BadRequest();
            }
            _toDoRepository.UpdateToDo(ToDo);
            return CreatedAtAction("GetItemById", new { id = ToDo.Id }, ToDo);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _toDoRepository.DeleteToDo(id);
            return Ok();
        }
    }
}
