namespace Siagus.Master {
    export interface WaliRow {
        WaliId?: number;
        NamaWali?: string;
        AlamatWali?: string;
        TelponWali?: string;
    }

    export namespace WaliRow {
        export const idProperty = 'WaliId';
        export const nameProperty = 'NamaWali';
        export const localTextPrefix = 'Master.Wali';
        export const lookupKey = 'Master.Wali';

        export function getLookup(): Q.Lookup<WaliRow> {
            return Q.getLookup<WaliRow>('Master.Wali');
        }
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            WaliId = "WaliId",
            NamaWali = "NamaWali",
            AlamatWali = "AlamatWali",
            TelponWali = "TelponWali"
        }
    }
}
