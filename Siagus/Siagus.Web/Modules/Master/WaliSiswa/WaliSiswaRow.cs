using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Siagus.Master.Entities
{
    [ConnectionKey("Default"), Module("Master"), TableName("wali_siswa")]
    [DisplayName("Wali Siswa"), InstanceName("Wali Siswa")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class WaliSiswaRow : Row<WaliSiswaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("walisiswa_id"), Identity, IdProperty]
        public Int32? WalisiswaId
        {
            get => fields.WalisiswaId[this];
            set => fields.WalisiswaId[this] = value;
        }

        [DisplayName("Nisn"), Column("nisn_id"), Size(20), NotNull, ForeignKey("siswa", "nisn_id"), LeftJoin("jNisn"), QuickSearch, NameProperty, TextualField("NisnNamaSiswa")]
        public String NisnId
        {
            get => fields.NisnId[this];
            set => fields.NisnId[this] = value;
        }

        [DisplayName("Nama Wali"), Column("wali_id"), NotNull, ForeignKey("wali", "wali_id"), LeftJoin("jWali"), TextualField("WaliNamaWali")]
        [LookupEditor("Master.Wali", InplaceAdd = true)]
        public Int32? WaliId
        {
            get => fields.WaliId[this];
            set => fields.WaliId[this] = value;
        }

        [DisplayName("Hubungan"), Column("hubungan"), Size(40), NotNull]
        public String Hubungan
        {
            get => fields.Hubungan[this];
            set => fields.Hubungan[this] = value;
        }

        [DisplayName("Nama Siswa"), Expression("jNisn.[nama_siswa]")]
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

        [DisplayName("Wali Nama Wali"), Expression("jWali.[nama_wali]")]
        public String WaliNamaWali
        {
            get => fields.WaliNamaWali[this];
            set => fields.WaliNamaWali[this] = value;
        }

        [DisplayName("Wali Alamat Wali"), Expression("jWali.[alamat_wali]")]
        public String WaliAlamatWali
        {
            get => fields.WaliAlamatWali[this];
            set => fields.WaliAlamatWali[this] = value;
        }

        [DisplayName("Wali Telpon Wali"), Expression("jWali.[telpon_wali]")]
        public String WaliTelponWali
        {
            get => fields.WaliTelponWali[this];
            set => fields.WaliTelponWali[this] = value;
        }

        public WaliSiswaRow()
            : base()
        {
        }

        public WaliSiswaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WalisiswaId;
            public StringField NisnId;
            public Int32Field WaliId;
            public StringField Hubungan;

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

            public StringField WaliNamaWali;
            public StringField WaliAlamatWali;
            public StringField WaliTelponWali;
        }
    }
}
