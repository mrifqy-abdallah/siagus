using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.MapelRow))]
    public class MapelController : Controller
    {
        [Route("Master/Mapel")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Mapel/MapelIndex.cshtml");
        }
    }
}