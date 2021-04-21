using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Siagus.Master
{
    public partial class MapelsEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "Siagus.Master.MapelsEditor";

        public MapelsEditorAttribute()
            : base(Key)
        {
        }
    }
}
