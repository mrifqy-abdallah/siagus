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
    [ConnectionKey("Default"), Module("Master"), TableName("siswa")]
    [DisplayName("Siswa"), InstanceName("Siswa")]
    [ReadPermission("Master:Read")]
    [ModifyPermission("Master:Modify")]
    public sealed class SiswaRow : Row<SiswaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("NISN"), Column("nisn_id"), Size(20), PrimaryKey, IdProperty, QuickSearch]
        public String NisnId
        {
            get => fields.NisnId[this];
            set => fields.NisnId[this] = value;
        }

        [DisplayName("Nama"), Column("nama_siswa"), Size(40), NotNull, NameProperty, QuickSearch]
        public String NamaSiswa
        {
            get => fields.NamaSiswa[this];
            set => fields.NamaSiswa[this] = value;
        }

        [DisplayName("Gender"), Column("gender_siswa"), NotNull, QuickFilter]
        public SiswaGender? GenderSiswa
        {
            get => (SiswaGender?)fields.GenderSiswa[this];
            set => fields.GenderSiswa[this] = (Int32?)value;
        }

        [DisplayName("Tempat lahir"), Column("tempatlahir_siswa"), Size(20), NotNull]
        public String TempatlahirSiswa
        {
            get => fields.TempatlahirSiswa[this];
            set => fields.TempatlahirSiswa[this] = value;
        }

        [DisplayName("Tanggal lahir"), Column("tanggallahir_siswa"), NotNull]
        public DateTime? TanggallahirSiswa
        {
            get => fields.TanggallahirSiswa[this];
            set => fields.TanggallahirSiswa[this] = value;
        }

        [DisplayName("Alamat"), Column("alamat_siswa"), NotNull, QuickSearch]
        public String AlamatSiswa
        {
            get => fields.AlamatSiswa[this];
            set => fields.AlamatSiswa[this] = value;
        }

        [DisplayName("Telpon"), Column("telpon_siswa"), Size(20), NotNull, QuickSearch]
        public String TelponSiswa
        {
            get => fields.TelponSiswa[this];
            set => fields.TelponSiswa[this] = value;
        }

        [DisplayName("Email"), Column("email_siswa"), Size(40), NotNull, QuickSearch]
        public String EmailSiswa
        {
            get => fields.EmailSiswa[this];
            set => fields.EmailSiswa[this] = value;
        }

        [DisplayName("Angkatan"), Column("angkatan_siswa"), NotNull, QuickSearch]
        public Int32? AngkatanSiswa
        {
            get => fields.AngkatanSiswa[this];
            set => fields.AngkatanSiswa[this] = value;
        }

        [DisplayName("Kelas"), Column("kelas_id"), ForeignKey("kelas", "kelas_id"), LeftJoin("jKelas"), TextualField("Kelas")]
        [LookupEditor("Master.Kelas"), QuickFilter, QuickFilterOption("multiple", true), LookupInclude]
        public Int32? KelasId
        {
            get => fields.KelasId[this];
            set => fields.KelasId[this] = value;
        }

        [DisplayName("Kelas paralel"), Column("kelasparalel_id"), ForeignKey("kelas_paralel", "kelasparalel_id"), LeftJoin("jKelasparalel"), TextualField("Kelasparalel")]
        [LookupEditor("Master.KelasParalel"), QuickFilter, QuickFilterOption("multiple", true)]
        public Int32? KelasparalelId
        {
            get => fields.KelasparalelId[this];
            set => fields.KelasparalelId[this] = value;
        }

        [DisplayName("Status"), Column("status_siswa"), NotNull]
        public SiswaStatus? StatusSiswa
        {
            get => (SiswaStatus?)fields.StatusSiswa[this];
            set => fields.StatusSiswa[this] = (Int32?)value;
        }

        [DisplayName("Kelas"), Expression("jKelas.[kelas]"), QuickFilter, QuickFilterOption("multiple", true)]
        public String Kelas
        {
            get => fields.Kelas[this];
            set => fields.Kelas[this] = value;
        }

        [DisplayName("Kelas paralel"), Expression("jKelasparalel.[kelasparalel]"), QuickFilter]
        public String Kelasparalel
        {
            get => fields.Kelasparalel[this];
            set => fields.Kelasparalel[this] = value;
        }

        [MasterDetailRelation(foreignKey: "NisnId"), NotMapped]
        public List<PrestasiRow> DaftarPrestasi
        {
            get => fields.DaftarPrestasi[this];
            set => fields.DaftarPrestasi[this] = value;
        }

        [MasterDetailRelation(foreignKey: "NisnId", IncludeColumns = "WaliNamaWali, WaliAlamatWali, WaliTelponWali"), NotMapped]
        public List<WaliSiswaRow> DaftarWali
        {
            get => fields.DaftarWali[this];
            set => fields.DaftarWali[this] = value;
        }

        public SiswaRow()
            : base()
        {
        }

        public SiswaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField NisnId;
            public StringField NamaSiswa;
            public Int32Field GenderSiswa;
            public StringField TempatlahirSiswa;
            public DateTimeField TanggallahirSiswa;
            public StringField AlamatSiswa;
            public StringField TelponSiswa;
            public StringField EmailSiswa;
            public Int32Field AngkatanSiswa;
            public Int32Field KelasId;
            public Int32Field KelasparalelId;
            public Int32Field StatusSiswa;

            public StringField Kelas;
            public StringField Kelasparalel;

            public readonly RowListField<PrestasiRow> DaftarPrestasi;
            public readonly RowListField<WaliSiswaRow> DaftarWali;
        }
    }
}
