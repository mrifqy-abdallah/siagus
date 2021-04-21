using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("tatausaha")]
    [DisplayName("Tatausaha"), InstanceName("Tatausaha")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class TatausahaRow : Row<TatausahaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("tu_id"), Identity, IdProperty]
        public Int32? TuId
        {
            get => fields.TuId[this];
            set => fields.TuId[this] = value;
        }

        [DisplayName("Nama"), Column("nama_tu"), Size(40), NotNull, QuickSearch, NameProperty]
        public String NamaTu
        {
            get => fields.NamaTu[this];
            set => fields.NamaTu[this] = value;
        }

        [DisplayName("Alamat"), Column("alamat_tu"), Size(100), NotNull, QuickSearch]
        public String AlamatTu
        {
            get => fields.AlamatTu[this];
            set => fields.AlamatTu[this] = value;
        }

        [DisplayName("Telepon"), Column("telpon_tu"), Size(20), NotNull, QuickSearch]
        public String TelponTu
        {
            get => fields.TelponTu[this];
            set => fields.TelponTu[this] = value;
        }

        public TatausahaRow()
            : base()
        {
        }

        public TatausahaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TuId;
            public StringField NamaTu;
            public StringField AlamatTu;
            public StringField TelponTu;
        }
    }
}
