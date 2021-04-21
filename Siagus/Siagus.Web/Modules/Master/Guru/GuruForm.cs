using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Guru")]
    [BasedOnRow(typeof(Entities.GuruRow), CheckNames = true)]
    public class GuruForm
    {
        [Tab("Data Diri")]
        public String NipId { get; set; }
        [SortOrder(1)]
        public String NamaGuru { get; set; }
        public Int32 GenderGuru { get; set; }
        [HalfWidth]
        public String TempatlahirGuru { get; set; }
        [HalfWidth]
        public DateTime TanggallahirGuru { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String AlamatGuru { get; set; }
        [DisplayName("Riwayat pendidikan"), RiwayatPendidikanEditor]
        public List<Entities.RiwayatPendidikanRow> RiwayatPendidikan { get; set; }
        public String TelponGuru { get; set; }
        [EmailAddressEditor]
        public String EmailGuru { get; set; }
        public Int32 StatuspnsGuru { get; set; }
        public Int32 StatusaktifGuru { get; set; }

        [Tab("Mengampu")]
        [DisplayName("Mata pelajaran yang diampu"), MapelGuruEditor]
        public List<Entities.MapelGuruRow> MapelDiampu { get; set; }
    }
}