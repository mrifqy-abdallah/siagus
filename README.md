# About
This is a project that I did during my 7th semester on the subject of Project Work.  
This is a web-based project made using [Serenity platform](https://serenity.is/), and I designed it into a management system for schools administrator. The project is then called **SIAGUS**, which stands for _Sistem Administrasi Data Guru dan Siswa_ (It means: _Teachers and Students Data Administration System_).

## What can it do?
Here are some things that the web can do: 
- Authenticate users 
- Managing the record of teachers, including personal information dan subjects handled by each of them.
- Managing the record of students; including personal information, guardian(s), and achievement record.

## If you want to run this project on your computer...
- Serenity is a platform for Visual Studio only (at least now), so make sure to use Visual Studio (2019 or above) to open this project.
- Also, don't forget to import [siagus_db.sql](siagus_db.sql) to your DBMS. That is the database file for the project. 
- You might also need to edit the project's setting at [appsetting.json](Siagus/Siagus.Web/appsettings.json). At the **ConnectionString** part, you can change the value of _Uid_ and _Pwd_ into the username and password of your localhost DBMS.
- If you can run the project succesfully, you will be prompted to insert username and password in order to explore the web. There you can enter _admin_ and _serenity_ as the username and password respectively.
