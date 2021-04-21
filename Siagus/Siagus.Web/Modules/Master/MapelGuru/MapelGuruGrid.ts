
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class MapelGuruGrid extends Serenity.EntityGrid<MapelGuruRow, any> {
        protected getColumnsKey() { return 'Master.MapelGuru'; }
        protected getDialogType() { return MapelGuruDialog; }
        protected getIdProperty() { return MapelGuruRow.idProperty; }
        protected getInsertPermission() { return MapelGuruRow.insertPermission; }
        protected getLocalTextPrefix() { return MapelGuruRow.localTextPrefix; }
        protected getService() { return MapelGuruService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}