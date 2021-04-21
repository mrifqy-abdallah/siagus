
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SiswaDialog extends Serenity.EntityDialog<SiswaRow, any> {
        protected getFormKey() { return SiswaForm.formKey; }
        protected getIdProperty() { return SiswaRow.idProperty; }
        protected getLocalTextPrefix() { return SiswaRow.localTextPrefix; }
        protected getNameProperty() { return SiswaRow.nameProperty; }
        protected getService() { return SiswaService.baseUrl; }
        protected getDeletePermission() { return SiswaRow.deletePermission; }
        protected getInsertPermission() { return SiswaRow.insertPermission; }
        protected getUpdatePermission() { return SiswaRow.updatePermission; }

        protected form = new SiswaForm(this.idPrefix);

        private grid: SiswaGrid;

        constructor() {
            super();
            this.grid = new SiswaGrid(this.byId('NisnId'));
            this.grid.openDialogsAsPanel = false;

            //if StatusSiswa is "lulus", then make Kelas and KelasParalel into null
            this.form.StatusSiswa.changeSelect2(e => {
                var status = this.form.StatusSiswa.value;
                if (status == "3") {
                    this.form.KelasId.value = null;
                    this.form.KelasparalelId.value = null;
                    return;
                }
            });
        }
    }
}