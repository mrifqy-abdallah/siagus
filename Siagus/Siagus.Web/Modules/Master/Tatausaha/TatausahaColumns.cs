using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Tatausaha")]
    [BasedOnRow(typeof(Entities.TatausahaRow), CheckNames = true)]
    public class TatausahaColumns
    {
        [EditLink, AlignRight]
        public Int32 TuId { get; set; }
        [EditLink, Width(300), SortOrder(1)]
        public String NamaTu { get; set; }
        [Hidden]
        public String AlamatTu { get; set; }
        [Hidden]
        public String TelponTu { get; set; }
    }
}