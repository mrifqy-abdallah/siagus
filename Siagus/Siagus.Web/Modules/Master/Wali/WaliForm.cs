using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Wali")]
    [BasedOnRow(typeof(Entities.WaliRow), CheckNames = true)]
    public class WaliForm
    {
        public String NamaWali { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String AlamatWali { get; set; }
        public String TelponWali { get; set; }
    }
}