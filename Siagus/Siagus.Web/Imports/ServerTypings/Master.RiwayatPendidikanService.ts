namespace Siagus.Master {
    export namespace RiwayatPendidikanService {
        export const baseUrl = 'Master/RiwayatPendidikan';

        export declare function Create(request: Serenity.SaveRequest<RiwayatPendidikanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RiwayatPendidikanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RiwayatPendidikanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RiwayatPendidikanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/RiwayatPendidikan/Create",
            Update = "Master/RiwayatPendidikan/Update",
            Delete = "Master/RiwayatPendidikan/Delete",
            Retrieve = "Master/RiwayatPendidikan/Retrieve",
            List = "Master/RiwayatPendidikan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RiwayatPendidikanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
