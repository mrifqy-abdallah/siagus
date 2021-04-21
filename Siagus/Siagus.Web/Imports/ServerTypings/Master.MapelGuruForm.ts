namespace Siagus.Master {
    export interface MapelGuruForm {
        MapelkelasId: MapelsEditor;
        ListKelasParalel: Serenity.LookupEditor;
    }

    export class MapelGuruForm extends Serenity.PrefixedContext {
        static formKey = 'Master.MapelGuru';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MapelGuruForm.init)  {
                MapelGuruForm.init = true;

                var s = Serenity;
                var w0 = MapelsEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(MapelGuruForm, [
                    'MapelkelasId', w0,
                    'ListKelasParalel', w1
                ]);
            }
        }
    }
}
