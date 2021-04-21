
using System.Collections.Generic;
using Serenity.Services;

namespace Siagus.Master
{
    public class ListKelasRequest : ListRequest
    {
        public List<int> Kelass { get; set; }
    }
}