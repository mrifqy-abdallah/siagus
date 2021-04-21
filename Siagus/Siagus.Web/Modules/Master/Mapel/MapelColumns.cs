using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.Mapel")]
    [BasedOnRow(typeof(Entities.MapelRow), CheckNames = true)]
    public class MapelColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MapelId { get; set; }
        [EditLink, Width(300), SortOrder(1)]
        public String NamaMapel { get; set; }
        [Width(300), ListKelasFormatter, QuickFilter]
        public List<Int32> ListKelas { get; set; }
    }
}