namespace Siagus.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Master {

            namespace Guru {
                export const AlamatGuru: string;
                export const EmailGuru: string;
                export const GenderGuru: string;
                export const MapelDiampu: string;
                export const NamaGelarGuru: string;
                export const NamaGuru: string;
                export const NipId: string;
                export const RiwayatPendidikan: string;
                export const StatusaktifGuru: string;
                export const StatuspnsGuru: string;
                export const TanggallahirGuru: string;
                export const TelponGuru: string;
                export const TempatlahirGuru: string;
            }

            namespace Kelas {
                export const Kelas: string;
                export const KelasId: string;
            }

            namespace KelasParalel {
                export const Kelasparalel: string;
                export const KelasparalelId: string;
            }

            namespace Mapel {
                export const ListKelas: string;
                export const MapelId: string;
                export const NamaMapel: string;
            }

            namespace MapelGuru {
                export const ListKelasParalel: string;
                export const MapelKelas: string;
                export const MapelguruId: string;
                export const MapelkelasId: string;
                export const MapelkelasKelasId: string;
                export const MapelkelasMapelId: string;
                export const NipAlamatGuru: string;
                export const NipEmailGuru: string;
                export const NipGenderGuru: string;
                export const NipId: string;
                export const NipNamaGuru: string;
                export const NipStatusaktifGuru: string;
                export const NipStatuspnsGuru: string;
                export const NipTanggallahirGuru: string;
                export const NipTelponGuru: string;
                export const NipTempatlahirGuru: string;
            }

            namespace MapelKelas {
                export const Kelas: string;
                export const KelasId: string;
                export const MapelId: string;
                export const MapelNamaMapel: string;
                export const MapelkelasId: string;
            }

            namespace MapelguruParalel {
                export const Kelasparalel: string;
                export const KelasparalelId: string;
                export const MapelguruId: string;
                export const MapelguruMapelkelasId: string;
                export const MapelguruNipId: string;
                export const MapelguruparalelId: string;
            }

            namespace Prestasi {
                export const AjangPrestasi: string;
                export const CatatanPrestasi: string;
                export const NamaPrestasi: string;
                export const NisnAlamatSiswa: string;
                export const NisnAngkatanSiswa: string;
                export const NisnEmailSiswa: string;
                export const NisnGenderSiswa: string;
                export const NisnId: string;
                export const NisnKelasId: string;
                export const NisnKelasparalelId: string;
                export const NisnNamaSiswa: string;
                export const NisnStatusSiswa: string;
                export const NisnTanggallahirSiswa: string;
                export const NisnTelponSiswa: string;
                export const NisnTempatlahirSiswa: string;
                export const PrestasiId: string;
                export const TahunPrestasi: string;
            }

            namespace RiwayatPendidikan {
                export const GelarPendidikan: string;
                export const JurusanPendidikan: string;
                export const NipAlamatGuru: string;
                export const NipEmailGuru: string;
                export const NipGenderGuru: string;
                export const NipId: string;
                export const NipNamaGuru: string;
                export const NipStatusaktifGuru: string;
                export const NipStatuspnsGuru: string;
                export const NipTanggallahirGuru: string;
                export const NipTelponGuru: string;
                export const NipTempatlahirGuru: string;
                export const RiwayatpendidikanId: string;
            }

            namespace Siswa {
                export const AlamatSiswa: string;
                export const AngkatanSiswa: string;
                export const DaftarPrestasi: string;
                export const DaftarWali: string;
                export const EmailSiswa: string;
                export const GenderSiswa: string;
                export const Kelas: string;
                export const KelasId: string;
                export const Kelasparalel: string;
                export const KelasparalelId: string;
                export const NamaSiswa: string;
                export const NisnId: string;
                export const StatusSiswa: string;
                export const TanggallahirSiswa: string;
                export const TelponSiswa: string;
                export const TempatlahirSiswa: string;
            }

            namespace Tatausaha {
                export const AlamatTu: string;
                export const NamaTu: string;
                export const TelponTu: string;
                export const TuId: string;
            }

            namespace Wali {
                export const AlamatWali: string;
                export const NamaWali: string;
                export const TelponWali: string;
                export const WaliId: string;
            }

