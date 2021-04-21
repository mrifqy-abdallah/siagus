using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("mapelguru_paralel")]
    [DisplayName("Mapelguru Paralel"), InstanceName("Mapelguru Paralel")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class MapelguruParalelRow : Row<MapelguruParalelRow.RowFields>, IIdRow
    {
        [DisplayName("Mapelguruparalel Id"), Column("mapelguruparalel_id"), Identity, IdProperty]
        public Int32? MapelguruparalelId
        {
            get => fields.MapelguruparalelId[this];
            set => fields.MapelguruparalelId[this] = value;
        }

        [DisplayName("Mapelguru"), Column("mapelguru_id"), NotNull, ForeignKey("mapel_guru", "mapelguru_id"), LeftJoin("jMapelguru"), TextualField("MapelguruNipId")]
        public Int32? MapelguruId
        {
            get => fields.MapelguruId[this];
            set => fields.MapelguruId[this] = value;
        }

        [DisplayName("Kelasparalel"), Column("kelasparalel_id"), NotNull, ForeignKey("kelas_paralel", "kelasparalel_id"), LeftJoin("jKelasparalel"), TextualField("Kelasparalel")]
        public Int32? KelasparalelId
        {
            get => fields.KelasparalelId[this];
            set => fields.KelasparalelId[this] = value;
        }

        [DisplayName("Mapelguru Nip Id"), Expression("jMapelguru.[nip_id]")]
        public String MapelguruNipId
        {
            get => fields.MapelguruNipId[this];
            set => fields.MapelguruNipId[this] = value;
        }

        [DisplayName("Mapelguru Mapelkelas Id"), Expression("jMapelguru.[mapelkelas_id]")]
        public Int32? MapelguruMapelkelasId
        {
            get => fields.MapelguruMapelkelasId[this];
            set => fields.MapelguruMapelkelasId[this] = value;
        }

        [DisplayName("Kelasparalel"), Expression("jKelasparalel.[kelasparalel]")]
        public String Kelasparalel
        {
            get => fields.Kelasparalel[this];
            set => fields.Kelasparalel[this] = value;
        }

        public MapelguruParalelRow()
            : base()
        {
        }

        public MapelguruParalelRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MapelguruparalelId;
            public Int32Field MapelguruId;
            public Int32Field KelasparalelId;

            public StringField MapelguruNipId;
            public Int32Field MapelguruMapelkelasId;

            public StringField Kelasparalel;
        }
    }
}
