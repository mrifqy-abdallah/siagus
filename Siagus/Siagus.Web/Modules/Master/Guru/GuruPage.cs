using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.GuruRow))]
    public class GuruController : Controller
    {
        [Route("Master/Guru")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Guru/GuruIndex.cshtml");
        }
    }
}