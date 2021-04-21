using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Guru")]
    [BasedOnRow(typeof(Entities.GuruRow), CheckNames = true)]
    public class GuruColumns
    {
        [EditLink, AlignRight, Width(170)]
        public String NipId { get; set; }
        [Width(300), EditLink]
        public String NamaGelarGuru { get; set; }
        [Width(110)]
        public Int32 GenderGuru { get; set; }
        [Hidden]
        public String TempatlahirGuru { get; set; }
        [Hidden]
        public DateTime TanggallahirGuru { get; set; }
        [Hidden]
        public String AlamatGuru { get; set; }
        [Hidden]
        public String TelponGuru { get; set; }
        [Width(250)]
        public String EmailGuru { get; set; }
        [Width(100)]
        public Int32 StatuspnsGuru { get; set; }
        [Width(100)]
        public Int32 StatusaktifGuru { get; set; }
    }
}