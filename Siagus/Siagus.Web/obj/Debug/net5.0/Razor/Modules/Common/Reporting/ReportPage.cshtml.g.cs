#pragma checksum "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Common\Reporting\ReportPage.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0f20961ee528ca4b4dba3e88e7ee3557cca19a02"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Common_Reporting_ReportPage), @"mvc.1.0.view", @"/Modules/Common/Reporting/ReportPage.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\_ViewImports.cshtml"
using Siagus;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0f20961ee528ca4b4dba3e88e7ee3557cca19a02", @"/Modules/Common/Reporting/ReportPage.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"579a696726af1edb9bbc0c467f9570ad550d63f8", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Common_Reporting_ReportPage : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Siagus.ReportTree>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Common\Reporting\ReportPage.cshtml"
  
    ViewData["Title"] = "Reports";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n\r\n");
            WriteLiteral(@"

<div id=""ReportPage"" class=""s-DataGrid"">
    <div class=""grid-title"">
        <div class=""title-text"">Reports</div>
    </div>
    <div class=""grid-toolbar s-Toolbar clearfix"">
        <div class=""s-QuickSearchBar""><input /></div>
    </div>
    <div class=""report-box"">
        <div class=""report-list center"">
            <ul>
            ");
#nullable restore
#line 76 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Common\Reporting\ReportPage.cshtml"
       Write(renderMenu(Model.Root));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<script type=\"text/javascript\">\r\n    jQuery(function () {\r\n        new Siagus.Common.ReportPage($(\'#ReportPage\'));\r\n        Q.initFullHeightGridPage($(\'#ReportPage\'));\r\n    });\r\n</script>");
        }
        #pragma warning restore 1998
#nullable restore
#line 9 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Common\Reporting\ReportPage.cshtml"
 
    public HtmlString renderMenu(Siagus.ReportTree.Category category)
    {
        var sb = new StringBuilder();
        renderItems(sb, category);
        return new HtmlString(sb.ToString());
    }

    public void renderItems(System.Text.StringBuilder sb, Siagus.ReportTree.Category category)
    {
        if (category.Reports != null)
        {
            int i = 0;
            foreach (var x in category.Reports)
            {
                sb.Append("<li class='report-item ");
                sb.Append(i++ % 2 == 0 ? "odd" : "even");
                sb.Append("'>");
                sb.Append("<a href='#' class='report-link' data-key='");
                sb.Append(x.Key);
                sb.Append("'>");
                sb.Append(HtmlEncoder.Encode(x.Title));
                sb.Append("</a></li>");
            }
        }

        if (category.SubCategories != null)
        {
            foreach (var x in category.SubCategories)
            {
                renderTree(sb, x);
            }
        }
    }


    public void renderTree(System.Text.StringBuilder sb, Siagus.ReportTree.Category category)
    {
        sb.AppendLine("<li class='category expanded'>");
        sb.AppendLine("<div class='line'><span class='toggle'></span><span class='caption'>");
        sb.AppendLine(HtmlEncoder.Encode(category.Title));
        sb.AppendLine("</span></div>");

        if (category.SubCategories != null &&
            category.SubCategories.Count() > 0 ||
            category.Reports != null && category.Reports.Count() > 0)
        {
            sb.AppendLine("<ul class='" + (category.Reports != null ? "has-reports" : "") +
                "' style='display: block;'>");
            renderItems(sb, category);
            sb.AppendLine("</ul>");
        }
        sb.AppendLine("</li>");
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Siagus.ReportTree> Html { get; private set; }
    }
}
#pragma warning restore 1591
