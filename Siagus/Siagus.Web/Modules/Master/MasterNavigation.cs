using Serenity.Navigation;
using MyPages = Siagus.Master.Pages;

[assembly: NavigationMenu(2000, "Guru")]
[assembly: NavigationLink(2000, "Guru", typeof(MyPages.GuruController), icon: "fa-caret-right")]

[assembly: NavigationMenu(3000, "Mata Pelajaran")]
[assembly: NavigationLink(3000, "Mata Pelajaran", typeof(MyPages.MapelController), icon: "fa-caret-right")]

[assembly: NavigationMenu(4000, "Siswa")]
[assembly: NavigationLink(4000, "Siswa", typeof(MyPages.SiswaController), icon: "fa-caret-right")]

[assembly: NavigationMenu(5000, "Wali")]
[assembly: NavigationLink(5000, "Wali", typeof(MyPages.WaliController), icon: "fa-caret-right")]

[assembly: NavigationMenu(6000, "Tata Usaha")]
[assembly: NavigationLink(6000, "Tata Usaha", typeof(MyPages.TatausahaController), icon: "fa-caret-right")]

[assembly: NavigationMenu(7000, "Daftar Kelas", icon: "fa-bars")]
[assembly: NavigationLink(7100, "Daftar Kelas/Kelas", typeof(MyPages.KelasController), icon: "fa-caret-right")]
[assembly: NavigationLink(7200, "Daftar Kelas/Kelas Paralel", typeof(MyPages.KelasParalelController), icon: "fa-caret-right")]