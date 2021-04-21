using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Kelas")]
    [BasedOnRow(typeof(Entities.KelasRow), CheckNames = true)]
    public class KelasForm
    {
        public String Kelas { get; set; }
    }
}