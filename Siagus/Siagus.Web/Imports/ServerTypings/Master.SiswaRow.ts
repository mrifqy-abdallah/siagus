namespace Siagus.Master {
    export interface SiswaRow {
        NisnId?: string;
        NamaSiswa?: string;
        GenderSiswa?: SiswaGender;
        TempatlahirSiswa?: string;
        TanggallahirSiswa?: string;
        AlamatSiswa?: string;
        TelponSiswa?: string;
        EmailSiswa?: string;
        AngkatanSiswa?: number;
        KelasId?: number;
        KelasparalelId?: number;
        StatusSiswa?: SiswaStatus;
        Kelas?: string;
        Kelasparalel?: string;
        DaftarPrestasi?: PrestasiRow[];
        DaftarWali?: WaliSiswaRow[];
    }

    export namespace SiswaRow {
        export const idProperty = 'NisnId';
        export const nameProperty = 'NamaSiswa';
        export const localTextPrefix = 'Master.Siswa';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            NisnId = "NisnId",
            NamaSiswa = "NamaSiswa",
            GenderSiswa = "GenderSiswa",
            TempatlahirSiswa = "TempatlahirSiswa",
            TanggallahirSiswa = "TanggallahirSiswa",
            AlamatSiswa = "AlamatSiswa",
            TelponSiswa = "TelponSiswa",
            EmailSiswa = "EmailSiswa",
            AngkatanSiswa = "AngkatanSiswa",
            KelasId = "KelasId",
            KelasparalelId = "KelasparalelId",
            StatusSiswa = "StatusSiswa",
            Kelas = "Kelas",
            Kelasparalel = "Kelasparalel",
            DaftarPrestasi = "DaftarPrestasi",
            DaftarWali = "DaftarWali"
        }
    }
}
