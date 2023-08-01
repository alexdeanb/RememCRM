using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RememCRM.Repositories;
using RememCRM.Models;


namespace RememCRM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {

        private readonly IContractRepository _contractRepository;

        public ContractController(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        [HttpGet("User/{id}")]
        public IActionResult GetContractsByUser(int id)
        {
            return Ok(_contractRepository.GetAllUserContracts(id));
        }

        [HttpGet("Contract/{id}")]
        public IActionResult GetContractById(int id)
        {
            Contract contract = _contractRepository.GetContractById(id);
            if(contract == null)
            {
                return NotFound();
            }
            return Ok(contract);
        }

        [HttpGet("contact/{id}")]
        public IActionResult GetContractByContactId(int id)
        {
            Contract contract = _contractRepository.GetContractByContactId(id);
            if (contract == null)
            {
                return NotFound();
            }
            return Ok(contract);
        }

        [HttpPost]
        public IActionResult AddContract(Contract contract)
        {
            _contractRepository.AddContract(contract);
            return CreatedAtAction("GetContractById", new {id = contract.Id}, contract);
        }

        [HttpPut]
        public IActionResult Put(Contract contract)
        {
            if (contract == null)
            {
                return BadRequest();
            }
            _contractRepository.UpdateContract(contract);
            return CreatedAtAction("GetContractById", new { id = contract.Id }, contract);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContract(int id)
        {
            _contractRepository.DeleteContract(id);
            return Ok();
        }
    }
}
