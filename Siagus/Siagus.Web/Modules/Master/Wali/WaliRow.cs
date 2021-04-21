using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("wali")]
    [DisplayName("Wali"), InstanceName("Wali")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    [LookupScript("Master.Wali")]
    public sealed class WaliRow : Row<WaliRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("wali_id"), Identity, IdProperty]
        public Int32? WaliId
        {
            get => fields.WaliId[this];
            set => fields.WaliId[this] = value;
        }

        [DisplayName("Nama"), Column("nama_wali"), Size(40), NotNull, QuickSearch, NameProperty]
        public String NamaWali
        {
            get => fields.NamaWali[this];
            set => fields.NamaWali[this] = value;
        }

        [DisplayName("Alamat"), Column("alamat_wali"), NotNull]
        public String AlamatWali
        {
            get => fields.AlamatWali[this];
            set => fields.AlamatWali[this] = value;
        }

        [DisplayName("Telepon"), Column("telpon_wali"), Size(20), NotNull]
        public String TelponWali
        {
            get => fields.TelponWali[this];
            set => fields.TelponWali[this] = value;
        }

        public WaliRow()
            : base()
        {
        }

        public WaliRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WaliId;
            public StringField NamaWali;
            public StringField AlamatWali;
            public StringField TelponWali;
        }
    }
}
