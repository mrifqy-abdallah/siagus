using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Columns
{
    [ColumnsScript("Master.RiwayatPendidikan")]
    [BasedOnRow(typeof(Entities.RiwayatPendidikanRow), CheckNames = true)]
    public class RiwayatPendidikanColumns
    {
        [EditLink, Width(450)]
        public String JurusanPendidikan { get; set; }
        [Width(150)]
        public String GelarPendidikan { get; set; }
    }
}