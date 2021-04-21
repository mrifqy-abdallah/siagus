namespace Siagus.Master {
    export interface MapelguruParalelRow {
        MapelguruparalelId?: number;
        MapelguruId?: number;
        KelasparalelId?: number;
        MapelguruNipId?: string;
        MapelguruMapelkelasId?: number;
        Kelasparalel?: string;
    }

    export namespace MapelguruParalelRow {
        export const idProperty = 'MapelguruparalelId';
        export const localTextPrefix = 'Master.MapelguruParalel';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            MapelguruparalelId = "MapelguruparalelId",
            MapelguruId = "MapelguruId",
            KelasparalelId = "KelasparalelId",
            MapelguruNipId = "MapelguruNipId",
            MapelguruMapelkelasId = "MapelguruMapelkelasId",
            Kelasparalel = "Kelasparalel"
        }
    }
}
