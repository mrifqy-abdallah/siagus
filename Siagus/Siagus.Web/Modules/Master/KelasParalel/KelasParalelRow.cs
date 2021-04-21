using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("kelas_paralel")]
    [DisplayName("Kelas Paralel"), InstanceName("Kelas Paralel")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    [LookupScript("Master.KelasParalel")]
    public sealed class KelasParalelRow : Row<KelasParalelRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Kelasparalel Id"), Column("kelasparalel_id"), Identity, IdProperty]
        public Int32? KelasparalelId
        {
            get => fields.KelasparalelId[this];
            set => fields.KelasparalelId[this] = value;
        }

        [DisplayName("Kelasparalel"), Column("kelasparalel"), Size(5), NotNull, QuickSearch, NameProperty]
        public String Kelasparalel
        {
            get => fields.Kelasparalel[this];
            set => fields.Kelasparalel[this] = value;
        }

        public KelasParalelRow()
            : base()
        {
        }

        public KelasParalelRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field KelasparalelId;
            public StringField Kelasparalel;
        }
    }
}
