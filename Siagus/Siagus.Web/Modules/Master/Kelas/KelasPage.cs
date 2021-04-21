using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.KelasRow))]
    public class KelasController : Controller
    {
        [Route("Master/Kelas")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Kelas/KelasIndex.cshtml");
        }
    }
}