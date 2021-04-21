/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class MapelGuruDialog extends Common.GridEditorDialog<MapelGuruRow> {
        protected getFormKey() { return MapelGuruForm.formKey; }
        protected getNameProperty() { return MapelGuruRow.idProperty; }
        protected getLocalTextPrefix() { return MapelGuruRow.localTextPrefix; }

        protected form: MapelGuruForm;

        constructor() {
            super();
        }
    }
}