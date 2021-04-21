namespace Siagus.Master {
    export interface MapelKelasRow {
        MapelkelasId?: number;
        MapelId?: number;
        KelasId?: number;
        MapelNamaMapel?: string;
        Kelas?: string;
    }

    export namespace MapelKelasRow {
        export const idProperty = 'MapelkelasId';
        export const localTextPrefix = 'Master.MapelKelas';
        export const lookupKey = 'Master.MapelKelas';

        export function getLookup(): Q.Lookup<MapelKelasRow> {
            return Q.getLookup<MapelKelasRow>('Master.MapelKelas');
        }
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            MapelkelasId = "MapelkelasId",
            MapelId = "MapelId",
            KelasId = "KelasId",
            MapelNamaMapel = "MapelNamaMapel",
            Kelas = "Kelas"
        }
    }
}
