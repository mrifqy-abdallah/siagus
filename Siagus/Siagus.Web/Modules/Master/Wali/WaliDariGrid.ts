
namespace Siagus.Master {

    @Serenity.Decorators.registerClass()
    export class WaliDariGrid extends Serenity.EntityGrid<WaliSiswaRow, any> {
        protected getColumnsKey() { return 'Master.WaliDari'; }
        protected getIdProperty() { return WaliSiswaRow.idProperty; }
        protected getLocalTextPrefix() { return WaliSiswaRow.localTextPrefix; }
        protected getService() { return WaliSiswaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            return null;
        }

        protected getInitialTitle() {
            return null;
        }

        protected usePager() {
            return false;
        }

        protected getGridCanLoad() {
            return this.waliID != null;
        }

        private _waliID: number;

        get waliID() {
            return this._waliID;
        }

        set waliID(value: number) {
            if (this._waliID != value) {
                this._waliID = value;
                this.setEquality(WaliSiswaRow.Fields.WaliId, value);
                this.refresh();
            }
        }
    }

}