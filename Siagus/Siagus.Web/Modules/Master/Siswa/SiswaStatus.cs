using System.ComponentModel;

namespace Siagus.Master.Entities
{
    public enum SiswaStatus
    {
        [Description("Aktif")]
        Aktif = 1,
        [Description("Non Aktif")]
        NonAktif = 2,
        [Description("Lulus")]
        Lulus = 3
    }
}