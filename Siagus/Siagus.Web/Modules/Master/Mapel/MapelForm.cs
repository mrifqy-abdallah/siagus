using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.Mapel")]
    [BasedOnRow(typeof(Entities.MapelRow), CheckNames = true)]
    public class MapelForm
    {
        public String NamaMapel { get; set; }
        public List<Int32> ListKelas { get; set; }
    }
}