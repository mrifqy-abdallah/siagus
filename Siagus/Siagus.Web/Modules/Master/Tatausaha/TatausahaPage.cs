using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Siagus.Master.Pages
{

    [PageAuthorize(typeof(Entities.TatausahaRow))]
    public class TatausahaController : Controller
    {
        [Route("Master/Tatausaha")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Tatausaha/TatausahaIndex.cshtml");
        }
    }
}