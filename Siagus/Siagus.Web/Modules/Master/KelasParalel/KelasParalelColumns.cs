using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.KelasParalel")]
    [BasedOnRow(typeof(Entities.KelasParalelRow), CheckNames = true)]
    public class KelasParalelColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KelasparalelId { get; set; }
        [EditLink]
        public String Kelasparalel { get; set; }
    }
}