using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.WaliSiswa")]
    [BasedOnRow(typeof(Entities.WaliSiswaRow), CheckNames = true)]
    public class WaliSiswaForm
    {
        public Int32 WaliId { get; set; }
        [ReadOnly(true)]
        public String WaliAlamatWali { get; set; }
        [ReadOnly(true)]
        public String WaliTelponWali { get; set; }
        public String Hubungan { get; set; }
    }
}