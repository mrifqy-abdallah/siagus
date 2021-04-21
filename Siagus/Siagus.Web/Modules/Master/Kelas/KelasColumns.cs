using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Kelas")]
    [BasedOnRow(typeof(Entities.KelasRow), CheckNames = true)]
    public class KelasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KelasId { get; set; }
        [EditLink]
        public String Kelas { get; set; }
    }
}