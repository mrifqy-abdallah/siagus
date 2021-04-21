
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class TatausahaGrid extends Serenity.EntityGrid<TatausahaRow, any> {
        protected getColumnsKey() { return 'Master.Tatausaha'; }
        protected getDialogType() { return TatausahaDialog; }
        protected getIdProperty() { return TatausahaRow.idProperty; }
        protected getInsertPermission() { return TatausahaRow.insertPermission; }
        protected getLocalTextPrefix() { return TatausahaRow.localTextPrefix; }
        protected getService() { return TatausahaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "NamaTu", title: "Nama" },
                { name: "AlamatTu", title: "Alamat" },
                { name: "TelponTu", title: "Telepon" }
            ]
        }

        getButtons() {
            var buttons = super.getButtons();

            //a button for exporting table to Excel
            buttons.push(Siagus.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: TatausahaService.baseUrl + '/ListExcel',
                hint: "Eksport ke Excel",
                separator: true
            }));

            //and a button for exporting table to Pdf
            buttons.push(Siagus.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                hint: "Eksport ke Pdf",
                fileName: "tu"
            }));

            return buttons;
        }
    }
}