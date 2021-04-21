using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.MapelGuruRow))]
    public class MapelGuruController : Controller
    {
        [Route("Master/MapelGuru")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/MapelGuru/MapelGuruIndex.cshtml");
        }
    }
}