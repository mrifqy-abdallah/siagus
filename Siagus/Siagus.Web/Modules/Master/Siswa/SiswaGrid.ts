
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class SiswaGrid extends Serenity.EntityGrid<SiswaRow, any> {
        protected getColumnsKey() { return 'Master.Siswa'; }
        protected getDialogType() { return SiswaDialog; }
        protected getIdProperty() { return SiswaRow.idProperty; }
        protected getInsertPermission() { return SiswaRow.insertPermission; }
        protected getLocalTextPrefix() { return SiswaRow.localTextPrefix; }
        protected getService() { return SiswaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "NisnId", title: "NISN" },
                { name: "NamaSiswa", title: "Nama" },
                { name: "AlamatSiswa", title: "Alamat" },
                { name: "TelponSiswa", title: "Telepon" },
                { name: "EmailSiswa", title: "Email" },
                { name: "AngkatanSiswa", title: "Angkatan" }
            ]
        }

        getButtons() {
            var buttons = super.getButtons();

            //a button for exporting table to Excel
            buttons.push(Siagus.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: SiswaService.baseUrl + '/ListExcel',
                hint: "Eksport ke Excel",
                separator: true
            }));

            //and a button for exporting table to Pdf
            buttons.push(Siagus.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                hint: "Eksport ke Pdf",
                fileName: "siswa"
            }));

            return buttons;
        }
    }
}