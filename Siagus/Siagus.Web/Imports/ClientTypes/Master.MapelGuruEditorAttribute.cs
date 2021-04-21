using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Siagus.Master
{
    public partial class MapelGuruEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Siagus.Master.MapelGuruEditor";

        public MapelGuruEditorAttribute()
            : base(Key)
        {
        }
    }
}
