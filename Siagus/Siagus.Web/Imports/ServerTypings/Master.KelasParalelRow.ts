namespace Siagus.Master {
    export interface KelasParalelRow {
        KelasparalelId?: number;
        Kelasparalel?: string;
    }

    export namespace KelasParalelRow {
        export const idProperty = 'KelasparalelId';
        export const nameProperty = 'Kelasparalel';
        export const localTextPrefix = 'Master.KelasParalel';
        export const lookupKey = 'Master.KelasParalel';

        export function getLookup(): Q.Lookup<KelasParalelRow> {
            return Q.getLookup<KelasParalelRow>('Master.KelasParalel');
        }
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            KelasparalelId = "KelasparalelId",
            Kelasparalel = "Kelasparalel"
        }
    }
}
