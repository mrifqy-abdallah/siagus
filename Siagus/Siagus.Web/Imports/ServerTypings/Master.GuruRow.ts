namespace Siagus.Master {
    export interface GuruRow {
        NipId?: string;
        NamaGuru?: string;
        GenderGuru?: GuruGender;
        TempatlahirGuru?: string;
        TanggallahirGuru?: string;
        AlamatGuru?: string;
        TelponGuru?: string;
        EmailGuru?: string;
        StatuspnsGuru?: GuruStatusPns;
        StatusaktifGuru?: GuruStatusAktif;
        NamaGelarGuru?: string;
        RiwayatPendidikan?: RiwayatPendidikanRow[];
        MapelDiampu?: MapelGuruRow[];
    }

    export namespace GuruRow {
        export const idProperty = 'NipId';
        export const nameProperty = 'NamaGuru';
        export const localTextPrefix = 'Master.Guru';
        export const deletePermission = 'Master:Modify';
        export const insertPermission = 'Master:Modify';
        export const readPermission = 'Master:Read';
        export const updatePermission = 'Master:Modify';

        export declare const enum Fields {
            NipId = "NipId",
            NamaGuru = "NamaGuru",
            GenderGuru = "GenderGuru",
            TempatlahirGuru = "TempatlahirGuru",
            TanggallahirGuru = "TanggallahirGuru",
            AlamatGuru = "AlamatGuru",
            TelponGuru = "TelponGuru",
            EmailGuru = "EmailGuru",
            StatuspnsGuru = "StatuspnsGuru",
            StatusaktifGuru = "StatusaktifGuru",
            NamaGelarGuru = "NamaGelarGuru",
            RiwayatPendidikan = "RiwayatPendidikan",
            MapelDiampu = "MapelDiampu"
        }
    }
}
