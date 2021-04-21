namespace Siagus.Master {
    export interface KelasRow {
        KelasId?: number;
        Kelas?: string;
    }

    export namespace KelasRow {
        export const idProperty = 'KelasId';
        export const nameProperty = 'Kelas';
        export const localTextPrefix = 'Master.Kelas';
        export const lookupKey = 'Master.Kelas';

        export function getLookup(): Q.Lookup<KelasRow> {
            return Q.getLookup<KelasRow>('Master.Kelas');
        }
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            KelasId = "KelasId",
            Kelas = "Kelas"
        }
    }
}
