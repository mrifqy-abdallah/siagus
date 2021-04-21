namespace Siagus.Master {
    export interface PrestasiRow {
        PrestasiId?: number;
        NisnId?: string;
        NamaPrestasi?: string;
        AjangPrestasi?: string;
        TahunPrestasi?: number;
        CatatanPrestasi?: string;
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
    }

    export namespace PrestasiRow {
        export const idProperty = 'PrestasiId';
        export const nameProperty = 'NisnId';
        export const localTextPrefix = 'Master.Prestasi';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            PrestasiId = "PrestasiId",
            NisnId = "NisnId",
            NamaPrestasi = "NamaPrestasi",
            AjangPrestasi = "AjangPrestasi",
            TahunPrestasi = "TahunPrestasi",
            CatatanPrestasi = "CatatanPrestasi",
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
            NisnStatusSiswa = "NisnStatusSiswa"
        }
    }
}
