
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Siagus.Master {
    @Serenity.Decorators.registerEditor()
    export class RiwayatPendidikanEditor
        extends Common.GridEditorBase<RiwayatPendidikanRow> {
        protected getColumnsKey() { return "Master.RiwayatPendidikan"; }
        protected getLocalTextPrefix() { return RiwayatPendidikanRow.localTextPrefix; }

        protected getDialogType() { return RiwayatPendidikanDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Tambahkan riwayat pendidikan";
        }
    }
}