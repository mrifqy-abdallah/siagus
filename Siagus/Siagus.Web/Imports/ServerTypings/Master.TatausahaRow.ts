namespace Siagus.Master {
    export interface TatausahaRow {
        TuId?: number;
        NamaTu?: string;
        AlamatTu?: string;
        TelponTu?: string;
    }

    export namespace TatausahaRow {
        export const idProperty = 'TuId';
        export const nameProperty = 'NamaTu';
        export const localTextPrefix = 'Master.Tatausaha';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            TuId = "TuId",
            NamaTu = "NamaTu",
            AlamatTu = "AlamatTu",
            TelponTu = "TelponTu"
        }
    }
}
