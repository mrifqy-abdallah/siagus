
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class WaliSiswaGrid extends Serenity.EntityGrid<WaliSiswaRow, any> {
        protected getColumnsKey() { return 'Master.WaliSiswa'; }
        protected getDialogType() { return WaliSiswaDialog; }
        protected getIdProperty() { return WaliSiswaRow.idProperty; }
        protected getInsertPermission() { return WaliSiswaRow.insertPermission; }
        protected getLocalTextPrefix() { return WaliSiswaRow.localTextPrefix; }
        protected getService() { return WaliSiswaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}