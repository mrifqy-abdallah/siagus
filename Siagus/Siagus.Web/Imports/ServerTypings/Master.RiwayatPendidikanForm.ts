namespace Siagus.Master {
    export interface RiwayatPendidikanForm {
        JurusanPendidikan: Serenity.StringEditor;
        GelarPendidikan: Serenity.StringEditor;
    }

    export class RiwayatPendidikanForm extends Serenity.PrefixedContext {
        static formKey = 'Master.RiwayatPendidikan';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RiwayatPendidikanForm.init)  {
                RiwayatPendidikanForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RiwayatPendidikanForm, [
                    'JurusanPendidikan', w0,
                    'GelarPendidikan', w0
                ]);
            }
        }
    }
}
