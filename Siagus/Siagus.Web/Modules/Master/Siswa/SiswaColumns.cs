using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Siswa")]
    [BasedOnRow(typeof(Entities.SiswaRow), CheckNames = true)]
    public class SiswaColumns
    {
        [EditLink, AlignRight, Width(100)]
        public String NisnId { get; set; }
        [SortOrder(1), EditLink, Width(300)]
        public String NamaSiswa { get; set; }
        [Width(110)]
        public Int32 GenderSiswa { get; set; }
        [Hidden]
        public String TempatlahirSiswa { get; set; }
        [Hidden]
        public DateTime TanggallahirSiswa { get; set; }
        [Hidden]
        public String AlamatSiswa { get; set; }
        [Hidden]
        public String TelponSiswa { get; set; }
        [Hidden]
        public String EmailSiswa { get; set; }
        [Width(110)]
        public Int32 AngkatanSiswa { get; set; }
        [Width(110)]
        public String Kelas { get; set; }
        [Width(110)]
        public String Kelasparalel { get; set; }
        [Width(110)]
        public Int32 StatusSiswa { get; set; }
    }
}