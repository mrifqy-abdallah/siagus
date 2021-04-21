
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Siagus.Master {
    @Serenity.Decorators.registerEditor()
    export class WaliSiswaEditor
        extends Common.GridEditorBase<WaliRow> {
        protected getColumnsKey() { return "Master.WaliSiswa"; }
        protected getLocalTextPrefix() { return WaliSiswaRow.localTextPrefix; }

        protected getDialogType() { return WaliSiswaDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Tambahkan";
        }

        protected validateEntity(row: WaliSiswaRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            //check if a wali is already selected
            row.WaliId = Q.toId(row.WaliId);
            var sameWali = Q.tryFirst(this.view.getItems(), x => x.WaliId === row.WaliId);
            if (sameWali && this.id(sameWali) !== id) {
                Q.alert('Wali telah terdaftar!');
                return false;
            }

            //find the name of a wali after being selected then store it to grid
            row.WaliNamaWali = WaliRow.getLookup().itemById[row.WaliId].NamaWali;

            return true;
        }
    }
}