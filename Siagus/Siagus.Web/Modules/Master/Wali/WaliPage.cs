using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.WaliRow))]
    public class WaliController : Controller
    {
        [Route("Master/Wali")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Wali/WaliIndex.cshtml");
        }
    }
}