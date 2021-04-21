using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.KelasParalelRow))]
    public class KelasParalelController : Controller
    {
        [Route("Master/KelasParalel")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/KelasParalel/KelasParalelIndex.cshtml");
        }
    }
}