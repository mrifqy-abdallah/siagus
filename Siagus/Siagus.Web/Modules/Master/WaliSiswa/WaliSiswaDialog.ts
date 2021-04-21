
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class WaliSiswaDialog extends Serenity.EntityDialog<WaliSiswaRow, any> {
        protected getFormKey() { return WaliSiswaForm.formKey; }
        protected getIdProperty() { return WaliSiswaRow.idProperty; }
        protected getLocalTextPrefix() { return WaliSiswaRow.localTextPrefix; }
        protected getNameProperty() { return WaliSiswaRow.nameProperty; }
        protected getService() { return WaliSiswaService.baseUrl; }
        protected getDeletePermission() { return WaliSiswaRow.deletePermission; }
        protected getInsertPermission() { return WaliSiswaRow.insertPermission; }
        protected getUpdatePermission() { return WaliSiswaRow.updatePermission; }

        protected form = new WaliSiswaForm(this.idPrefix);

        constructor() {
            super();

            //store alamat and telpon's wali to form when a wali is selected
            this.form.WaliId.changeSelect2(e => {
                var waliID = this.form.WaliId.value;
                if (Q.isEmptyOrNull(waliID)) {
                    this.setWaliDetails({});
                    return;
                }

                WaliService.Retrieve({
                    EntityId: waliID
                }, response => {
                    this.setWaliDetails(response.Entity);
                });
            });
        }

        private setWaliDetails(details: WaliRow) {
            this.form.WaliAlamatWali.value = details.AlamatWali;
            this.form.WaliTelponWali.value = details.TelponWali;
        }
    }
}