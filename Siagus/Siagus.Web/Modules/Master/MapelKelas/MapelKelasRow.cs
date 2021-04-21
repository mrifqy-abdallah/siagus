using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("mapel_kelas")]
    [DisplayName("Mapel Kelas"), InstanceName("Mapel Kelas")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    [LookupScript("Master.MapelKelas")]
    public sealed class MapelKelasRow : Row<MapelKelasRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Column("mapelkelas_id"), Identity, IdProperty]
        public Int32? MapelkelasId
        {
            get => fields.MapelkelasId[this];
            set => fields.MapelkelasId[this] = value;
        }

        [DisplayName("Mapel"), Column("mapel_id"), NotNull, ForeignKey("mapel", "mapel_id"), LeftJoin("jMapel"), TextualField("MapelNamaMapel")]
        public Int32? MapelId
        {
            get => fields.MapelId[this];
            set => fields.MapelId[this] = value;
        }

        [DisplayName("Kelas"), Column("kelas_id"), NotNull, ForeignKey("kelas", "kelas_id"), LeftJoin("jKelas"), TextualField("Kelas")]
        public Int32? KelasId
        {
            get => fields.KelasId[this];
            set => fields.KelasId[this] = value;
        }

        [DisplayName("Mapel Nama Mapel"), Expression("jMapel.[nama_mapel]"), LookupInclude]
        public String MapelNamaMapel
        {
            get => fields.MapelNamaMapel[this];
            set => fields.MapelNamaMapel[this] = value;
        }

        [DisplayName("Kelas"), Expression("jKelas.[kelas]"), LookupInclude]
        public String Kelas
        {
            get => fields.Kelas[this];
            set => fields.Kelas[this] = value;
        }

        public MapelKelasRow()
            : base()
        {
        }

        public MapelKelasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MapelkelasId;
            public Int32Field MapelId;
            public Int32Field KelasId;

            public StringField MapelNamaMapel;

            public StringField Kelas;
        }
    }
}
