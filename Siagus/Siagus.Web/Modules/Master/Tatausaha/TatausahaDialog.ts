
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class TatausahaDialog extends Serenity.EntityDialog<TatausahaRow, any> {
        protected getFormKey() { return TatausahaForm.formKey; }
        protected getIdProperty() { return TatausahaRow.idProperty; }
        protected getLocalTextPrefix() { return TatausahaRow.localTextPrefix; }
        protected getNameProperty() { return TatausahaRow.nameProperty; }
        protected getService() { return TatausahaService.baseUrl; }
        protected getDeletePermission() { return TatausahaRow.deletePermission; }
        protected getInsertPermission() { return TatausahaRow.insertPermission; }
        protected getUpdatePermission() { return TatausahaRow.updatePermission; }

        protected form = new TatausahaForm(this.idPrefix);

    }
}