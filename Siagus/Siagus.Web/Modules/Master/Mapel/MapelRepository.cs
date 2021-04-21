using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRow = Siagus.Master.Entities.MapelRow;

namespace Siagus.Master.Repositories
{
    public class MapelRepository : BaseRepository
    {
        private static MyRow.RowFields Fld => MyRow.Fields;

        public MapelRepository(IRequestContext context)
            : base(context)
        {
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListKelasRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
        }
        
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> 
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }
        
        private class MyListHandler : ListRequestHandler<MyRow, ListKelasRequest> 
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }

            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (!Request.Kelass.IsEmptyOrNull())
                {
                    var mk = Entities.MapelKelasRow.Fields.As("mk");

                    query.Where(Criteria.Exists(
                       query.SubQuery()
                       .From(mk)
                       .Select("1")
                       .Where(
                           mk.MapelId == Fld.MapelId &&
                           mk.KelasId.In(Request.Kelass))
                           .ToString()));
                }

            }
        }
    }
}