/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Siagus.Administration {
}
declare namespace Siagus.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Siagus.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Siagus.Administration {
}
declare namespace Siagus.Administration {
}
declare namespace Siagus.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Siagus.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Siagus.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Siagus.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Siagus.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Siagus.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace Siagus.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Siagus.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Siagus.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Siagus.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Siagus.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Siagus.Administration {
}
declare namespace Siagus.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Siagus.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Siagus.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Siagus.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Siagus.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Siagus.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Siagus.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Siagus.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Siagus.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Siagus.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Siagus.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Siagus.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Siagus.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Siagus.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Siagus.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Siagus.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Siagus {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Siagus {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Siagus {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Siagus {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface GuruForm {
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
    class GuruForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    enum GuruGender {
        LakiLaki = 1,
        Perempuan = 2,
        Lain = 3
    }
}
declare namespace Siagus.Master {
    interface GuruRow {
        NipId?: string;
        NamaGuru?: string;
        GenderGuru?: GuruGender;
        TempatlahirGuru?: string;
        TanggallahirGuru?: string;
        AlamatGuru?: string;
        TelponGuru?: string;
        EmailGuru?: string;
        StatuspnsGuru?: GuruStatusPns;
        StatusaktifGuru?: GuruStatusAktif;
        NamaGelarGuru?: string;
        RiwayatPendidikan?: RiwayatPendidikanRow[];
        MapelDiampu?: MapelGuruRow[];
    }
    namespace GuruRow {
        const idProperty = "NipId";
        const nameProperty = "NamaGuru";
        const localTextPrefix = "Master.Guru";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            NipId = "NipId",
            NamaGuru = "NamaGuru",
            GenderGuru = "GenderGuru",
            TempatlahirGuru = "TempatlahirGuru",
            TanggallahirGuru = "TanggallahirGuru",
            AlamatGuru = "AlamatGuru",
            TelponGuru = "TelponGuru",
            EmailGuru = "EmailGuru",
            StatuspnsGuru = "StatuspnsGuru",
            StatusaktifGuru = "StatusaktifGuru",
            NamaGelarGuru = "NamaGelarGuru",
            RiwayatPendidikan = "RiwayatPendidikan",
            MapelDiampu = "MapelDiampu"
        }
    }
}
declare namespace Siagus.Master {
    namespace GuruService {
        const baseUrl = "Master/Guru";
        function Create(request: Serenity.SaveRequest<GuruRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GuruRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GuruRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GuruRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Guru/Create",
            Update = "Master/Guru/Update",
            Delete = "Master/Guru/Delete",
            Retrieve = "Master/Guru/Retrieve",
            List = "Master/Guru/List"
        }
    }
}
declare namespace Siagus.Master {
    enum GuruStatusAktif {
        Aktif = 1,
        Cuti = 2,
        NonAktif = 3
    }
}
declare namespace Siagus.Master {
    enum GuruStatusPns {
        Pns = 1,
        NonPns = 2
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface KelasForm {
        Kelas: Serenity.StringEditor;
    }
    class KelasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface KelasParalelForm {
        Kelasparalel: Serenity.StringEditor;
    }
    class KelasParalelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface KelasParalelRow {
        KelasparalelId?: number;
        Kelasparalel?: string;
    }
    namespace KelasParalelRow {
        const idProperty = "KelasparalelId";
        const nameProperty = "Kelasparalel";
        const localTextPrefix = "Master.KelasParalel";
        const lookupKey = "Master.KelasParalel";
        function getLookup(): Q.Lookup<KelasParalelRow>;
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            KelasparalelId = "KelasparalelId",
            Kelasparalel = "Kelasparalel"
        }
    }
}
declare namespace Siagus.Master {
    namespace KelasParalelService {
        const baseUrl = "Master/KelasParalel";
        function Create(request: Serenity.SaveRequest<KelasParalelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KelasParalelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KelasParalelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KelasParalelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/KelasParalel/Create",
            Update = "Master/KelasParalel/Update",
            Delete = "Master/KelasParalel/Delete",
            Retrieve = "Master/KelasParalel/Retrieve",
            List = "Master/KelasParalel/List"
        }
    }
}
declare namespace Siagus.Master {
    interface KelasRow {
        KelasId?: number;
        Kelas?: string;
    }
    namespace KelasRow {
        const idProperty = "KelasId";
        const nameProperty = "Kelas";
        const localTextPrefix = "Master.Kelas";
        const lookupKey = "Master.Kelas";
        function getLookup(): Q.Lookup<KelasRow>;
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            KelasId = "KelasId",
            Kelas = "Kelas"
        }
    }
}
declare namespace Siagus.Master {
    namespace KelasService {
        const baseUrl = "Master/Kelas";
        function Create(request: Serenity.SaveRequest<KelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Kelas/Create",
            Update = "Master/Kelas/Update",
            Delete = "Master/Kelas/Delete",
            Retrieve = "Master/Kelas/Retrieve",
            List = "Master/Kelas/List"
        }
    }
}
declare namespace Siagus.Master {
    interface ListKelasRequest extends Serenity.ListRequest {
        Kelass?: number[];
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface MapelForm {
        NamaMapel: Serenity.StringEditor;
        ListKelas: Serenity.LookupEditor;
    }
    class MapelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface MapelGuruForm {
        MapelkelasId: MapelsEditor;
        ListKelasParalel: Serenity.LookupEditor;
    }
    class MapelGuruForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface MapelGuruRow {
        MapelguruId?: number;
        NipId?: string;
        MapelkelasId?: number;
        ListKelasParalel?: number[];
        MapelKelas?: string;
        NipNamaGuru?: string;
        NipGenderGuru?: number;
        NipTempatlahirGuru?: string;
        NipTanggallahirGuru?: string;
        NipAlamatGuru?: string;
        NipTelponGuru?: string;
        NipEmailGuru?: string;
        NipStatuspnsGuru?: number;
        NipStatusaktifGuru?: number;
        MapelkelasMapelId?: number;
        MapelkelasKelasId?: number;
    }
    namespace MapelGuruRow {
        const idProperty = "MapelguruId";
        const nameProperty = "NipId";
        const localTextPrefix = "Master.MapelGuru";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            MapelguruId = "MapelguruId",
            NipId = "NipId",
            MapelkelasId = "MapelkelasId",
            ListKelasParalel = "ListKelasParalel",
            MapelKelas = "MapelKelas",
            NipNamaGuru = "NipNamaGuru",
            NipGenderGuru = "NipGenderGuru",
            NipTempatlahirGuru = "NipTempatlahirGuru",
            NipTanggallahirGuru = "NipTanggallahirGuru",
            NipAlamatGuru = "NipAlamatGuru",
            NipTelponGuru = "NipTelponGuru",
            NipEmailGuru = "NipEmailGuru",
            NipStatuspnsGuru = "NipStatuspnsGuru",
            NipStatusaktifGuru = "NipStatusaktifGuru",
            MapelkelasMapelId = "MapelkelasMapelId",
            MapelkelasKelasId = "MapelkelasKelasId"
        }
    }
}
declare namespace Siagus.Master {
    namespace MapelGuruService {
        const baseUrl = "Master/MapelGuru";
        function Create(request: Serenity.SaveRequest<MapelGuruRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MapelGuruRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MapelGuruRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MapelGuruRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MapelGuru/Create",
            Update = "Master/MapelGuru/Update",
            Delete = "Master/MapelGuru/Delete",
            Retrieve = "Master/MapelGuru/Retrieve",
            List = "Master/MapelGuru/List"
        }
    }
}
declare namespace Siagus.Master {
    interface MapelKelasRow {
        MapelkelasId?: number;
        MapelId?: number;
        KelasId?: number;
        MapelNamaMapel?: string;
        Kelas?: string;
    }
    namespace MapelKelasRow {
        const idProperty = "MapelkelasId";
        const localTextPrefix = "Master.MapelKelas";
        const lookupKey = "Master.MapelKelas";
        function getLookup(): Q.Lookup<MapelKelasRow>;
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            MapelkelasId = "MapelkelasId",
            MapelId = "MapelId",
            KelasId = "KelasId",
            MapelNamaMapel = "MapelNamaMapel",
            Kelas = "Kelas"
        }
    }
}
declare namespace Siagus.Master {
    namespace MapelKelasService {
        const baseUrl = "Master/MapelKelas";
        function Create(request: Serenity.SaveRequest<MapelKelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MapelKelasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MapelKelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MapelKelasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MapelKelas/Create",
            Update = "Master/MapelKelas/Update",
            Delete = "Master/MapelKelas/Delete",
            Retrieve = "Master/MapelKelas/Retrieve",
            List = "Master/MapelKelas/List"
        }
    }
}
declare namespace Siagus.Master {
    interface MapelRow {
        MapelId?: number;
        NamaMapel?: string;
        ListKelas?: number[];
    }
    namespace MapelRow {
        const idProperty = "MapelId";
        const nameProperty = "NamaMapel";
        const localTextPrefix = "Master.Mapel";
        const lookupKey = "Master.Mapel";
        function getLookup(): Q.Lookup<MapelRow>;
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            MapelId = "MapelId",
            NamaMapel = "NamaMapel",
            ListKelas = "ListKelas"
        }
    }
}
declare namespace Siagus.Master {
    namespace MapelService {
        const baseUrl = "Master/Mapel";
        function Create(request: Serenity.SaveRequest<MapelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MapelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MapelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: ListKelasRequest, onSuccess?: (response: Serenity.ListResponse<MapelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Mapel/Create",
            Update = "Master/Mapel/Update",
            Delete = "Master/Mapel/Delete",
            Retrieve = "Master/Mapel/Retrieve",
            List = "Master/Mapel/List"
        }
    }
}
declare namespace Siagus.Master {
    interface MapelguruParalelRow {
        MapelguruparalelId?: number;
        MapelguruId?: number;
        KelasparalelId?: number;
        MapelguruNipId?: string;
        MapelguruMapelkelasId?: number;
        Kelasparalel?: string;
    }
    namespace MapelguruParalelRow {
        const idProperty = "MapelguruparalelId";
        const localTextPrefix = "Master.MapelguruParalel";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            MapelguruparalelId = "MapelguruparalelId",
            MapelguruId = "MapelguruId",
            KelasparalelId = "KelasparalelId",
            MapelguruNipId = "MapelguruNipId",
            MapelguruMapelkelasId = "MapelguruMapelkelasId",
            Kelasparalel = "Kelasparalel"
        }
    }
}
declare namespace Siagus.Master {
    namespace MapelguruParalelService {
        const baseUrl = "Master/MapelguruParalel";
        function Create(request: Serenity.SaveRequest<MapelguruParalelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MapelguruParalelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MapelguruParalelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MapelguruParalelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/MapelguruParalel/Create",
            Update = "Master/MapelguruParalel/Update",
            Delete = "Master/MapelguruParalel/Delete",
            Retrieve = "Master/MapelguruParalel/Retrieve",
            List = "Master/MapelguruParalel/List"
        }
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface PrestasiForm {
        NamaPrestasi: Serenity.StringEditor;
        AjangPrestasi: Serenity.TextAreaEditor;
        TahunPrestasi: Serenity.DateYearEditor;
        CatatanPrestasi: Serenity.TextAreaEditor;
    }
    class PrestasiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface PrestasiRow {
        PrestasiId?: number;
        NisnId?: string;
        NamaPrestasi?: string;
        AjangPrestasi?: string;
        TahunPrestasi?: number;
        CatatanPrestasi?: string;
        NisnNamaSiswa?: string;
        NisnGenderSiswa?: number;
        NisnTempatlahirSiswa?: string;
        NisnTanggallahirSiswa?: string;
        NisnAlamatSiswa?: string;
        NisnTelponSiswa?: string;
        NisnEmailSiswa?: string;
        NisnAngkatanSiswa?: number[];
        NisnKelasId?: number;
        NisnKelasparalelId?: number;
        NisnStatusSiswa?: number;
    }
    namespace PrestasiRow {
        const idProperty = "PrestasiId";
        const nameProperty = "NisnId";
        const localTextPrefix = "Master.Prestasi";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            PrestasiId = "PrestasiId",
            NisnId = "NisnId",
            NamaPrestasi = "NamaPrestasi",
            AjangPrestasi = "AjangPrestasi",
            TahunPrestasi = "TahunPrestasi",
            CatatanPrestasi = "CatatanPrestasi",
            NisnNamaSiswa = "NisnNamaSiswa",
            NisnGenderSiswa = "NisnGenderSiswa",
            NisnTempatlahirSiswa = "NisnTempatlahirSiswa",
            NisnTanggallahirSiswa = "NisnTanggallahirSiswa",
            NisnAlamatSiswa = "NisnAlamatSiswa",
            NisnTelponSiswa = "NisnTelponSiswa",
            NisnEmailSiswa = "NisnEmailSiswa",
            NisnAngkatanSiswa = "NisnAngkatanSiswa",
            NisnKelasId = "NisnKelasId",
            NisnKelasparalelId = "NisnKelasparalelId",
            NisnStatusSiswa = "NisnStatusSiswa"
        }
    }
}
declare namespace Siagus.Master {
    namespace PrestasiService {
        const baseUrl = "Master/Prestasi";
        function Create(request: Serenity.SaveRequest<PrestasiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PrestasiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrestasiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrestasiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Prestasi/Create",
            Update = "Master/Prestasi/Update",
            Delete = "Master/Prestasi/Delete",
            Retrieve = "Master/Prestasi/Retrieve",
            List = "Master/Prestasi/List"
        }
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface RiwayatPendidikanForm {
        JurusanPendidikan: Serenity.StringEditor;
        GelarPendidikan: Serenity.StringEditor;
    }
    class RiwayatPendidikanForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface RiwayatPendidikanRow {
        RiwayatpendidikanId?: number;
        NipId?: string;
        JurusanPendidikan?: string;
        GelarPendidikan?: string;
        NipNamaGuru?: string;
        NipGenderGuru?: number;
        NipTempatlahirGuru?: string;
        NipTanggallahirGuru?: string;
        NipAlamatGuru?: string;
        NipTelponGuru?: string;
        NipEmailGuru?: string;
        NipStatuspnsGuru?: number;
        NipStatusaktifGuru?: number;
    }
    namespace RiwayatPendidikanRow {
        const idProperty = "RiwayatpendidikanId";
        const nameProperty = "NipId";
        const localTextPrefix = "Master.RiwayatPendidikan";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            RiwayatpendidikanId = "RiwayatpendidikanId",
            NipId = "NipId",
            JurusanPendidikan = "JurusanPendidikan",
            GelarPendidikan = "GelarPendidikan",
            NipNamaGuru = "NipNamaGuru",
            NipGenderGuru = "NipGenderGuru",
            NipTempatlahirGuru = "NipTempatlahirGuru",
            NipTanggallahirGuru = "NipTanggallahirGuru",
            NipAlamatGuru = "NipAlamatGuru",
            NipTelponGuru = "NipTelponGuru",
            NipEmailGuru = "NipEmailGuru",
            NipStatuspnsGuru = "NipStatuspnsGuru",
            NipStatusaktifGuru = "NipStatusaktifGuru"
        }
    }
}
declare namespace Siagus.Master {
    namespace RiwayatPendidikanService {
        const baseUrl = "Master/RiwayatPendidikan";
        function Create(request: Serenity.SaveRequest<RiwayatPendidikanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RiwayatPendidikanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RiwayatPendidikanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RiwayatPendidikanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/RiwayatPendidikan/Create",
            Update = "Master/RiwayatPendidikan/Update",
            Delete = "Master/RiwayatPendidikan/Delete",
            Retrieve = "Master/RiwayatPendidikan/Retrieve",
            List = "Master/RiwayatPendidikan/List"
        }
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface SiswaForm {
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
    class SiswaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    enum SiswaGender {
        LakiLaki = 1,
        Perempuan = 2,
        Lain = 3
    }
}
declare namespace Siagus.Master {
    interface SiswaRow {
        NisnId?: string;
        NamaSiswa?: string;
        GenderSiswa?: SiswaGender;
        TempatlahirSiswa?: string;
        TanggallahirSiswa?: string;
        AlamatSiswa?: string;
        TelponSiswa?: string;
        EmailSiswa?: string;
        AngkatanSiswa?: number;
        KelasId?: number;
        KelasparalelId?: number;
        StatusSiswa?: SiswaStatus;
        Kelas?: string;
        Kelasparalel?: string;
        DaftarPrestasi?: PrestasiRow[];
        DaftarWali?: WaliSiswaRow[];
    }
    namespace SiswaRow {
        const idProperty = "NisnId";
        const nameProperty = "NamaSiswa";
        const localTextPrefix = "Master.Siswa";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            NisnId = "NisnId",
            NamaSiswa = "NamaSiswa",
            GenderSiswa = "GenderSiswa",
            TempatlahirSiswa = "TempatlahirSiswa",
            TanggallahirSiswa = "TanggallahirSiswa",
            AlamatSiswa = "AlamatSiswa",
            TelponSiswa = "TelponSiswa",
            EmailSiswa = "EmailSiswa",
            AngkatanSiswa = "AngkatanSiswa",
            KelasId = "KelasId",
            KelasparalelId = "KelasparalelId",
            StatusSiswa = "StatusSiswa",
            Kelas = "Kelas",
            Kelasparalel = "Kelasparalel",
            DaftarPrestasi = "DaftarPrestasi",
            DaftarWali = "DaftarWali"
        }
    }
}
declare namespace Siagus.Master {
    namespace SiswaService {
        const baseUrl = "Master/Siswa";
        function Create(request: Serenity.SaveRequest<SiswaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SiswaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SiswaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SiswaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Siswa/Create",
            Update = "Master/Siswa/Update",
            Delete = "Master/Siswa/Delete",
            Retrieve = "Master/Siswa/Retrieve",
            List = "Master/Siswa/List"
        }
    }
}
declare namespace Siagus.Master {
    enum SiswaStatus {
        Aktif = 1,
        NonAktif = 2,
        Lulus = 3
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface TatausahaForm {
        NamaTu: Serenity.StringEditor;
        AlamatTu: Serenity.TextAreaEditor;
        TelponTu: Serenity.StringEditor;
    }
    class TatausahaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface TatausahaRow {
        TuId?: number;
        NamaTu?: string;
        AlamatTu?: string;
        TelponTu?: string;
    }
    namespace TatausahaRow {
        const idProperty = "TuId";
        const nameProperty = "NamaTu";
        const localTextPrefix = "Master.Tatausaha";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            TuId = "TuId",
            NamaTu = "NamaTu",
            AlamatTu = "AlamatTu",
            TelponTu = "TelponTu"
        }
    }
}
declare namespace Siagus.Master {
    namespace TatausahaService {
        const baseUrl = "Master/Tatausaha";
        function Create(request: Serenity.SaveRequest<TatausahaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TatausahaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TatausahaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TatausahaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Tatausaha/Create",
            Update = "Master/Tatausaha/Update",
            Delete = "Master/Tatausaha/Delete",
            Retrieve = "Master/Tatausaha/Retrieve",
            List = "Master/Tatausaha/List"
        }
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface WaliForm {
        NamaWali: Serenity.StringEditor;
        AlamatWali: Serenity.TextAreaEditor;
        TelponWali: Serenity.StringEditor;
    }
    class WaliForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface WaliRow {
        WaliId?: number;
        NamaWali?: string;
        AlamatWali?: string;
        TelponWali?: string;
    }
    namespace WaliRow {
        const idProperty = "WaliId";
        const nameProperty = "NamaWali";
        const localTextPrefix = "Master.Wali";
        const lookupKey = "Master.Wali";
        function getLookup(): Q.Lookup<WaliRow>;
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            WaliId = "WaliId",
            NamaWali = "NamaWali",
            AlamatWali = "AlamatWali",
            TelponWali = "TelponWali"
        }
    }
}
declare namespace Siagus.Master {
    namespace WaliService {
        const baseUrl = "Master/Wali";
        function Create(request: Serenity.SaveRequest<WaliRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WaliRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaliRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaliRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Wali/Create",
            Update = "Master/Wali/Update",
            Delete = "Master/Wali/Delete",
            Retrieve = "Master/Wali/Retrieve",
            List = "Master/Wali/List"
        }
    }
}
declare namespace Siagus.Master {
}
declare namespace Siagus.Master {
    interface WaliSiswaForm {
        WaliId: Serenity.LookupEditor;
        WaliAlamatWali: Serenity.StringEditor;
        WaliTelponWali: Serenity.StringEditor;
        Hubungan: Serenity.StringEditor;
    }
    class WaliSiswaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Master {
    interface WaliSiswaRow {
        WalisiswaId?: number;
        NisnId?: string;
        WaliId?: number;
        Hubungan?: string;
        NisnNamaSiswa?: string;
        NisnGenderSiswa?: number;
        NisnTempatlahirSiswa?: string;
        NisnTanggallahirSiswa?: string;
        NisnAlamatSiswa?: string;
        NisnTelponSiswa?: string;
        NisnEmailSiswa?: string;
        NisnAngkatanSiswa?: number[];
        NisnKelasId?: number;
        NisnKelasparalelId?: number;
        NisnStatusSiswa?: number;
        WaliNamaWali?: string;
        WaliAlamatWali?: string;
        WaliTelponWali?: string;
    }
    namespace WaliSiswaRow {
        const idProperty = "WalisiswaId";
        const nameProperty = "NisnId";
        const localTextPrefix = "Master.WaliSiswa";
        const deletePermission = "Master:Modify";
        const insertPermission = "Master:Modify";
        const readPermission = "Master:Read";
        const updatePermission = "Master:Modify";
        const enum Fields {
            WalisiswaId = "WalisiswaId",
            NisnId = "NisnId",
            WaliId = "WaliId",
            Hubungan = "Hubungan",
            NisnNamaSiswa = "NisnNamaSiswa",
            NisnGenderSiswa = "NisnGenderSiswa",
            NisnTempatlahirSiswa = "NisnTempatlahirSiswa",
            NisnTanggallahirSiswa = "NisnTanggallahirSiswa",
            NisnAlamatSiswa = "NisnAlamatSiswa",
            NisnTelponSiswa = "NisnTelponSiswa",
            NisnEmailSiswa = "NisnEmailSiswa",
            NisnAngkatanSiswa = "NisnAngkatanSiswa",
            NisnKelasId = "NisnKelasId",
            NisnKelasparalelId = "NisnKelasparalelId",
            NisnStatusSiswa = "NisnStatusSiswa",
            WaliNamaWali = "WaliNamaWali",
            WaliAlamatWali = "WaliAlamatWali",
            WaliTelponWali = "WaliTelponWali"
        }
    }
}
declare namespace Siagus.Master {
    namespace WaliSiswaService {
        const baseUrl = "Master/WaliSiswa";
        function Create(request: Serenity.SaveRequest<WaliSiswaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WaliSiswaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaliSiswaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaliSiswaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/WaliSiswa/Create",
            Update = "Master/WaliSiswa/Update",
            Delete = "Master/WaliSiswa/Delete",
            Retrieve = "Master/WaliSiswa/Retrieve",
            List = "Master/WaliSiswa/List"
        }
    }
}
declare namespace Siagus.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Siagus.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Siagus.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Siagus.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Siagus.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Siagus.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Siagus {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Siagus.Texts {
}
declare namespace Siagus.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Siagus.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Siagus.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Siagus.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Siagus.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Siagus.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Siagus.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Siagus.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Siagus.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Siagus.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Siagus.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Siagus.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Siagus.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Siagus.LanguageList {
    function getValue(): string[][];
}
declare namespace Siagus.ScriptInitialization {
}
declare namespace Siagus {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Siagus.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Siagus.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Siagus.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Siagus.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Siagus.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Siagus.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Siagus {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Siagus.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Siagus.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Siagus.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Siagus.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Siagus.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Siagus.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Siagus.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Siagus.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Siagus.Master {
    class GuruDialog extends Serenity.EntityDialog<GuruRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GuruForm;
        private grid;
        constructor();
    }
}
declare namespace Siagus.Master {
    class GuruGrid extends Serenity.EntityGrid<GuruRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GuruDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Siagus.Master {
    class KelasDialog extends Serenity.EntityDialog<KelasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KelasForm;
    }
}
declare namespace Siagus.Master {
    class KelasGrid extends Serenity.EntityGrid<KelasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KelasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Master {
    class KelasParalelDialog extends Serenity.EntityDialog<KelasParalelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KelasParalelForm;
    }
}
declare namespace Siagus.Master {
    class KelasParalelGrid extends Serenity.EntityGrid<KelasParalelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KelasParalelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Master {
    class ListKelasFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Siagus.Master {
    class MapelDialog extends Serenity.EntityDialog<MapelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MapelForm;
    }
}
declare namespace Siagus.Master {
    class MapelGrid extends Serenity.EntityGrid<MapelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MapelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Siagus.Master {
    class ListKelasParalelFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Siagus.Master {
    class MapelGuruDialog extends Common.GridEditorDialog<MapelGuruRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: MapelGuruForm;
        constructor();
    }
}
declare namespace Siagus.Master {
    class MapelGuruEditor extends Common.GridEditorBase<MapelGuruRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof MapelGuruDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: MapelGuruRow, id: number): boolean;
    }
}
declare namespace Siagus.Master {
    class MapelGuruGrid extends Serenity.EntityGrid<MapelGuruRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MapelGuruDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Master {
    class MapelsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Master.MapelKelasRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Master.MapelKelasRow, lookup: Q.Lookup<Master.MapelKelasRow>): string;
    }
}
declare namespace Siagus.Master {
    class PrestasiDialog extends Common.GridEditorDialog<RiwayatPendidikanRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: PrestasiForm;
        constructor();
    }
}
declare namespace Siagus.Master {
    class PrestasiEditor extends Common.GridEditorBase<PrestasiRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof PrestasiDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
    }
}
declare namespace Siagus.Master {
    class RiwayatPendidikanDialog extends Common.GridEditorDialog<RiwayatPendidikanRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: RiwayatPendidikanForm;
        constructor();
    }
}
declare namespace Siagus.Master {
    class RiwayatPendidikanEditor extends Common.GridEditorBase<RiwayatPendidikanRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof RiwayatPendidikanDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
    }
}
declare namespace Siagus.Master {
    class SiswaDialog extends Serenity.EntityDialog<SiswaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SiswaForm;
        private grid;
        constructor();
    }
}
declare namespace Siagus.Master {
    class SiswaGrid extends Serenity.EntityGrid<SiswaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SiswaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Siagus.Master {
    class TatausahaDialog extends Serenity.EntityDialog<TatausahaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TatausahaForm;
    }
}
declare namespace Siagus.Master {
    class TatausahaGrid extends Serenity.EntityGrid<TatausahaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TatausahaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Siagus.Master {
    class WaliDariGrid extends Serenity.EntityGrid<WaliSiswaRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any;
        protected getInitialTitle(): any;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _waliID;
        get waliID(): number;
        set waliID(value: number);
    }
}
declare namespace Siagus.Master {
    class WaliDialog extends Serenity.EntityDialog<WaliRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WaliForm;
        private waliDariGrid;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace Siagus.Master {
    class WaliGrid extends Serenity.EntityGrid<WaliRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaliDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Siagus.Master {
    class WaliSiswaDialog extends Serenity.EntityDialog<WaliSiswaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WaliSiswaForm;
        constructor();
        private setWaliDetails;
    }
}
declare namespace Siagus.Master {
    class WaliSiswaEditor extends Common.GridEditorBase<WaliRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof WaliSiswaDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: WaliSiswaRow, id: number): boolean;
    }
}
declare namespace Siagus.Master {
    class WaliSiswaGrid extends Serenity.EntityGrid<WaliSiswaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaliSiswaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Siagus.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Siagus.Master {
}
