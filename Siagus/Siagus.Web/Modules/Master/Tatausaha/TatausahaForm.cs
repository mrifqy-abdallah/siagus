using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Tatausaha")]
    [BasedOnRow(typeof(Entities.TatausahaRow), CheckNames = true)]
    public class TatausahaForm
    {
        public String NamaTu { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String AlamatTu { get; set; }
        public String TelponTu { get; set; }
    }
}