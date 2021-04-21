namespace Siagus.Master {
    export interface WaliSiswaRow {
        WalisiswaId?: number;
        NisnId?: string;
        WaliId?: number;
        Hubungan?: string;
        NisnNamaSiswa?: string;
        NisnGenderSiswa?: number;
        NisnTempatlahirSiswa?: string;
        NisnTanggallahirSiswa?: string;
        NisnAlamatSiswa?: string;
        NisnTelponSiswa?: string;
        NisnEmailSiswa?: string;
        NisnAngkatanSiswa?: number[];
        NisnKelasId?: number;
        NisnKelasparalelId?: number;
        NisnStatusSiswa?: number;
        WaliNamaWali?: string;
        WaliAlamatWali?: string;
        WaliTelponWali?: string;
    }

    export namespace WaliSiswaRow {
        export const idProperty = 'WalisiswaId';
        export const nameProperty = 'NisnId';
        export const localTextPrefix = 'Master.WaliSiswa';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            WalisiswaId = "WalisiswaId",
            NisnId = "NisnId",
            WaliId = "WaliId",
            Hubungan = "Hubungan",
            NisnNamaSiswa = "NisnNamaSiswa",
            NisnGenderSiswa = "NisnGenderSiswa",
            NisnTempatlahirSiswa = "NisnTempatlahirSiswa",
            NisnTanggallahirSiswa = "NisnTanggallahirSiswa",
            NisnAlamatSiswa = "NisnAlamatSiswa",
            NisnTelponSiswa = "NisnTelponSiswa",
            NisnEmailSiswa = "NisnEmailSiswa",
            NisnAngkatanSiswa = "NisnAngkatanSiswa",
            NisnKelasId = "NisnKelasId",
            NisnKelasparalelId = "NisnKelasparalelId",
            NisnStatusSiswa = "NisnStatusSiswa",
            WaliNamaWali = "WaliNamaWali",
            WaliAlamatWali = "WaliAlamatWali",
            WaliTelponWali = "WaliTelponWali"
        }
    }
}
