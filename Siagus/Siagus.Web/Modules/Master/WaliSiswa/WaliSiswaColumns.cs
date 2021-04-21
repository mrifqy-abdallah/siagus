using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.WaliSiswa")]
    [BasedOnRow(typeof(Entities.WaliSiswaRow), CheckNames = true)]
    public class WaliSiswaColumns
    {
        [EditLink, Width(300)]
        public String WaliNamaWali { get; set; }
        [Width(100)]
        public String Hubungan { get; set; }
    }
}