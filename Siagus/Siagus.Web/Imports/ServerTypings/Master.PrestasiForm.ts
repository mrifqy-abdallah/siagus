namespace Siagus.Master {
    export interface PrestasiForm {
        NamaPrestasi: Serenity.StringEditor;
        AjangPrestasi: Serenity.TextAreaEditor;
        TahunPrestasi: Serenity.DateYearEditor;
        CatatanPrestasi: Serenity.TextAreaEditor;
    }

    export class PrestasiForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Prestasi';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PrestasiForm.init)  {
                PrestasiForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateYearEditor;

                Q.initFormType(PrestasiForm, [
                    'NamaPrestasi', w0,
                    'AjangPrestasi', w1,
                    'TahunPrestasi', w2,
                    'CatatanPrestasi', w1
                ]);
            }
        }
    }
}
