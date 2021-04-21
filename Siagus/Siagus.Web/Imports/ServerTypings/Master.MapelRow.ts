namespace Siagus.Master {
    export interface MapelRow {
        MapelId?: number;
        NamaMapel?: string;
        ListKelas?: number[];
    }

    export namespace MapelRow {
        export const idProperty = 'MapelId';
        export const nameProperty = 'NamaMapel';
        export const localTextPrefix = 'Master.Mapel';
        export const lookupKey = 'Master.Mapel';

        export function getLookup(): Q.Lookup<MapelRow> {
            return Q.getLookup<MapelRow>('Master.Mapel');
        }
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            MapelId = "MapelId",
            NamaMapel = "NamaMapel",
            ListKelas = "ListKelas"
        }
    }
}
