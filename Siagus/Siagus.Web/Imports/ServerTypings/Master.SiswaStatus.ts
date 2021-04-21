namespace Siagus.Master {
    export enum SiswaStatus {
        Aktif = 1,
        NonAktif = 2,
        Lulus = 3
    }
    Serenity.Decorators.registerEnumType(SiswaStatus, 'Siagus.Master.SiswaStatus', 'Siagus.Master.Entities.SiswaStatus');
}
