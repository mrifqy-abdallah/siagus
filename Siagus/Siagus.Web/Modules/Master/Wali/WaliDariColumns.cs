namespace Siagus.Master.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Master.WaliDari")]
    [BasedOnRow(typeof(Entities.WaliSiswaRow))]
    public class WaliDariColumns
    {
        [Width(300), SortOrder(1)]
        public String NisnNamaSiswa { get; set; }
        [Width(100)]
        public String Hubungan { get; set; }
    }
}
