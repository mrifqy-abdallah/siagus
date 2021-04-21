using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Siagus.Master
{
    public partial class PrestasiEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Siagus.Master.PrestasiEditor";

        public PrestasiEditorAttribute()
            : base(Key)
        {
        }
    }
}
