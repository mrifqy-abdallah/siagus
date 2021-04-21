
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Siagus.Master {
    @Serenity.Decorators.registerEditor()
    export class MapelGuruEditor
        extends Common.GridEditorBase<MapelGuruRow> {
        protected getColumnsKey() { return "Master.MapelGuru"; }
        protected getLocalTextPrefix() { return MapelGuruRow.localTextPrefix; }

        protected getDialogType() { return MapelGuruDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Tambahkan";
        }

        protected validateEntity(row: MapelGuruRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            //check if a mapel is already selected
            row.MapelkelasId = Q.toId(row.MapelkelasId);
            var sameMapel = Q.tryFirst(this.view.getItems(), x => x.MapelkelasId === row.MapelkelasId);
            if (sameMapel && this.id(sameMapel) !== id) {
                Q.alert('Mata pelajaran telah dipilih!');
                return false;
            }

            //find the name of a mapel after being selected then store it to grid
            row.MapelKelas = MapelKelasRow.getLookup().itemById[row.MapelkelasId].MapelNamaMapel + ', ' + MapelKelasRow.getLookup().itemById[row.MapelkelasId].Kelas;
            return true;
        }
    }
}