            namespace WaliSiswa {
                export const Hubungan: string;
                export const NisnAlamatSiswa: string;
                export const NisnAngkatanSiswa: string;
                export const NisnEmailSiswa: string;
                export const NisnGenderSiswa: string;
                export const NisnId: string;
                export const NisnKelasId: string;
                export const NisnKelasparalelId: string;
                export const NisnNamaSiswa: string;
                export const NisnStatusSiswa: string;
                export const NisnTanggallahirSiswa: string;
                export const NisnTelponSiswa: string;
                export const NisnTempatlahirSiswa: string;
                export const WaliAlamatWali: string;
                export const WaliId: string;
                export const WaliNamaWali: string;
                export const WaliTelponWali: string;
                export const WalisiswaId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Siagus['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Master:{Guru:{AlamatGuru:1,EmailGuru:1,GenderGuru:1,MapelDiampu:1,NamaGelarGuru:1,NamaGuru:1,NipId:1,RiwayatPendidikan:1,StatusaktifGuru:1,StatuspnsGuru:1,TanggallahirGuru:1,TelponGuru:1,TempatlahirGuru:1},Kelas:{Kelas:1,KelasId:1},KelasParalel:{Kelasparalel:1,KelasparalelId:1},Mapel:{ListKelas:1,MapelId:1,NamaMapel:1},MapelGuru:{ListKelasParalel:1,MapelKelas:1,MapelguruId:1,MapelkelasId:1,MapelkelasKelasId:1,MapelkelasMapelId:1,NipAlamatGuru:1,NipEmailGuru:1,NipGenderGuru:1,NipId:1,NipNamaGuru:1,NipStatusaktifGuru:1,NipStatuspnsGuru:1,NipTanggallahirGuru:1,NipTelponGuru:1,NipTempatlahirGuru:1},MapelKelas:{Kelas:1,KelasId:1,MapelId:1,MapelNamaMapel:1,MapelkelasId:1},MapelguruParalel:{Kelasparalel:1,KelasparalelId:1,MapelguruId:1,MapelguruMapelkelasId:1,MapelguruNipId:1,MapelguruparalelId:1},Prestasi:{AjangPrestasi:1,CatatanPrestasi:1,NamaPrestasi:1,NisnAlamatSiswa:1,NisnAngkatanSiswa:1,NisnEmailSiswa:1,NisnGenderSiswa:1,NisnId:1,NisnKelasId:1,NisnKelasparalelId:1,NisnNamaSiswa:1,NisnStatusSiswa:1,NisnTanggallahirSiswa:1,NisnTelponSiswa:1,NisnTempatlahirSiswa:1,PrestasiId:1,TahunPrestasi:1},RiwayatPendidikan:{GelarPendidikan:1,JurusanPendidikan:1,NipAlamatGuru:1,NipEmailGuru:1,NipGenderGuru:1,NipId:1,NipNamaGuru:1,NipStatusaktifGuru:1,NipStatuspnsGuru:1,NipTanggallahirGuru:1,NipTelponGuru:1,NipTempatlahirGuru:1,RiwayatpendidikanId:1},Siswa:{AlamatSiswa:1,AngkatanSiswa:1,DaftarPrestasi:1,DaftarWali:1,EmailSiswa:1,GenderSiswa:1,Kelas:1,KelasId:1,Kelasparalel:1,KelasparalelId:1,NamaSiswa:1,NisnId:1,StatusSiswa:1,TanggallahirSiswa:1,TelponSiswa:1,TempatlahirSiswa:1},Tatausaha:{AlamatTu:1,NamaTu:1,TelponTu:1,TuId:1},Wali:{AlamatWali:1,NamaWali:1,TelponWali:1,WaliId:1},WaliSiswa:{Hubungan:1,NisnAlamatSiswa:1,NisnAngkatanSiswa:1,NisnEmailSiswa:1,NisnGenderSiswa:1,NisnId:1,NisnKelasId:1,NisnKelasparalelId:1,NisnNamaSiswa:1,NisnStatusSiswa:1,NisnTanggallahirSiswa:1,NisnTelponSiswa:1,NisnTempatlahirSiswa:1,WaliAlamatWali:1,WaliId:1,WaliNamaWali:1,WaliTelponWali:1,WalisiswaId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
