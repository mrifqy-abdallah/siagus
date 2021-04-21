using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Siagus.Master.Forms
{
    [FormScript("Master.MapelGuru")]
    [BasedOnRow(typeof(Entities.MapelGuruRow), CheckNames = true)]
    public class MapelGuruForm
    {
        [MapelsEditor]
        public Int32 MapelkelasId { get; set; }
        public List<Int32> ListKelasParalel { get; set; }
    }
}