namespace Siagus.Master {
    export interface WaliSiswaForm {
        WaliId: Serenity.LookupEditor;
        WaliAlamatWali: Serenity.StringEditor;
        WaliTelponWali: Serenity.StringEditor;
        Hubungan: Serenity.StringEditor;
    }

    export class WaliSiswaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.WaliSiswa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaliSiswaForm.init)  {
                WaliSiswaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(WaliSiswaForm, [
                    'WaliId', w0,
                    'WaliAlamatWali', w1,
                    'WaliTelponWali', w1,
                    'Hubungan', w1
                ]);
            }
        }
    }
}
