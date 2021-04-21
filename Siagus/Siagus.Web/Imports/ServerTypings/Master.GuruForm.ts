namespace Siagus.Master {
    export interface GuruForm {
        NipId: Serenity.StringEditor;
        NamaGuru: Serenity.StringEditor;
        GenderGuru: Serenity.EnumEditor;
        TempatlahirGuru: Serenity.StringEditor;
        TanggallahirGuru: Serenity.DateEditor;
        AlamatGuru: Serenity.TextAreaEditor;
        RiwayatPendidikan: RiwayatPendidikanEditor;
        TelponGuru: Serenity.StringEditor;
        EmailGuru: Serenity.EmailAddressEditor;
        StatuspnsGuru: Serenity.EnumEditor;
        StatusaktifGuru: Serenity.EnumEditor;
        MapelDiampu: MapelGuruEditor;
    }

    export class GuruForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Guru';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GuruForm.init)  {
                GuruForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = RiwayatPendidikanEditor;
                var w5 = s.EmailAddressEditor;
                var w6 = MapelGuruEditor;

                Q.initFormType(GuruForm, [
                    'NipId', w0,
                    'NamaGuru', w0,
                    'GenderGuru', w1,
                    'TempatlahirGuru', w0,
                    'TanggallahirGuru', w2,
                    'AlamatGuru', w3,
                    'RiwayatPendidikan', w4,
                    'TelponGuru', w0,
                    'EmailGuru', w5,
                    'StatuspnsGuru', w1,
                    'StatusaktifGuru', w1,
                    'MapelDiampu', w6
                ]);
            }
        }
    }
}
