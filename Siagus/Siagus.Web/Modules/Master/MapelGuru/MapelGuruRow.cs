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
    [ConnectionKey("Default"), Module("Master"), TableName("mapel_guru")]
    [DisplayName("Mapel Guru"), InstanceName("Mapel Guru")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class MapelGuruRow : Row<MapelGuruRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Mapelguru Id"), Column("mapelguru_id"), Identity, IdProperty]
        public Int32? MapelguruId
        {
            get => fields.MapelguruId[this];
            set => fields.MapelguruId[this] = value;
        }

        [DisplayName("Nip"), Column("nip_id"), Size(20), NotNull, ForeignKey("guru", "nip_id"), LeftJoin("jNip"), QuickSearch, NameProperty, TextualField("NipNamaGuru")]
        [LookupEditor("Master.Guru")]
        public String NipId
        {
            get => fields.NipId[this];
            set => fields.NipId[this] = value;
        }

        [DisplayName("Mapelkelas"), Column("mapelkelas_id"), NotNull, ForeignKey("mapel_kelas", "mapelkelas_id"), LeftJoin("jMapelkelas")]
        public Int32? MapelkelasId
        {
            get => fields.MapelkelasId[this];
            set => fields.MapelkelasId[this] = value;
        }

        [DisplayName("Mata pelajaran - Kelas")]
        [Expression("(SELECT CONCAT((SELECT T1.nama_mapel FROM mapel AS T1 LEFT JOIN mapel_kelas AS T2 ON T1.mapel_id = T2.mapel_id WHERE T2.mapelkelas_id = T0.mapelkelas_id), ', ', (SELECT T3.kelas FROM kelas AS T3 LEFT JOIN mapel_kelas AS T4 ON T3.kelas_id = T4.kelas_id WHERE T4.mapelkelas_id = T0.mapelkelas_id)))")]
        public String MapelKelas
        {
            get => fields.MapelKelas[this];
            set => fields.MapelKelas[this] = value;
        }

        [DisplayName("Kelas paralel"), NotNull]
        [LookupEditor(typeof(KelasParalelRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(MapelguruParalelRow), "MapelguruId", "KelasparalelId")]
        public List<Int32> ListKelasParalel
        {
            get => fields.ListKelasParalel[this];
            set => fields.ListKelasParalel[this] = value;
        }

        [DisplayName("Nip Nama Guru"), Expression("jNip.[nama_guru]")]
        public String NipNamaGuru
        {
            get => fields.NipNamaGuru[this];
            set => fields.NipNamaGuru[this] = value;
        }

        [DisplayName("Nip Gender Guru"), Expression("jNip.[gender_guru]")]
        public Int32? NipGenderGuru
        {
            get => fields.NipGenderGuru[this];
            set => fields.NipGenderGuru[this] = value;
        }

        [DisplayName("Nip Tempatlahir Guru"), Expression("jNip.[tempatlahir_guru]")]
        public String NipTempatlahirGuru
        {
            get => fields.NipTempatlahirGuru[this];
            set => fields.NipTempatlahirGuru[this] = value;
        }

        [DisplayName("Nip Tanggallahir Guru"), Expression("jNip.[tanggallahir_guru]")]
        public DateTime? NipTanggallahirGuru
        {
            get => fields.NipTanggallahirGuru[this];
            set => fields.NipTanggallahirGuru[this] = value;
        }

        [DisplayName("Nip Alamat Guru"), Expression("jNip.[alamat_guru]")]
        public String NipAlamatGuru
        {
            get => fields.NipAlamatGuru[this];
            set => fields.NipAlamatGuru[this] = value;
        }

        [DisplayName("Nip Telpon Guru"), Expression("jNip.[telpon_guru]")]
        public String NipTelponGuru
        {
            get => fields.NipTelponGuru[this];
            set => fields.NipTelponGuru[this] = value;
        }

        [DisplayName("Nip Email Guru"), Expression("jNip.[email_guru]")]
        public String NipEmailGuru
        {
            get => fields.NipEmailGuru[this];
            set => fields.NipEmailGuru[this] = value;
        }

        [DisplayName("Nip Statuspns Guru"), Expression("jNip.[statuspns_guru]")]
        public Int32? NipStatuspnsGuru
        {
            get => fields.NipStatuspnsGuru[this];
            set => fields.NipStatuspnsGuru[this] = value;
        }

        [DisplayName("Nip Statusaktif Guru"), Expression("jNip.[statusaktif_guru]")]
        public Int32? NipStatusaktifGuru
        {
            get => fields.NipStatusaktifGuru[this];
            set => fields.NipStatusaktifGuru[this] = value;
        }

        [DisplayName("Mapelkelas Mapel Id"), Expression("jMapelkelas.[mapel_id]")]
        public Int32? MapelkelasMapelId
        {
            get => fields.MapelkelasMapelId[this];
            set => fields.MapelkelasMapelId[this] = value;
        }

        [DisplayName("Mapelkelas Kelas Id"), Expression("jMapelkelas.[kelas_id]")]
        public Int32? MapelkelasKelasId
        {
            get => fields.MapelkelasKelasId[this];
            set => fields.MapelkelasKelasId[this] = value;
        }

        public MapelGuruRow()
            : base()
        {
        }

        public MapelGuruRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MapelguruId;
            public StringField NipId;
            public Int32Field MapelkelasId;

            public ListField<Int32> ListKelasParalel;
            public StringField MapelKelas;

            public StringField NipNamaGuru;
            public Int32Field NipGenderGuru;
            public StringField NipTempatlahirGuru;
            public DateTimeField NipTanggallahirGuru;
            public StringField NipAlamatGuru;
            public StringField NipTelponGuru;
            public StringField NipEmailGuru;
            public Int32Field NipStatuspnsGuru;
            public Int32Field NipStatusaktifGuru;

            public Int32Field MapelkelasMapelId;
            public Int32Field MapelkelasKelasId;
        }
    }
}
