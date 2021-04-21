
namespace Siagus.Master {

    @Serenity.Decorators.registerEditor()
    export class MapelsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Master.MapelKelasRow> {

        constructor(container: JQuery, options: Serenity.LookupEditorOptions) {
            super(container, options);
        }

        protected getLookupKey() {
            return Master.MapelKelasRow.lookupKey;
        }

        protected getItemText(item: Master.MapelKelasRow, lookup: Q.Lookup<Master.MapelKelasRow>) {
            return super.getItemText(item, lookup) +
                item.MapelNamaMapel +
                ', ' + item.Kelas;
        }
    }
}