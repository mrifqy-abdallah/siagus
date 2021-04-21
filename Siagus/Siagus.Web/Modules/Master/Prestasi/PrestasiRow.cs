using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("prestasi")]
    [DisplayName("Prestasi"), InstanceName("Prestasi")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class PrestasiRow : Row<PrestasiRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("prestasi_id"), Identity, IdProperty]
        public Int32? PrestasiId
        {
            get => fields.PrestasiId[this];
            set => fields.PrestasiId[this] = value;
        }

        [DisplayName("NISN"), Column("nisn_id"), Size(20), NotNull, ForeignKey("siswa", "nisn_id"), LeftJoin("jNisn"), QuickSearch, NameProperty, TextualField("NisnNamaSiswa")]
        public String NisnId
        {
            get => fields.NisnId[this];
            set => fields.NisnId[this] = value;
        }

        [DisplayName("Prestasi"), Column("nama_prestasi"), Size(100), NotNull]
        public String NamaPrestasi
        {
            get => fields.NamaPrestasi[this];
            set => fields.NamaPrestasi[this] = value;
        }

        [DisplayName("Nama ajang/kegiatan"), Column("ajang_prestasi"), Size(200), NotNull]
        public String AjangPrestasi
        {
            get => fields.AjangPrestasi[this];
            set => fields.AjangPrestasi[this] = value;
        }

        [DisplayName("Tahun"), Column("tahun_prestasi"), NotNull]
        public Int32? TahunPrestasi
        {
            get => fields.TahunPrestasi[this];
            set => fields.TahunPrestasi[this] = value;
        }

        [DisplayName("Catatan Prestasi"), Column("catatan_prestasi"), Size(500)]
        public String CatatanPrestasi
        {
            get => fields.CatatanPrestasi[this];
            set => fields.CatatanPrestasi[this] = value;
        }

        [DisplayName("Nisn Nama Siswa"), Expression("jNisn.[nama_siswa]")]
        public String NisnNamaSiswa
        {
            get => fields.NisnNamaSiswa[this];
            set => fields.NisnNamaSiswa[this] = value;
        }

        [DisplayName("Nisn Gender Siswa"), Expression("jNisn.[gender_siswa]")]
        public Int32? NisnGenderSiswa
        {
            get => fields.NisnGenderSiswa[this];
            set => fields.NisnGenderSiswa[this] = value;
        }

        [DisplayName("Nisn Tempatlahir Siswa"), Expression("jNisn.[tempatlahir_siswa]")]
        public String NisnTempatlahirSiswa
        {
            get => fields.NisnTempatlahirSiswa[this];
            set => fields.NisnTempatlahirSiswa[this] = value;
        }

        [DisplayName("Nisn Tanggallahir Siswa"), Expression("jNisn.[tanggallahir_siswa]")]
        public DateTime? NisnTanggallahirSiswa
        {
            get => fields.NisnTanggallahirSiswa[this];
            set => fields.NisnTanggallahirSiswa[this] = value;
        }

        [DisplayName("Nisn Alamat Siswa"), Expression("jNisn.[alamat_siswa]")]
        public String NisnAlamatSiswa
        {
            get => fields.NisnAlamatSiswa[this];
            set => fields.NisnAlamatSiswa[this] = value;
        }

        [DisplayName("Nisn Telpon Siswa"), Expression("jNisn.[telpon_siswa]")]
        public String NisnTelponSiswa
        {
            get => fields.NisnTelponSiswa[this];
            set => fields.NisnTelponSiswa[this] = value;
        }

        [DisplayName("Nisn Email Siswa"), Expression("jNisn.[email_siswa]")]
        public String NisnEmailSiswa
        {
            get => fields.NisnEmailSiswa[this];
            set => fields.NisnEmailSiswa[this] = value;
        }

        [DisplayName("Nisn Angkatan Siswa"), Expression("jNisn.[angkatan_siswa]")]
        public Stream NisnAngkatanSiswa
        {
            get => fields.NisnAngkatanSiswa[this];
            set => fields.NisnAngkatanSiswa[this] = value;
        }

        [DisplayName("Nisn Kelas Id"), Expression("jNisn.[kelas_id]")]
        public Int32? NisnKelasId
        {
            get => fields.NisnKelasId[this];
            set => fields.NisnKelasId[this] = value;
        }

        [DisplayName("Nisn Kelasparalel Id"), Expression("jNisn.[kelasparalel_id]")]
        public Int32? NisnKelasparalelId
        {
            get => fields.NisnKelasparalelId[this];
            set => fields.NisnKelasparalelId[this] = value;
        }

        [DisplayName("Nisn Status Siswa"), Expression("jNisn.[status_siswa]")]
        public Int32? NisnStatusSiswa
        {
            get => fields.NisnStatusSiswa[this];
            set => fields.NisnStatusSiswa[this] = value;
        }

        public PrestasiRow()
            : base()
        {
        }

        public PrestasiRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PrestasiId;
            public StringField NisnId;
            public StringField NamaPrestasi;
            public StringField AjangPrestasi;
            public Int32Field TahunPrestasi;
            public StringField CatatanPrestasi;

            public StringField NisnNamaSiswa;
            public Int32Field NisnGenderSiswa;
            public StringField NisnTempatlahirSiswa;
            public DateTimeField NisnTanggallahirSiswa;
            public StringField NisnAlamatSiswa;
            public StringField NisnTelponSiswa;
            public StringField NisnEmailSiswa;
            public StreamField NisnAngkatanSiswa;
            public Int32Field NisnKelasId;
            public Int32Field NisnKelasparalelId;
            public Int32Field NisnStatusSiswa;
        }
    }
}
