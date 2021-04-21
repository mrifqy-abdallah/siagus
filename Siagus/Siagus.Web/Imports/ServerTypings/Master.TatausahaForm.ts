namespace Siagus.Master {
    export interface TatausahaForm {
        NamaTu: Serenity.StringEditor;
        AlamatTu: Serenity.TextAreaEditor;
        TelponTu: Serenity.StringEditor;
    }

    export class TatausahaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Tatausaha';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TatausahaForm.init)  {
                TatausahaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(TatausahaForm, [
                    'NamaTu', w0,
                    'AlamatTu', w1,
                    'TelponTu', w0
                ]);
            }
        }
    }
}
