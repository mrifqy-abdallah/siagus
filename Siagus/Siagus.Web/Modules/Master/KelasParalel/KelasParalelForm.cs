using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.KelasParalel")]
    [BasedOnRow(typeof(Entities.KelasParalelRow), CheckNames = true)]
    public class KelasParalelForm
    {
        public String Kelasparalel { get; set; }
    }
}