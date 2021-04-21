using System.ComponentModel;

namespace Siagus.Master.Entities
{
    public enum GuruStatusAktif
    {
        [Description("Aktif")]
        Aktif = 1,
        [Description("Cuti")]
        Cuti = 2,
        [Description("Non Aktif")]
        NonAktif = 3
    }
}