using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Prestasi")]
    [BasedOnRow(typeof(Entities.PrestasiRow), CheckNames = true)]
    public class PrestasiForm
    {
        public String NamaPrestasi { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String AjangPrestasi { get; set; }
        [DateYearEditor(MinYear = "1990", MaxYear = "2099")]
        public Int32 TahunPrestasi { get; set; }
        [TextAreaEditor(Rows = 10)]
        public String CatatanPrestasi { get; set; }
    }
}