
using Serenity.ComponentModel;
using System.ComponentModel;

namespace Siagus.Master
{
    [NestedPermissionKeys]
    [DisplayName("Master")]
    public class PermissionKeys
    {
        [Description("Modify")]
        public const string Modify = "Master:Modify";

        [Description("Read Only")]
        public const string Read = "Master:Read";
    }
}
