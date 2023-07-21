using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RememCRM.Repositories;
using RememCRM.Models;

namespace RememCRM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactRepository _contactRepository;
        public ContactController(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        [HttpGet()]
        public IActionResult Get()
        {
            
            return Ok(_contactRepository.GetAll());
        }


        [HttpGet("contact/{id}")]
        public IActionResult GetById(int id)
        {
            var contact = _contactRepository.GetById(id);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        [HttpGet("user/{id}")]
        public IActionResult GetByUserId(int id)
        {
            var contactList = _contactRepository.GetByUserId(id);
            if (contactList == null)
            {
                return NotFound();
            }
            return Ok(contactList);
        }

        [HttpPost]
        public IActionResult Post(Contact contact)
        {

            _contactRepository.AddContact(contact);
            return CreatedAtAction(nameof(Get), new { id = contact.Id }, contact);
        }
    }
}
