using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RememCRM.Repositories;

namespace RememCRM.Controllers
{
    [Route("api/Static")]
    [ApiController]
    public class SourceController : ControllerBase
    {
        private readonly ISourceRepository _sourceRepository;

        public SourceController(ISourceRepository sourceRepository)
        {
            _sourceRepository = sourceRepository;
        }




        [HttpGet("Sources")]
        public IActionResult GetUserTypes()
        {
            return Ok(_sourceRepository.GetAllSources());
        }
    }
}
