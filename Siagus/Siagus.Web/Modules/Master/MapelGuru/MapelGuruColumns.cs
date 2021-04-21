using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.MapelGuru")]
    [BasedOnRow(typeof(Entities.MapelGuruRow), CheckNames = true)]
    public class MapelGuruColumns
    {
        [EditLink, Width(350)]
        public Int32 MapelKelas { get; set; }
        [Width(100), ListKelasParalelFormatter]
        public List<Int32> ListKelasParalel { get; set; }
    }
}