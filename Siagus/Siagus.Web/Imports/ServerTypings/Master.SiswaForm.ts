namespace Siagus.Master {
    export interface SiswaForm {
        NisnId: Serenity.StringEditor;
        NamaSiswa: Serenity.StringEditor;
        GenderSiswa: Serenity.EnumEditor;
        TempatlahirSiswa: Serenity.StringEditor;
        TanggallahirSiswa: Serenity.DateEditor;
        AlamatSiswa: Serenity.TextAreaEditor;
        TelponSiswa: Serenity.StringEditor;
        EmailSiswa: Serenity.EmailAddressEditor;
        AngkatanSiswa: Serenity.DateYearEditor;
        KelasId: Serenity.LookupEditor;
        KelasparalelId: Serenity.LookupEditor;
        StatusSiswa: Serenity.EnumEditor;
        DaftarPrestasi: PrestasiEditor;
        DaftarWali: WaliSiswaEditor;
    }

    export class SiswaForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Siswa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SiswaForm.init)  {
                SiswaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.EmailAddressEditor;
                var w5 = s.DateYearEditor;
                var w6 = s.LookupEditor;
                var w7 = PrestasiEditor;
                var w8 = WaliSiswaEditor;

                Q.initFormType(SiswaForm, [
                    'NisnId', w0,
                    'NamaSiswa', w0,
                    'GenderSiswa', w1,
                    'TempatlahirSiswa', w0,
                    'TanggallahirSiswa', w2,
                    'AlamatSiswa', w3,
                    'TelponSiswa', w0,
                    'EmailSiswa', w4,
                    'AngkatanSiswa', w5,
                    'KelasId', w6,
                    'KelasparalelId', w6,
                    'StatusSiswa', w1,
                    'DaftarPrestasi', w7,
                    'DaftarWali', w8
                ]);
            }
        }
    }
}
