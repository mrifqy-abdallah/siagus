
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class WaliGrid extends Serenity.EntityGrid<WaliRow, any> {
        protected getColumnsKey() { return 'Master.Wali'; }
        protected getDialogType() { return WaliDialog; }
        protected getIdProperty() { return WaliRow.idProperty; }
        protected getInsertPermission() { return WaliRow.insertPermission; }
        protected getLocalTextPrefix() { return WaliRow.localTextPrefix; }
        protected getService() { return WaliService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "NamaWali", title: "Nama" },
                { name: "AlamatWali", title: "Alamat" },
                { name: "TelponWali", title: "Telepon" }
            ]
        }

        getButtons() {
            var buttons = super.getButtons();

            //a button for exporting table to Excel
            buttons.push(Siagus.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: WaliService.baseUrl + '/ListExcel',
                hint: "Eksport ke Excel",
                separator: true
            }));

            //and a button for exporting table to Pdf
            buttons.push(Siagus.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                hint: "Eksport ke Pdf",
                fileName: "wali"
            }));

            return buttons;
        }
    }
}