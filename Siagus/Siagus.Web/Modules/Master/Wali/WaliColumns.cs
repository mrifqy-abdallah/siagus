using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Wali")]
    [BasedOnRow(typeof(Entities.WaliRow), CheckNames = true)]
    public class WaliColumns
    {
        [EditLink, AlignRight]
        public Int32 WaliId { get; set; }
        [EditLink, Width(300), SortOrder(1)]
        public String NamaWali { get; set; }
        [Hidden]
        public String AlamatWali { get; set; }
        [Hidden]
        public String TelponWali { get; set; }
    }
}