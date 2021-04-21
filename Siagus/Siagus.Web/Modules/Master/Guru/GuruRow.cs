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
    [ConnectionKey("Default"), Module("Master"), TableName("guru")]
    [DisplayName("Guru"), InstanceName("Guru")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class GuruRow : Row<GuruRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("NIP"), Column("nip_id"), Size(30), PrimaryKey, IdProperty, QuickSearch]
        public String NipId
        {
            get => fields.NipId[this];
            set => fields.NipId[this] = value;
        }

        [DisplayName("Nama"), Column("nama_guru"), Size(40), NotNull, QuickSearch, NameProperty]
        public String NamaGuru
        {
            get => fields.NamaGuru[this];
            set => fields.NamaGuru[this] = value;
        }

        [DisplayName("Nama"), QuickSearch]
        [Expression("(SELECT CONCAT((SELECT nama_guru FROM guru WHERE nip_id = T0.nip_id), ', ', (SELECT GROUP_CONCAT(DISTINCT gelar_pendidikan SEPARATOR ', ') FROM riwayat_pendidikan WHERE nip_id = T0.nip_id)))")]
        public String NamaGelarGuru
        {
            get => fields.NamaGelarGuru[this];
            set => fields.NamaGelarGuru[this] = value;
        }

        [DisplayName("Gender"), Column("gender_guru"), NotNull, QuickFilter]
        public GuruGender? GenderGuru
        {
            get => (GuruGender?)fields.GenderGuru[this];
            set => fields.GenderGuru[this] = (Int32?)value;
        }

        [DisplayName("Tempat lahir"), Column("tempatlahir_guru"), Size(20), NotNull]
        public String TempatlahirGuru
        {
            get => fields.TempatlahirGuru[this];
            set => fields.TempatlahirGuru[this] = value;
        }

        [DisplayName("Tanggal lahir"), Column("tanggallahir_guru"), NotNull]
        public DateTime? TanggallahirGuru
        {
            get => fields.TanggallahirGuru[this];
            set => fields.TanggallahirGuru[this] = value;
        }

        [DisplayName("Alamat"), Column("alamat_guru"), NotNull, QuickSearch]
        public String AlamatGuru
        {
            get => fields.AlamatGuru[this];
            set => fields.AlamatGuru[this] = value;
        }

        [DisplayName("Telepon"), Column("telpon_guru"), Size(20), NotNull, QuickSearch]
        public String TelponGuru
        {
            get => fields.TelponGuru[this];
            set => fields.TelponGuru[this] = value;
        }

        [DisplayName("Email"), Column("email_guru"), Size(40), NotNull, QuickSearch]
        public String EmailGuru
        {
            get => fields.EmailGuru[this];
            set => fields.EmailGuru[this] = value;
        }

        [DisplayName("Status PNS"), Column("statuspns_guru"), NotNull, QuickFilter]
        public GuruStatusPns? StatuspnsGuru
        {
            get => (GuruStatusPns?)fields.StatuspnsGuru[this];
            set => fields.StatuspnsGuru[this] = (Int32?)value;
        }

        [DisplayName("Status Aktif"), Column("statusaktif_guru"), NotNull, QuickFilter]
        public GuruStatusAktif? StatusaktifGuru
        {
            get => (GuruStatusAktif?)fields.StatusaktifGuru[this];
            set => fields.StatusaktifGuru[this] = (Int32?)value;
        }

        [MasterDetailRelation(foreignKey: "NipId"), NotMapped]
        public List<RiwayatPendidikanRow> RiwayatPendidikan
        {
            get { return Fields.RiwayatPendidikan[this]; }
            set { Fields.RiwayatPendidikan[this] = value; }
        }

        [MasterDetailRelation(foreignKey: "NipId", IncludeColumns = "MapelKelas, ListKelasParalel"), NotMapped]
        public List<MapelGuruRow> MapelDiampu
        {
            get { return Fields.MapelDiampu[this]; }
            set { Fields.MapelDiampu[this] = value; }
        }

        public GuruRow()
            : base()
        {
        }

        public GuruRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField NipId;
            public StringField NamaGuru;
            public Int32Field GenderGuru;
            public StringField TempatlahirGuru;
            public DateTimeField TanggallahirGuru;
            public StringField AlamatGuru;
            public StringField TelponGuru;
            public StringField EmailGuru;
            public Int32Field StatuspnsGuru;
            public Int32Field StatusaktifGuru;

            public StringField NamaGelarGuru;

            public readonly RowListField<RiwayatPendidikanRow> RiwayatPendidikan;
            public readonly RowListField<MapelGuruRow> MapelDiampu;
        }
    }
}
