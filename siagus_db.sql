-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2021 at 07:11 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siagus_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `exceptions`
--

CREATE TABLE `exceptions` (
  `Id` bigint(20) NOT NULL,
  `GUID` varchar(40) NOT NULL,
  `ApplicationName` varchar(50) NOT NULL,
  `MachineName` varchar(50) NOT NULL,
  `CreationDate` datetime NOT NULL,
  `Type` varchar(100) NOT NULL,
  `IsProtected` tinyint(1) NOT NULL DEFAULT 1,
  `Host` varchar(100) DEFAULT NULL,
  `Url` varchar(500) DEFAULT NULL,
  `HTTPMethod` varchar(10) DEFAULT NULL,
  `IPAddress` varchar(40) DEFAULT NULL,
  `Source` varchar(100) DEFAULT NULL,
  `Message` varchar(1000) DEFAULT NULL,
  `Detail` longtext DEFAULT NULL,
  `StatusCode` int(11) DEFAULT NULL,
  `SQL` longtext DEFAULT NULL,
  `DeletionDate` datetime DEFAULT NULL,
  `FullJson` longtext DEFAULT NULL,
  `ErrorHash` int(11) DEFAULT NULL,
  `DuplicateCount` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `guru`
--

CREATE TABLE `guru` (
  `nip_id` varchar(30) NOT NULL,
  `nama_guru` varchar(40) NOT NULL,
  `gender_guru` int(11) NOT NULL,
  `tempatlahir_guru` varchar(20) NOT NULL,
  `tanggallahir_guru` date NOT NULL,
  `alamat_guru` text NOT NULL,
  `telpon_guru` varchar(20) NOT NULL,
  `email_guru` varchar(40) NOT NULL,
  `statuspns_guru` int(11) NOT NULL,
  `statusaktif_guru` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guru`
--

INSERT INTO `guru` (`nip_id`, `nama_guru`, `gender_guru`, `tempatlahir_guru`, `tanggallahir_guru`, `alamat_guru`, `telpon_guru`, `email_guru`, `statuspns_guru`, `statusaktif_guru`) VALUES
('8123456789123456788', 'Adhika Yoga Pratama', 1, 'Surakarta', '2020-12-03', 'Jalan Bubur', '082256789876', 'yogadhika@dummy.com', 1, 2),
('9123456789123456789', 'Muhammad Rifqy Abdallah', 1, 'Surakarta', '2020-12-09', 'Jalan anu', '081112341234', 'abdallahrifqy@dummy.com', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `kelas`
--

CREATE TABLE `kelas` (
  `kelas_id` int(11) NOT NULL,
  `kelas` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kelas`
--

INSERT INTO `kelas` (`kelas_id`, `kelas`) VALUES
(1, 'X - IPA'),
(2, 'XI - IPA'),
(3, 'XII - IPA'),
(4, 'X - IPS'),
(5, 'XI - IPS'),
(6, 'XII - IPS');

-- --------------------------------------------------------

--
-- Table structure for table `kelas_paralel`
--

CREATE TABLE `kelas_paralel` (
  `kelasparalel_id` int(11) NOT NULL,
  `kelasparalel` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kelas_paralel`
--

INSERT INTO `kelas_paralel` (`kelasparalel_id`, `kelasparalel`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `Id` int(11) NOT NULL,
  `LanguageId` varchar(10) NOT NULL,
  `LanguageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`Id`, `LanguageId`, `LanguageName`) VALUES
(1, 'en', 'English'),
(2, 'ru', 'Russian'),
(3, 'es', 'Spanish'),
(4, 'tr', 'Turkish'),
(5, 'de', 'German'),
(6, 'zh-CN', 'Chinese (Simplified)'),
(7, 'it', 'Italian'),
(8, 'pt', 'Portuguese'),
(9, 'pt-BR', 'Portuguese (Brazil)'),
(10, 'fa', 'Farsi'),
(11, 'vi-VN', 'Vietnamese (Vietnam)');

-- --------------------------------------------------------

--
-- Table structure for table `mapel`
--

CREATE TABLE `mapel` (
  `mapel_id` int(11) NOT NULL,
  `nama_mapel` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapel`
--

INSERT INTO `mapel` (`mapel_id`, `nama_mapel`) VALUES
(1, 'Fisika'),
(2, 'Ilmu Sejarah'),
(4, 'Ilmu Hitam');

-- --------------------------------------------------------

--
-- Table structure for table `mapelguru_paralel`
--

CREATE TABLE `mapelguru_paralel` (
  `mapelguruparalel_id` int(11) NOT NULL,
  `mapelguru_id` int(11) NOT NULL,
  `kelasparalel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapelguru_paralel`
--

INSERT INTO `mapelguru_paralel` (`mapelguruparalel_id`, `mapelguru_id`, `kelasparalel_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(5, 2, 1),
(6, 2, 2),
(7, 2, 3),
(8, 2, 4),
(9, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `mapel_guru`
--

CREATE TABLE `mapel_guru` (
  `mapelguru_id` int(11) NOT NULL,
  `nip_id` varchar(20) NOT NULL,
  `mapelkelas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapel_guru`
--

INSERT INTO `mapel_guru` (`mapelguru_id`, `nip_id`, `mapelkelas_id`) VALUES
(1, '8123456789123456788', 5),
(2, '8123456789123456788', 6);

-- --------------------------------------------------------

--
-- Table structure for table `mapel_kelas`
--

CREATE TABLE `mapel_kelas` (
  `mapelkelas_id` int(11) NOT NULL,
  `mapel_id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapel_kelas`
--

INSERT INTO `mapel_kelas` (`mapelkelas_id`, `mapel_id`, `kelas_id`) VALUES
(5, 1, 1),
(6, 1, 2),
(7, 1, 3),
(12, 2, 4),
(14, 4, 6),
(17, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `prestasi`
--

CREATE TABLE `prestasi` (
  `prestasi_id` int(11) NOT NULL,
  `nisn_id` varchar(20) NOT NULL,
  `nama_prestasi` varchar(100) NOT NULL,
  `ajang_prestasi` varchar(200) NOT NULL,
  `tahun_prestasi` year(4) NOT NULL,
  `catatan_prestasi` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prestasi`
--

INSERT INTO `prestasi` (`prestasi_id`, `nisn_id`, `nama_prestasi`, `ajang_prestasi`, `tahun_prestasi`, `catatan_prestasi`) VALUES
(1, '0098877665', 'Juara 1 Lomba Makan Krupuk', 'Lomba Peringatan Kemerdekaan 17 Agustus 2019', 2019, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_pendidikan`
--

CREATE TABLE `riwayat_pendidikan` (
  `riwayatpendidikan_id` int(11) NOT NULL,
  `nip_id` varchar(20) NOT NULL,
  `jurusan_pendidikan` varchar(60) NOT NULL,
  `gelar_pendidikan` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat_pendidikan`
--

INSERT INTO `riwayat_pendidikan` (`riwayatpendidikan_id`, `nip_id`, `jurusan_pendidikan`, `gelar_pendidikan`) VALUES
(1, '9123456789123456789', 'Pendidikan Teknik Informatika dan Komputer', 'S. Pd.'),
(2, '9123456789123456789', 'Magister Pendidikan Teknik Informatika dan Komputer', 'M. Pd.'),
(3, '8123456789123456788', 'Pendidikan Teknik Informatika dan Komputer', 'S. Pd.'),
(4, '8123456789123456788', 'Pendidikan Ekonomi', 'S. Pd.'),
(5, '8123456789123456788', 'Ilmu Hukum', 'S. H.');

-- --------------------------------------------------------

--
-- Table structure for table `rolepermissions`
--

CREATE TABLE `rolepermissions` (
  `RolePermissionId` bigint(20) NOT NULL,
  `RoleId` int(11) NOT NULL,
  `PermissionKey` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rolepermissions`
--

INSERT INTO `rolepermissions` (`RolePermissionId`, `RoleId`, `PermissionKey`) VALUES
(1, 1, 'Administration:Security'),
(2, 1, 'Administration:Translation'),
(3, 1, 'Master:Modify'),
(4, 1, 'Master:Read'),
(5, 2, 'Master:Modify'),
(6, 2, 'Master:Read'),
(7, 3, 'Master:Read');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `RoleId` int(11) NOT NULL,
  `RoleName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`RoleId`, `RoleName`) VALUES
(1, 'admin'),
(2, 'tata usaha'),
(3, 'guest');

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `nisn_id` varchar(20) NOT NULL,
  `nama_siswa` varchar(40) NOT NULL,
  `gender_siswa` int(11) NOT NULL,
  `tempatlahir_siswa` varchar(20) NOT NULL,
  `tanggallahir_siswa` date NOT NULL,
  `alamat_siswa` text NOT NULL,
  `telpon_siswa` varchar(20) NOT NULL,
  `email_siswa` varchar(40) NOT NULL,
  `angkatan_siswa` year(4) NOT NULL,
  `kelas_id` int(11) DEFAULT NULL,
  `kelasparalel_id` int(11) DEFAULT NULL,
  `status_siswa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`nisn_id`, `nama_siswa`, `gender_siswa`, `tempatlahir_siswa`, `tanggallahir_siswa`, `alamat_siswa`, `telpon_siswa`, `email_siswa`, `angkatan_siswa`, `kelas_id`, `kelasparalel_id`, `status_siswa`) VALUES
('0087766554', 'Muhammad Samidi', 1, 'Surakarta', '2002-01-16', 'Jalan Raya', '0', 'msamidi@dummy.com', 2017, 1, 2, 1),
('0098877665', 'Muhammad Ahmad', 1, 'Solo', '2021-01-01', 'Jalan Suka Apa', '0', 'ahmadm@dummy.com', 2017, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tatausaha`
--

CREATE TABLE `tatausaha` (
  `tu_id` int(11) NOT NULL,
  `nama_tu` varchar(40) NOT NULL,
  `alamat_tu` varchar(100) NOT NULL,
  `telpon_tu` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userpermissions`
--

CREATE TABLE `userpermissions` (
  `UserPermissionId` bigint(20) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PermissionKey` varchar(100) NOT NULL,
  `Granted` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userpreferences`
--

CREATE TABLE `userpreferences` (
  `UserPreferenceId` int(11) NOT NULL,
  `UserId` bigint(20) NOT NULL,
  `PreferenceType` varchar(100) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `UserRoleId` bigint(20) NOT NULL,
  `UserId` int(11) NOT NULL,
  `RoleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`UserRoleId`, `UserId`, `RoleId`) VALUES
(1, 2, 2),
(2, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `DisplayName` varchar(100) NOT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Source` varchar(4) NOT NULL,
  `PasswordHash` varchar(86) NOT NULL,
  `PasswordSalt` varchar(10) NOT NULL,
  `LastDirectoryUpdate` datetime DEFAULT NULL,
  `UserImage` varchar(100) DEFAULT NULL,
  `InsertDate` datetime NOT NULL,
  `InsertUserId` int(11) NOT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `UpdateUserId` int(11) DEFAULT NULL,
  `IsActive` smallint(6) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `Username`, `DisplayName`, `Email`, `Source`, `PasswordHash`, `PasswordSalt`, `LastDirectoryUpdate`, `UserImage`, `InsertDate`, `InsertUserId`, `UpdateDate`, `UpdateUserId`, `IsActive`) VALUES
(1, 'admin', 'admin', 'admin@dummy.com', 'site', 'rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ', 'hJf_F', NULL, NULL, '2014-01-01 00:00:00', 1, NULL, NULL, 1),
(2, 'tatausaha1', 'tatausaha1', NULL, 'site', '1q9pFmKUgGanU6tUDtZBtQd3p1fIJN6t+rw2dMY2n38FKkFRm3lbbtzS3oOjnXeZUPScJemTKNcXXd30lBWY4w', '3vixd', NULL, NULL, '2021-01-07 17:47:31', 1, '2021-01-07 17:47:42', 1, 1),
(3, 'guru1', 'guru1', NULL, 'site', 'gxZlSPnLkqzMNMui6IMqJydr87ijznXcWRjU9mRBrj6jEwao7EEuYik//noTmxqBMrXcpG60YJKm+UIOaGzPNA', 'dnqpe', NULL, NULL, '2021-01-07 17:49:04', 1, '2021-01-07 17:49:14', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `versioninfo`
--

CREATE TABLE `versioninfo` (
  `Version` bigint(20) NOT NULL,
  `AppliedOn` datetime DEFAULT NULL,
  `Description` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `versioninfo`
--

INSERT INTO `versioninfo` (`Version`, `AppliedOn`, `Description`) VALUES
(20141103140000, '2020-12-20 14:37:04', 'DefaultDB_20141103_140000_Initial'),
(20141111113000, '2020-12-20 14:37:06', 'DefaultDB_20141111_113000_Permissions'),
(20160515072600, '2020-12-20 14:37:06', 'DefaultDB_20160515_072600_UserPreferences'),
(20161029130000, '2020-12-20 14:37:06', 'DefaultDB_20161029_130000_ExceptionLog');

-- --------------------------------------------------------

--
-- Table structure for table `wali`
--

CREATE TABLE `wali` (
  `wali_id` int(11) NOT NULL,
  `nama_wali` varchar(40) NOT NULL,
  `alamat_wali` text NOT NULL,
  `telpon_wali` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wali`
--

INSERT INTO `wali` (`wali_id`, `nama_wali`, `alamat_wali`, `telpon_wali`) VALUES
(1, 'Soekarno', 'Jalan Suka Apa', '089991919191'),
(2, 'Soekarni', 'Jalan Tidak Suka Api', '088823232323');

-- --------------------------------------------------------

--
-- Table structure for table `wali_siswa`
--

CREATE TABLE `wali_siswa` (
  `walisiswa_id` int(11) NOT NULL,
  `nisn_id` varchar(20) NOT NULL,
  `wali_id` int(11) NOT NULL,
  `hubungan` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wali_siswa`
--

INSERT INTO `wali_siswa` (`walisiswa_id`, `nisn_id`, `wali_id`, `hubungan`) VALUES
(1, '0098877665', 2, 'Budhe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exceptions`
--
ALTER TABLE `exceptions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_Exceptions_GUID_App_Del_Cre` (`GUID`,`ApplicationName`,`DeletionDate`,`CreationDate`),
  ADD KEY `IX_Exceptions_Hash_App_Cre_Del` (`ErrorHash`,`ApplicationName`,`CreationDate`,`DeletionDate`),
  ADD KEY `IX_Exceptions_App_Del_Cre` (`ApplicationName`,`DeletionDate`,`CreationDate`);

--
-- Indexes for table `guru`
--
ALTER TABLE `guru`
  ADD PRIMARY KEY (`nip_id`);

--
-- Indexes for table `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`kelas_id`);

--
-- Indexes for table `kelas_paralel`
--
ALTER TABLE `kelas_paralel`
  ADD PRIMARY KEY (`kelasparalel_id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mapel`
--
ALTER TABLE `mapel`
  ADD PRIMARY KEY (`mapel_id`);

--
-- Indexes for table `mapelguru_paralel`
--
ALTER TABLE `mapelguru_paralel`
  ADD PRIMARY KEY (`mapelguruparalel_id`),
  ADD KEY `fk_mapelguruparalel_mapelguru` (`mapelguru_id`),
  ADD KEY `fk_mapelguruparalel_kelasparalel` (`kelasparalel_id`);

--
-- Indexes for table `mapel_guru`
--
ALTER TABLE `mapel_guru`
  ADD PRIMARY KEY (`mapelguru_id`),
  ADD KEY `fk_mapelguru_guru` (`nip_id`),
  ADD KEY `fk_mapelguru_mapelkelas` (`mapelkelas_id`);

--
-- Indexes for table `mapel_kelas`
--
ALTER TABLE `mapel_kelas`
  ADD PRIMARY KEY (`mapelkelas_id`),
  ADD KEY `fk_mapelkelas_mapel` (`mapel_id`),
  ADD KEY `fk_mapelkelas_kelas` (`kelas_id`);

--
-- Indexes for table `prestasi`
--
ALTER TABLE `prestasi`
  ADD PRIMARY KEY (`prestasi_id`),
  ADD KEY `fk_prestasi_siswa` (`nisn_id`);

--
-- Indexes for table `riwayat_pendidikan`
--
ALTER TABLE `riwayat_pendidikan`
  ADD PRIMARY KEY (`riwayatpendidikan_id`),
  ADD KEY `fk_riwayatpendidikan_guru` (`nip_id`);

--
-- Indexes for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD PRIMARY KEY (`RolePermissionId`),
  ADD UNIQUE KEY `UQ_RolePerm_RoleId_PermKey` (`RoleId`,`PermissionKey`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RoleId`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`nisn_id`),
  ADD KEY `fk_siswa_kelas` (`kelas_id`),
  ADD KEY `fk_siswa_kelasparalel` (`kelasparalel_id`);

--
-- Indexes for table `tatausaha`
--
ALTER TABLE `tatausaha`
  ADD PRIMARY KEY (`tu_id`);

--
-- Indexes for table `userpermissions`
--
ALTER TABLE `userpermissions`
  ADD PRIMARY KEY (`UserPermissionId`),
  ADD UNIQUE KEY `UQ_UserPerm_UserId_PermKey` (`UserId`,`PermissionKey`);

--
-- Indexes for table `userpreferences`
--
ALTER TABLE `userpreferences`
  ADD PRIMARY KEY (`UserPreferenceId`),
  ADD UNIQUE KEY `IX_UserPref_UID_PrefType_Name` (`UserId`,`PreferenceType`,`Name`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`UserRoleId`),
  ADD UNIQUE KEY `UQ_UserRoles_UserId_RoleId` (`UserId`,`RoleId`),
  ADD KEY `IX_UserRoles_RoleId_UserId` (`RoleId`,`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `versioninfo`
--
ALTER TABLE `versioninfo`
  ADD UNIQUE KEY `UC_Version` (`Version`);

--
-- Indexes for table `wali`
--
ALTER TABLE `wali`
  ADD PRIMARY KEY (`wali_id`);

--
-- Indexes for table `wali_siswa`
--
ALTER TABLE `wali_siswa`
  ADD PRIMARY KEY (`walisiswa_id`),
  ADD KEY `fk_walisiswa_siswa` (`nisn_id`),
  ADD KEY `fk_walisiswa_wali` (`wali_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exceptions`
--
ALTER TABLE `exceptions`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kelas`
--
ALTER TABLE `kelas`
  MODIFY `kelas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `kelas_paralel`
--
ALTER TABLE `kelas_paralel`
  MODIFY `kelasparalel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `mapel`
--
ALTER TABLE `mapel`
  MODIFY `mapel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `mapelguru_paralel`
--
ALTER TABLE `mapelguru_paralel`
  MODIFY `mapelguruparalel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `mapel_guru`
--
ALTER TABLE `mapel_guru`
  MODIFY `mapelguru_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mapel_kelas`
--
ALTER TABLE `mapel_kelas`
  MODIFY `mapelkelas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `prestasi`
--
ALTER TABLE `prestasi`
  MODIFY `prestasi_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `riwayat_pendidikan`
--
ALTER TABLE `riwayat_pendidikan`
  MODIFY `riwayatpendidikan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  MODIFY `RolePermissionId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `RoleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tatausaha`
--
ALTER TABLE `tatausaha`
  MODIFY `tu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userpermissions`
--
ALTER TABLE `userpermissions`
  MODIFY `UserPermissionId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userpreferences`
--
ALTER TABLE `userpreferences`
  MODIFY `UserPreferenceId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userroles`
--
ALTER TABLE `userroles`
  MODIFY `UserRoleId` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `wali`
--
ALTER TABLE `wali`
  MODIFY `wali_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `wali_siswa`
--
ALTER TABLE `wali_siswa`
  MODIFY `walisiswa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mapelguru_paralel`
--
ALTER TABLE `mapelguru_paralel`
  ADD CONSTRAINT `fk_mapelguruparalel_kelasparalel` FOREIGN KEY (`kelasparalel_id`) REFERENCES `kelas_paralel` (`kelasparalel_id`),
  ADD CONSTRAINT `fk_mapelguruparalel_mapelguru` FOREIGN KEY (`mapelguru_id`) REFERENCES `mapel_guru` (`mapelguru_id`);

--
-- Constraints for table `mapel_guru`
--
ALTER TABLE `mapel_guru`
  ADD CONSTRAINT `fk_mapelguru_guru` FOREIGN KEY (`nip_id`) REFERENCES `guru` (`nip_id`),
  ADD CONSTRAINT `fk_mapelguru_mapelkelas` FOREIGN KEY (`mapelkelas_id`) REFERENCES `mapel_kelas` (`mapelkelas_id`);

--
-- Constraints for table `mapel_kelas`
--
ALTER TABLE `mapel_kelas`
  ADD CONSTRAINT `fk_mapelkelas_kelas` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`),
  ADD CONSTRAINT `fk_mapelkelas_mapel` FOREIGN KEY (`mapel_id`) REFERENCES `mapel` (`mapel_id`);

--
-- Constraints for table `prestasi`
--
ALTER TABLE `prestasi`
  ADD CONSTRAINT `fk_prestasi_siswa` FOREIGN KEY (`nisn_id`) REFERENCES `siswa` (`nisn_id`);

--
-- Constraints for table `riwayat_pendidikan`
--
ALTER TABLE `riwayat_pendidikan`
  ADD CONSTRAINT `fk_riwayatpendidikan_guru` FOREIGN KEY (`nip_id`) REFERENCES `guru` (`nip_id`) ON DELETE CASCADE;

--
-- Constraints for table `rolepermissions`
--
ALTER TABLE `rolepermissions`
  ADD CONSTRAINT `FK_RolePermissions_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`RoleId`);

--
-- Constraints for table `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `fk_siswa_kelas` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`kelas_id`),
  ADD CONSTRAINT `fk_siswa_kelasparalel` FOREIGN KEY (`kelasparalel_id`) REFERENCES `kelas_paralel` (`kelasparalel_id`);

--
-- Constraints for table `userpermissions`
--
ALTER TABLE `userpermissions`
  ADD CONSTRAINT `FK_UserPermissions_UserId` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `userroles`
--
ALTER TABLE `userroles`
  ADD CONSTRAINT `FK_UserRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`RoleId`),
  ADD CONSTRAINT `FK_UserRoles_UserId` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `wali_siswa`
--
ALTER TABLE `wali_siswa`
  ADD CONSTRAINT `fk_walisiswa_siswa` FOREIGN KEY (`nisn_id`) REFERENCES `siswa` (`nisn_id`),
  ADD CONSTRAINT `fk_walisiswa_wali` FOREIGN KEY (`wali_id`) REFERENCES `wali` (`wali_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
