
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class KelasParalelGrid extends Serenity.EntityGrid<KelasParalelRow, any> {
        protected getColumnsKey() { return 'Master.KelasParalel'; }
        protected getDialogType() { return KelasParalelDialog; }
        protected getIdProperty() { return KelasParalelRow.idProperty; }
        protected getInsertPermission() { return KelasParalelRow.insertPermission; }
        protected getLocalTextPrefix() { return KelasParalelRow.localTextPrefix; }
        protected getService() { return KelasParalelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}