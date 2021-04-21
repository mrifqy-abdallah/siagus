namespace Siagus.Master {
    export interface RiwayatPendidikanRow {
        RiwayatpendidikanId?: number;
        NipId?: string;
        JurusanPendidikan?: string;
        GelarPendidikan?: string;
        NipNamaGuru?: string;
        NipGenderGuru?: number;
        NipTempatlahirGuru?: string;
        NipTanggallahirGuru?: string;
        NipAlamatGuru?: string;
        NipTelponGuru?: string;
        NipEmailGuru?: string;
        NipStatuspnsGuru?: number;
        NipStatusaktifGuru?: number;
    }

    export namespace RiwayatPendidikanRow {
        export const idProperty = 'RiwayatpendidikanId';
        export const nameProperty = 'NipId';
        export const localTextPrefix = 'Master.RiwayatPendidikan';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            RiwayatpendidikanId = "RiwayatpendidikanId",
            NipId = "NipId",
            JurusanPendidikan = "JurusanPendidikan",
            GelarPendidikan = "GelarPendidikan",
            NipNamaGuru = "NipNamaGuru",
            NipGenderGuru = "NipGenderGuru",
            NipTempatlahirGuru = "NipTempatlahirGuru",
            NipTanggallahirGuru = "NipTanggallahirGuru",
            NipAlamatGuru = "NipAlamatGuru",
            NipTelponGuru = "NipTelponGuru",
            NipEmailGuru = "NipEmailGuru",
            NipStatuspnsGuru = "NipStatuspnsGuru",
            NipStatusaktifGuru = "NipStatusaktifGuru"
        }
    }
}
