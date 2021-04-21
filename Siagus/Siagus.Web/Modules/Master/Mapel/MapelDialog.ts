
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class MapelDialog extends Serenity.EntityDialog<MapelRow, any> {
        protected getFormKey() { return MapelForm.formKey; }
        protected getIdProperty() { return MapelRow.idProperty; }
        protected getLocalTextPrefix() { return MapelRow.localTextPrefix; }
        protected getNameProperty() { return MapelRow.nameProperty; }
        protected getService() { return MapelService.baseUrl; }
        protected getDeletePermission() { return MapelRow.deletePermission; }
        protected getInsertPermission() { return MapelRow.insertPermission; }
        protected getUpdatePermission() { return MapelRow.updatePermission; }

        protected form = new MapelForm(this.idPrefix);

    }
}