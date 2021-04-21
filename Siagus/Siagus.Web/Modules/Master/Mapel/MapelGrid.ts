
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class MapelGrid extends Serenity.EntityGrid<MapelRow, any> {
        protected getColumnsKey() { return 'Master.Mapel'; }
        protected getDialogType() { return MapelDialog; }
        protected getIdProperty() { return MapelRow.idProperty; }
        protected getInsertPermission() { return MapelRow.insertPermission; }
        protected getLocalTextPrefix() { return MapelRow.localTextPrefix; }
        protected getService() { return MapelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //filter mapping for ListKelas
        protected getQuickFilters() {
            let items = super.getQuickFilters();

            var kelasListFilter = Q.first(items, x =>
                x.field == MapelRow.Fields.ListKelas);

            kelasListFilter.handler = h => {
                var request = (h.request as ListKelasRequest);
                var values = (h.widget as Serenity.LookupEditor).values;
                request.Kelass = values.map(x => parseInt(x, 10));
                h.handled = true;
            };

            return items;
        }

        getButtons() {
            var buttons = super.getButtons();

            //a button for exporting table to Excel
            buttons.push(Siagus.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: MapelService.baseUrl + '/ListExcel',
                hint: "Eksport ke Excel",
                separator: true
            }));

            //and a button for exporting table to Pdf
            buttons.push(Siagus.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                hint: "Eksport ke Pdf",
                fileName: "mapel"
            }));

            return buttons;
        }
    }
}