#pragma checksum "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Membership\Account\SignUp\AccountActivateEmail.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8f3904da98ecc2edc33043c584fece515f4375c7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_SignUp_AccountActivateEmail), @"mvc.1.0.view", @"/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8f3904da98ecc2edc33043c584fece515f4375c7", @"/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"579a696726af1edb9bbc0c467f9570ad550d63f8", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_SignUp_AccountActivateEmail : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Siagus.Membership.ActivateEmailModel>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<html>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8f3904da98ecc2edc33043c584fece515f4375c74010", async() => {
                WriteLiteral("\r\n    <title>Activate your Siagus account</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8f3904da98ecc2edc33043c584fece515f4375c75027", async() => {
                WriteLiteral("\r\n    <p>");
#nullable restore
#line 8 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Membership\Account\SignUp\AccountActivateEmail.cshtml"
  Write(Model.DisplayName);

#line default
#line hidden
#nullable disable
                WriteLiteral(",</p>\r\n\r\n    <p>We received a request to create a new account on Siagus with your e-mail address.</p>\r\n\r\n    <p>Click the link below to activate your account:</p>\r\n\r\n    <p><a");
                BeginWriteAttribute("href", " href=\"", 329, "\"", 355, 1);
#nullable restore
#line 14 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Membership\Account\SignUp\AccountActivateEmail.cshtml"
WriteAttributeValue("", 336, Model.ActivateLink, 336, 19, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(">");
#nullable restore
#line 14 "C:\Users\Microsoft\source\repos\Siagus\Siagus\Siagus.Web\Modules\Membership\Account\SignUp\AccountActivateEmail.cshtml"
                                Write(Model.ActivateLink);

#line default
#line hidden
#nullable disable
                WriteLiteral("</a></p>\r\n\r\n    <p>If it wasn\'t you who requested this, you can ignore this email.</p>\r\n\r\n    Thanks,\r\n    The \"Siagus\" Team\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Siagus.Membership.ActivateEmailModel> Html { get; private set; }
    }
}
#pragma warning restore 1591