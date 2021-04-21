
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Siagus.Master {
    @Serenity.Decorators.registerEditor()
    export class PrestasiEditor
        extends Common.GridEditorBase<PrestasiRow> {
        protected getColumnsKey() { return "Master.Prestasi"; }
        protected getLocalTextPrefix() { return PrestasiRow.localTextPrefix; }

        protected getDialogType() { return PrestasiDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Tambahkan";
        }
    }
}