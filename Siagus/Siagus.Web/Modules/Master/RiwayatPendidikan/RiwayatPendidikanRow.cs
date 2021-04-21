using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("riwayat_pendidikan")]
    [DisplayName("Riwayat Pendidikan"), InstanceName("Riwayat Pendidikan")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class RiwayatPendidikanRow : Row<RiwayatPendidikanRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("riwayatpendidikan_id"), Identity, IdProperty]
        public Int32? RiwayatpendidikanId
        {
            get => fields.RiwayatpendidikanId[this];
            set => fields.RiwayatpendidikanId[this] = value;
        }

        [DisplayName("NIP"), Column("nip_id"), Size(20), NotNull, ForeignKey("guru", "nip_id"), LeftJoin("jNip"), QuickSearch, NameProperty, TextualField("NipNamaGuru")]
        public String NipId
        {
            get => fields.NipId[this];
            set => fields.NipId[this] = value;
        }

        [DisplayName("Pendidikan"), Column("jurusan_pendidikan"), Size(60), NotNull]
        public String JurusanPendidikan
        {
            get => fields.JurusanPendidikan[this];
            set => fields.JurusanPendidikan[this] = value;
        }

        [DisplayName("Gelar Pendidikan"), Column("gelar_pendidikan"), Size(20)]
        public String GelarPendidikan
        {
            get => fields.GelarPendidikan[this];
            set => fields.GelarPendidikan[this] = value;
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

        public RiwayatPendidikanRow()
            : base()
        {
        }

        public RiwayatPendidikanRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RiwayatpendidikanId;
            public StringField NipId;
            public StringField JurusanPendidikan;
            public StringField GelarPendidikan;

            public StringField NipNamaGuru;
            public Int32Field NipGenderGuru;
            public StringField NipTempatlahirGuru;
            public DateTimeField NipTanggallahirGuru;
            public StringField NipAlamatGuru;
            public StringField NipTelponGuru;
            public StringField NipEmailGuru;
            public Int32Field NipStatuspnsGuru;
            public Int32Field NipStatusaktifGuru;
        }
    }
}
