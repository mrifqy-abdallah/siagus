using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Siagus.Master
{
    public partial class ListKelasFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Siagus.Master.ListKelasFormatter";

        public ListKelasFormatterAttribute()
            : base(Key)
        {
        }
    }
}
