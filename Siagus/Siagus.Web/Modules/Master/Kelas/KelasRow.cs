using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("kelas")]
    [DisplayName("Kelas"), InstanceName("Kelas")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    [LookupScript("Master.Kelas")]
    public sealed class KelasRow : Row<KelasRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Kelas Id"), Column("kelas_id"), Identity, IdProperty]
        public Int32? KelasId
        {
            get => fields.KelasId[this];
            set => fields.KelasId[this] = value;
        }

        [DisplayName("Kelas"), Column("kelas"), Size(11), NotNull, QuickSearch, NameProperty]
        public String Kelas
        {
            get => fields.Kelas[this];
            set => fields.Kelas[this] = value;
        }

        public KelasRow()
            : base()
        {
        }

        public KelasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field KelasId;
            public StringField Kelas;
        }
    }
}
