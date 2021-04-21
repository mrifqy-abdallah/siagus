using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.SiswaRow))]
    public class SiswaController : Controller
    {
        [Route("Master/Siswa")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Siswa/SiswaIndex.cshtml");
        }
    }
}