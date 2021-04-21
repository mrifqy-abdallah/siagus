using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Siagus.Master
{
    public partial class RiwayatPendidikanEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Siagus.Master.RiwayatPendidikanEditor";

        public RiwayatPendidikanEditorAttribute()
            : base(Key)
        {
        }
    }
}
