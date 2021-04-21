
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class GuruGrid extends Serenity.EntityGrid<GuruRow, any> {
        protected getColumnsKey() { return 'Master.Guru'; }
        protected getDialogType() { return GuruDialog; }
        protected getIdProperty() { return GuruRow.idProperty; }
        protected getInsertPermission() { return GuruRow.insertPermission; }
        protected getLocalTextPrefix() { return GuruRow.localTextPrefix; }
        protected getService() { return GuruService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "NipId", title: "NIP" },
                { name: "NamaGelarGuru", title: "Nama" },
                { name: "AlamatGuru", title: "Alamat" },
                { name: "TelponGuru", title: "Telepon" },
                { name: "EmailGuru", title: "Email" }
            ]
        }

        getButtons() {
            var buttons = super.getButtons();

            //a button for exporting table to Excel
            buttons.push(Siagus.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: GuruService.baseUrl + '/ListExcel',
                hint: "Eksport ke Excel",
                separator: true
            }));

            //and a button for exporting table to Pdf
            buttons.push(Siagus.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                hint: "Eksport ke Pdf",
                fileName: "guru"
            }));

            return buttons;
        }
    }
}