namespace Siagus.Master {
    export interface MapelForm {
        NamaMapel: Serenity.StringEditor;
        ListKelas: Serenity.LookupEditor;
    }

    export class MapelForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Mapel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MapelForm.init)  {
                MapelForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(MapelForm, [
                    'NamaMapel', w0,
                    'ListKelas', w1
                ]);
            }
        }
    }
}
