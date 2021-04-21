/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class RiwayatPendidikanDialog extends Common.GridEditorDialog<RiwayatPendidikanRow> {
        protected getFormKey() { return RiwayatPendidikanForm.formKey; }
        protected getNameProperty() { return RiwayatPendidikanRow.idProperty; }
        protected getLocalTextPrefix() { return RiwayatPendidikanRow.localTextPrefix; }

        protected form: RiwayatPendidikanForm;

        constructor() {
            super();
            this.form = new RiwayatPendidikanForm(this.idPrefix);

        }
    }
}