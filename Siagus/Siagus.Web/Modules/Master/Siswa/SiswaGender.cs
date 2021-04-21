using System.ComponentModel;

namespace Siagus.Master.Entities
{
    public enum SiswaGender
    {
        [Description("Laki-laki")]
        LakiLaki = 1,
        [Description("Perempuan")]
        Perempuan = 2,
        [Description("Gender lain")]
        Lain = 3
    }
}