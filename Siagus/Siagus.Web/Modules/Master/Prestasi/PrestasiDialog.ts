/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class PrestasiDialog extends Common.GridEditorDialog<RiwayatPendidikanRow> {
        protected getFormKey() { return PrestasiForm.formKey; }
        protected getNameProperty() { return PrestasiRow.idProperty; }
        protected getLocalTextPrefix() { return PrestasiRow.localTextPrefix; }

        protected form: PrestasiForm;

        constructor() {
            super();
            this.form = new PrestasiForm(this.idPrefix);

        }
    }
}