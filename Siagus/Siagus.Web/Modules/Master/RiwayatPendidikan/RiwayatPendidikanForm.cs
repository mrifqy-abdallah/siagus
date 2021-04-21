using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.RiwayatPendidikan")]
    [BasedOnRow(typeof(Entities.RiwayatPendidikanRow), CheckNames = true)]
    public class RiwayatPendidikanForm
    {
        public String JurusanPendidikan { get; set; }
        public String GelarPendidikan { get; set; }
    }
}