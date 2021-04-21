using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Prestasi")]
    [BasedOnRow(typeof(Entities.PrestasiRow), CheckNames = true)]
    public class PrestasiColumns
    {
        [EditLink, Width(300)]
        public String NamaPrestasi { get; set; }
        [Width(500)]
        public String AjangPrestasi { get; set; }
        [Width(70)]
        public Stream TahunPrestasi { get; set; }
    }
}