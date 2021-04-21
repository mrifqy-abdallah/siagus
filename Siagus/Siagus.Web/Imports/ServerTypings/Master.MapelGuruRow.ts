namespace Siagus.Master {
    export interface MapelGuruRow {
        MapelguruId?: number;
        NipId?: string;
        MapelkelasId?: number;
        ListKelasParalel?: number[];
        MapelKelas?: string;
        NipNamaGuru?: string;
        NipGenderGuru?: number;
        NipTempatlahirGuru?: string;
        NipTanggallahirGuru?: string;
        NipAlamatGuru?: string;
        NipTelponGuru?: string;
        NipEmailGuru?: string;
        NipStatuspnsGuru?: number;
        NipStatusaktifGuru?: number;
        MapelkelasMapelId?: number;
        MapelkelasKelasId?: number;
    }

    export namespace MapelGuruRow {
        export const idProperty = 'MapelguruId';
        export const nameProperty = 'NipId';
        export const localTextPrefix = 'Master.MapelGuru';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            MapelguruId = "MapelguruId",
            NipId = "NipId",
            MapelkelasId = "MapelkelasId",
            ListKelasParalel = "ListKelasParalel",
            MapelKelas = "MapelKelas",
            NipNamaGuru = "NipNamaGuru",
            NipGenderGuru = "NipGenderGuru",
            NipTempatlahirGuru = "NipTempatlahirGuru",
            NipTanggallahirGuru = "NipTanggallahirGuru",
            NipAlamatGuru = "NipAlamatGuru",
            NipTelponGuru = "NipTelponGuru",
            NipEmailGuru = "NipEmailGuru",
            NipStatuspnsGuru = "NipStatuspnsGuru",
            NipStatusaktifGuru = "NipStatusaktifGuru",
            MapelkelasMapelId = "MapelkelasMapelId",
            MapelkelasKelasId = "MapelkelasKelasId"
        }
    }
}
