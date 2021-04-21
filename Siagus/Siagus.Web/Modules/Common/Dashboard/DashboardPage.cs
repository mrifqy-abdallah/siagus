using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//</if:Northwind>
using Serenity;
using Serenity.Data;
using Serenity.Web;
using System;

namespace Siagus.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = new DashboardPageModel()
            {
            };

            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
