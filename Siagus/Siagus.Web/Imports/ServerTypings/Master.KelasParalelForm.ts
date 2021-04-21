namespace Siagus.Master {
    export interface KelasParalelForm {
        Kelasparalel: Serenity.StringEditor;
    }

    export class KelasParalelForm extends Serenity.PrefixedContext {
        static formKey = 'Master.KelasParalel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KelasParalelForm.init)  {
                KelasParalelForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(KelasParalelForm, [
                    'Kelasparalel', w0
                ]);
            }
        }
    }
}
