
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class WaliDialog extends Serenity.EntityDialog<WaliRow, any> {
        protected getFormKey() { return WaliForm.formKey; }
        protected getIdProperty() { return WaliRow.idProperty; }
        protected getLocalTextPrefix() { return WaliRow.localTextPrefix; }
        protected getNameProperty() { return WaliRow.nameProperty; }
        protected getService() { return WaliService.baseUrl; }
        protected getDeletePermission() { return WaliRow.deletePermission; }
        protected getInsertPermission() { return WaliRow.insertPermission; }
        protected getUpdatePermission() { return WaliRow.updatePermission; }

        protected form = new WaliForm(this.idPrefix);

        //adding another tab in Products module
        private waliDariGrid: WaliDariGrid;

        constructor() {
            super();
            //this.form = new WaliForm(this.idPrefix);

            this.waliDariGrid = new WaliDariGrid(this.byId("WaliDariGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.waliDariGrid.waliID = this.entityId;
        }
    }
}