namespace Siagus.Master {
    export enum GuruStatusAktif {
        Aktif = 1,
        Cuti = 2,
        NonAktif = 3
    }
    Serenity.Decorators.registerEnumType(GuruStatusAktif, 'Siagus.Master.GuruStatusAktif', 'Siagus.Master.Entities.GuruStatusAktif');
}
