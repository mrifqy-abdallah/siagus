namespace Siagus.Master {
    export interface KelasForm {
        Kelas: Serenity.StringEditor;
    }

    export class KelasForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Kelas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KelasForm.init)  {
                KelasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(KelasForm, [
                    'Kelas', w0
                ]);
            }
        }
    }
}
