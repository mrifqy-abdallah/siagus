
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class KelasParalelDialog extends Serenity.EntityDialog<KelasParalelRow, any> {
        protected getFormKey() { return KelasParalelForm.formKey; }
        protected getIdProperty() { return KelasParalelRow.idProperty; }
        protected getLocalTextPrefix() { return KelasParalelRow.localTextPrefix; }
        protected getNameProperty() { return KelasParalelRow.nameProperty; }
        protected getService() { return KelasParalelService.baseUrl; }
        protected getDeletePermission() { return KelasParalelRow.deletePermission; }
        protected getInsertPermission() { return KelasParalelRow.insertPermission; }
        protected getUpdatePermission() { return KelasParalelRow.updatePermission; }

        protected form = new KelasParalelForm(this.idPrefix);

    }
}