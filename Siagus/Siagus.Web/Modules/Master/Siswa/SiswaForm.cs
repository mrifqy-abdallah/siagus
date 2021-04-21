using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Siswa")]
    [BasedOnRow(typeof(Entities.SiswaRow), CheckNames = true)]
    public class SiswaForm
    {
        [Tab("Data Diri")]
        public String NisnId { get; set; }
        public String NamaSiswa { get; set; }
        public Int32 GenderSiswa { get; set; }
        [HalfWidth]
        public String TempatlahirSiswa { get; set; }
        [HalfWidth]
        public DateTime TanggallahirSiswa { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String AlamatSiswa { get; set; }
        public String TelponSiswa { get; set; }
        [EmailAddressEditor]
        public String EmailSiswa { get; set; }
        [DateYearEditor(MinYear = "1990", MaxYear = "2099")]
        [OneThirdWidth]
        public Int32 AngkatanSiswa { get; set; }
        [OneThirdWidth]
        public Int32 KelasId { get; set; }
        [OneThirdWidth]
        public Int32 KelasparalelId { get; set; }
        public Int32 StatusSiswa { get; set; }

        [Tab("Prestasi")]
        [DisplayName("Daftar prestasi"), PrestasiEditor]
        public List<Entities.PrestasiRow> DaftarPrestasi { get; set; }

        [Tab("Wali")]
        [DisplayName("Daftar wali"), WaliSiswaEditor]
        public List<Entities.WaliSiswaRow> DaftarWali { get; set; }
    }
}