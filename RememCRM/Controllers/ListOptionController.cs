using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RememCRM.Repositories;
using RememCRM.Models;
using Microsoft.AspNetCore.Authorization;

namespace RememCRM.Controllers
{
    [Authorize]
    [Route("api/Static")]
    [ApiController]
    public class ListOptionController : ControllerBase
    {
        private readonly IListOptionRepository _listOptionRepository;

        public ListOptionController(IListOptionRepository listOptionRepository)
        {
            _listOptionRepository = listOptionRepository;
        }

        [HttpGet("UserTypes")]
        public IActionResult GetUserTypes()
        {
            return Ok(_listOptionRepository.GetAllUserTypes());
        }

        [HttpGet("ContractTypes")]
        public IActionResult GetContractTypes()
        {
            return Ok(_listOptionRepository.GetAllContractTypes());
        }

        [HttpGet("Relationships")]
        public IActionResult GetRelationships()
        {
            return Ok(_listOptionRepository.GetAllRelationships());
        }

        [HttpGet("BurialTypes")]
        public IActionResult GetBurialTypes()
        {
            return Ok(_listOptionRepository.GetAllBurialTypes());
        }

        [HttpGet("ServiceTypes")]
        public IActionResult GetServiceTypes()
        {
            return Ok(_listOptionRepository.GetAllServiceTypes());
        }

        [HttpGet("Priorities")]
        public IActionResult GetPriorities()
        {
            return Ok(_listOptionRepository.GetAllPriorities());
        }

        [HttpGet("Statuses")]
        public IActionResult GetStatuses()
        {
            return Ok(_listOptionRepository.GetAllStatuses());
        }
    }
}
