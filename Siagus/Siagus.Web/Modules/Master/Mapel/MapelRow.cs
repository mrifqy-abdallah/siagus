using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("mapel")]
    [DisplayName("Mata Pelajaran"), InstanceName("Mata Pelajaran")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    [LookupScript("Master.Mapel")]
    public sealed class MapelRow : Row<MapelRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("mapel_id"), Identity, IdProperty]
        public Int32? MapelId
        {
            get => fields.MapelId[this];
            set => fields.MapelId[this] = value;
        }

        [DisplayName("Mata Pelajaran"), Column("nama_mapel"), Size(40), NotNull, QuickSearch, NameProperty]
        public String NamaMapel
        {
            get => fields.NamaMapel[this];
            set => fields.NamaMapel[this] = value;
        }

        [DisplayName("Kelas")]
        [LookupEditor(typeof(KelasRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(MapelKelasRow), "MapelId", "KelasId")]
        public List<Int32> ListKelas
        {
            get => fields.ListKelas[this];
            set => fields.ListKelas[this] = value;
        }

        public MapelRow()
            : base()
        {
        }

        public MapelRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MapelId;
            public StringField NamaMapel;

            public ListField<Int32> ListKelas;
        }
    }
}
