namespace Siagus.Master {
    export interface WaliForm {
        NamaWali: Serenity.StringEditor;
        AlamatWali: Serenity.TextAreaEditor;
        TelponWali: Serenity.StringEditor;
    }

    export class WaliForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Wali';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaliForm.init)  {
                WaliForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(WaliForm, [
                    'NamaWali', w0,
                    'AlamatWali', w1,
                    'TelponWali', w0
                ]);
            }
        }
    }
}
