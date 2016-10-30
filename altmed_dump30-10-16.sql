-- MySQL dump 10.13  Distrib 5.7.15, for Linux (x86_64)
--
-- Host: localhost    Database: altamedica
-- ------------------------------------------------------
-- Server version	5.7.15-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address_ru` text COLLATE utf8_unicode_ci NOT NULL,
  `address_ua` text COLLATE utf8_unicode_ci NOT NULL,
  `lat` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lng` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Гиршмана 19','Гиршмана 19',NULL,NULL,'2016-10-30 13:04:56','2016-10-30 13:04:56'),(2,'Театральный переулок 5','Театральный переулок 5',NULL,NULL,'2016-10-30 13:05:19','2016-10-30 13:05:19');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carousels`
--

DROP TABLE IF EXISTS `carousels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carousels` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text_ru` text COLLATE utf8_unicode_ci NOT NULL,
  `text_ua` text COLLATE utf8_unicode_ci NOT NULL,
  `news_id` int(11) DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carousels`
--

LOCK TABLES `carousels` WRITE;
/*!40000 ALTER TABLE `carousels` DISABLE KEYS */;
INSERT INTO `carousels` VALUES (1,'Заголовок Рус(тест)','Заголовок Укр(тест)','<p>псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является</p>\r\n','<p>&nbsp;</p>\r\n\r\n<p>псевдо-латинський текст, який використовується для веб дизайну, друкарні, обладнання, і роздруківки замість англійського тексту для того, щоб зробити наголос не так на зміст, а на елементи дизайну. Такий текст також називається як заповнювач. Це дуже зручний інструмент для моделей (макетів). Він допомагає виділити візуальні елементи в документі або презентації, наприклад текст, шрифт або розмітка. Lorem ipsum здебільшого є</p>\r\n',1,'','/images/uploads/carousel/2016-10-28-20-19-05-bg_general.jpg',1,'2016-10-28 17:16:33','2016-10-29 10:18:08'),(2,'Заголовок Рус','Заголовок Укр','<p>&nbsp;</p>\r\n\r\n<p>Уже давно известно, что читабельный содержание будет мешать сосредоточиться человеку, оценивает композицию страницы. Смысл использования Lorem Ipsum заключается в том, что этот текст имеет более или менее нормальное распределения букв в отличие от, например, &quot;Здесь идет текст. Здесь идет текст.</p>\r\n','<p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, &quot;Тут іде текст. Тут іде текст.&quot;</p>\r\n',1,'','/images/uploads/carousel/2016-10-29-13-16-16-derevo_abstrakciya_svet_noch_92069_1366x768.jpg',1,'2016-10-29 10:16:16','2016-10-29 10:16:16');
/*!40000 ALTER TABLE `carousels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `lft` int(11) DEFAULT NULL,
  `rgt` int(11) DEFAULT NULL,
  `depth` int(11) DEFAULT NULL,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_home` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (4,NULL,27,32,0,'Услуги','Послуги','2016-10-28 18:39:25','2016-10-29 18:51:44','ico_service','1'),(5,NULL,5,18,0,'Консультация специалиста','Консультація фахівця','2016-10-28 18:40:51','2016-10-29 18:51:43','ico_consult','1'),(6,NULL,19,26,0,'Новости Информация','Новини Інформація','2016-10-28 18:41:48','2016-10-29 18:51:44','ico_news','1'),(7,NULL,1,4,0,'Для врачей','Для лікарів','2016-10-28 18:42:21','2016-10-29 18:51:43','ico_doctors','1'),(8,4,28,29,1,'Педиатр','Педiатр','2016-10-28 18:46:08','2016-10-29 18:51:44','','1'),(9,4,30,31,1,'Эндокринолог','Ендокринолог','2016-10-28 18:46:46','2016-10-29 18:51:44','','1'),(10,14,9,10,2,'Окулист','Окуліст','2016-10-28 18:47:17','2016-10-29 18:51:43','','1'),(11,13,13,14,2,'Гастроэнтеролог','Гастроентеролог','2016-10-28 18:48:08','2016-10-29 18:51:43','','1'),(12,13,15,16,2,'Дерматолог','Дерматолог','2016-10-28 18:48:44','2016-10-29 18:51:43','','1'),(13,5,12,17,1,'Детский','Дитячий','2016-10-28 18:49:38','2016-10-29 18:51:43','','1'),(14,5,6,11,1,'Взрослый','Дорослий','2016-10-28 18:50:51','2016-10-29 18:51:43','','1'),(15,14,7,8,2,'Аллерголог','Алерголог','2016-10-28 18:51:35','2016-10-29 18:51:43','','1'),(16,7,2,3,1,'Новости','Новини','2016-10-28 18:53:11','2016-10-29 18:51:43','','1'),(17,6,22,23,1,'Фото','Фото','2016-10-29 18:48:34','2016-10-29 18:51:44',NULL,'1'),(20,6,20,21,1,'Статьи','Статті','2016-10-29 18:50:25','2016-10-29 18:51:44',NULL,'1'),(21,6,24,25,1,'Видео','Відео','2016-10-29 18:51:23','2016-10-29 18:51:44',NULL,'1');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description_ru` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description_ua` longtext COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `address_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `qualify_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `specialty_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `doctors_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'Изольда Петровна','Изольда Петровна','admin@admin.com','/tmp/phpa8FetX','<p>цвфвфцвф</p>\r\n','<p>фцвфцвфцв</p>\r\n',1,1,6,1,'2016-10-30 13:24:17','2016-10-30 13:24:17',1);
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emails` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emails_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'Педиатр','Педiатр','2016-10-16 15:36:21','2016-10-16 15:36:21'),(2,'Эндокринолог','Ендокринолог','2016-10-26 17:26:51','2016-10-26 17:26:51'),(3,'Окулист','Окуліст','2016-10-26 17:27:19','2016-10-26 17:27:19'),(4,'Гастроэнтеролог','Гастроентеролог','2016-10-26 17:28:33','2016-10-26 17:28:33'),(5,'Дерматолог','Дерматолог','2016-10-26 17:29:23','2016-10-26 17:29:23'),(6,'Аллерголог','Алерголог','2016-10-26 17:29:52','2016-10-26 17:29:52'),(7,'Невролог','Невролог','2016-10-26 17:31:09','2016-10-26 17:31:09');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_o_d_e_l_s`
--

DROP TABLE IF EXISTS `m_o_d_e_l_s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `m_o_d_e_l_s` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `lft` int(11) DEFAULT NULL,
  `rgt` int(11) DEFAULT NULL,
  `depth` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `m_o_d_e_l_s_parent_id_index` (`parent_id`),
  KEY `m_o_d_e_l_s_lft_index` (`lft`),
  KEY `m_o_d_e_l_s_rgt_index` (`rgt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_o_d_e_l_s`
--

LOCK TABLES `m_o_d_e_l_s` WRITE;
/*!40000 ALTER TABLE `m_o_d_e_l_s` DISABLE KEYS */;
/*!40000 ALTER TABLE `m_o_d_e_l_s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'Главная','Головна','/',1,1,NULL,'2016-10-26 17:18:10',''),(2,'О клинике','Про клініку','/about-clinic',3,1,NULL,'2016-10-26 17:18:06','item-about'),(3,'Услуги','Послуги','/service',2,1,NULL,'2016-10-26 17:18:10','item-service'),(4,'Консультация','Консультація','/consultation',4,1,NULL,'2016-10-26 15:29:26','item-consult'),(5,'Расписание','Розклад','/schedule',5,1,NULL,'2016-10-26 15:29:52','item-table'),(6,'Цены','Ціни','/prices',6,1,NULL,NULL,''),(7,'Новости','Новини','/news',7,1,NULL,'2016-10-26 15:30:23','item-news'),(8,'Для врачей','Для лікарів','/for-doctors',9,1,NULL,'2016-10-26 17:11:09','item-doctors'),(9,'Контакты','Контакти','/contacts',10,1,NULL,'2016-10-26 17:09:54','item-contacts'),(10,'Карта','Мапа','/map',8,1,NULL,'2016-10-26 17:11:09','item-maps');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_07_28_172111_create_menus_table',2),(4,'2016_07_28_220745_create_reviews_table',2),(5,'2016_10_13_175125_create_roles_table',3),(6,'2016_10_13_175609_create_user_role_table',4),(10,'2016_10_16_150720_create_addresses_table',5),(11,'2016_10_16_150952_create_jobs_table',5),(12,'2016_10_16_145928_create_doctors_table',6),(13,'2016_10_16_150040_create_specialties_table',7),(14,'2016_10_16_150122_create_qualifies_table',7),(15,'2016_10_26_182329_add_icon_to_menu',8),(18,'2016_10_26_194154_create_services_table',9),(19,'2016_10_27_184633_create_m_o_d_e_l_s_table',10),(20,'2016_10_26_191640_create_categories_table',11),(23,'2016_10_26_191658_create_news_table',12),(27,'2016_10_28_185846_create_vacancies_table',13),(30,'2016_10_28_192526_create_carousels_table',14),(31,'2016_10_28_204409_create_phones_table',15),(32,'2016_10_28_211129_create_emails_table',16),(33,'2016_10_28_231809_create_schedules_table',17),(34,'2016_10_29_141024_add_icon_to_category',17),(37,'2016_10_29_174548_add_home_to_category',18),(38,'2016_10_29_214341_add_default_icon_to_catagory',18),(39,'2016_10_30_145317_add_doctor_to_news',19),(40,'2016_10_30_150236_set_nullable_lat_lng_addresses',20),(41,'2016_10_30_151449_add_specialty_id_to_doctors',21),(42,'2016_10_30_162632_add_is_home_to_news',22);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  `text_ru` text COLLATE utf8_unicode_ci NOT NULL,
  `text_ua` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `main_image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gallery` longtext COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `is_home` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (69,'Harum et.','Molestiae tempore et.',NULL,NULL,1,'Fugiat id animi sapiente sapiente corporis. Molestiae perferendis officiis saepe qui. Recusandae repudiandae odit consectetur sit. Aperiam cupiditate omnis hic rem odit enim odit.\n\nMolestiae doloremque dolorem possimus aut. Qui nihil animi quas occaecati commodi cum. Quam non sit alias.\n\nQuo excepturi ipsam error porro aspernatur dolor. Delectus est unde quo sunt nostrum voluptas et. Dolor totam sit dolore sit vitae asperiores. Modi ut voluptatem officiis aliquid quidem laborum.\n\nDucimus rerum facilis beatae molestiae molestiae voluptates voluptatibus minus. Consequatur eaque vitae ut pariatur est.\n\nHic quos sequi quo explicabo culpa. Iste molestias est eos sequi sit ut nam. Vel qui temporibus et nihil sed ut.\n\nEt ut iure provident autem. Et et repellat qui earum. Dicta iusto omnis aut ut et. Vel in rerum amet dolor sit ut.','Doloremque ducimus illum autem voluptatum quo. Vel earum magni sint vel dicta tempore voluptatem quasi. Accusantium mollitia provident fugit ut autem.\n\nEst iure deleniti reiciendis molestiae. Voluptas est quis ea voluptatibus dolor dolorem. Vel quam rerum qui id consectetur fugiat et. Suscipit illo est magnam dolorem.\n\nNemo qui at neque fuga voluptatem. Consequatur quasi consequatur natus architecto. Incidunt et ea earum et voluptas.\n\nRepellendus esse earum reiciendis officia quis voluptates. Rerum culpa accusantium repudiandae expedita. Aliquid rerum culpa nemo aperiam.\n\nEt ullam laborum sint explicabo sapiente tempore mollitia aut. Qui reiciendis consequatur error neque aut assumenda repellendus quis. Aut eos vel eos minus et sunt veritatis labore.\n\nBlanditiis non perferendis dolore minima iure. Et aut explicabo distinctio sunt. Accusamus eligendi iste perspiciatis qui occaecati consequatur. Laborum rem possimus temporibus laboriosam.','/images/uploads/news/detail/dad50622177aa97f9777b17dc3730942.jpg','/images/uploads/news/detail/4c6e3d5a9f47d955008d384d2be8bb18.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/af76fa477c9190cb3a7580006b4b0922.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/4aec5b2ee6d6bde9cafc69b4d5910647.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/4e3d534a3ec865779c2664cfdc8a07fe.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/d7dd3b39beab19fd27ffb404bb8b8eb0.jpg\"]',20,'2016-10-30 13:57:35','2016-10-30 13:57:35',1,1),(70,'Assumenda architecto unde aut.','Et voluptatem et.',NULL,NULL,1,'Et consequatur alias temporibus quibusdam mollitia iste eos. Voluptates nesciunt quas possimus qui placeat. Ut quo nobis voluptas sint aliquam aut.\n\nQuaerat id dolores sunt magni modi aliquam quia quia. Deleniti dolor ullam voluptas. A et ut at illum. Dolorem id sit voluptas eum. Est facere neque repellendus inventore voluptates nihil.\n\nPariatur hic aut repellat iste qui. Et quibusdam ut eos dolore reprehenderit reiciendis nihil. Rem nemo expedita possimus eius saepe facere animi. Temporibus tempora deserunt aut dolores ut quaerat earum dolor. Molestiae magni aut quis est.\n\nTotam repellendus nemo sapiente distinctio nihil sint. Ea consectetur suscipit adipisci provident in. Odit dignissimos quia sit repellat consequatur.\n\nDeleniti eum dolor exercitationem sapiente eos atque quidem. Est voluptatem aspernatur ut cumque.\n\nRerum tempora suscipit voluptatibus sint officia ut incidunt rem. Numquam vitae rerum rerum eos tempora. Dicta similique reiciendis velit harum doloremque iusto. Qui ut odit architecto placeat quas.','Et sed debitis ex consequuntur placeat quis officia in. Molestias saepe quidem aut hic sequi et ut. Rerum quidem sit aut beatae voluptas sit.\n\nRecusandae corporis nobis quam ullam voluptatem dolore impedit. Consequuntur itaque dolores reprehenderit repudiandae aspernatur nihil sit qui. Qui quis dolorem et incidunt. Est qui non magni accusantium unde explicabo.\n\nCumque est recusandae aut sit molestias sed possimus ut. Veniam eligendi cupiditate veritatis dolore nisi. Deserunt aut et omnis omnis eius consequatur eos. Magnam tempore earum ipsum id omnis rem aut et.\n\nFugit animi harum quia ut adipisci alias temporibus. Eos sint aliquid vitae vero est error at tempora. Velit nulla pariatur quae iste.\n\nSint itaque ea quis eos aut quisquam. Quasi est dolores voluptatibus repellendus omnis aut suscipit dolorem. Ducimus qui ut numquam cupiditate ratione aperiam nam laborum.\n\nIn laboriosam voluptatibus accusantium. Expedita qui voluptas eius id. Reiciendis velit quo id nostrum.','/images/uploads/news/detail/dbee211a1ce2cd263fb9337ab2073fdd.jpg','/images/uploads/news/detail/6feb74e85ebc8a5747a3aac65103c53f.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a34676882e2b90b0456cc3db015d2098.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/60147c55fc9476126d0efb0b46ccdf2d.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/113b236980612fea571dbf4c626b4488.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f24c856a3c66d2adde3ad5f2d0b9d655.jpg\"]',17,'2016-10-30 13:57:36','2016-10-30 13:57:36',1,1),(71,'Assumenda rerum quia aperiam.','Sed earum optio.',NULL,NULL,1,'Officiis rerum voluptatum perspiciatis pariatur harum excepturi impedit. Omnis iure maiores non. Molestiae error quo excepturi quo quas dicta dignissimos nobis.\n\nLibero molestiae est ad voluptatum. Velit totam harum ut est ut deleniti temporibus. Laboriosam nihil deleniti et dolor.\n\nFugit voluptatum qui facilis veniam debitis. Eaque a at alias quidem placeat. Esse sequi voluptas dolorum debitis porro numquam quia.\n\nCorporis blanditiis consequatur dolor dignissimos in velit laborum ullam. Odit aliquid voluptatibus eos est blanditiis. Voluptate autem magni sunt. Tempore accusantium dignissimos est odit deleniti est voluptatem sed.\n\nExercitationem hic molestiae labore eos ut. Distinctio consectetur voluptatem dolor ipsa error necessitatibus ut. Mollitia et alias eius tempora. Est saepe voluptatem temporibus qui.\n\nRerum consectetur non ipsum consequuntur vitae aut soluta reiciendis. Ut ut consequatur sed perspiciatis. Nulla beatae sapiente suscipit sunt aut totam quae delectus. Et minima quia saepe labore odit tempore.','Qui modi quisquam dicta vitae. Et magni officia voluptatum et. Laborum reprehenderit incidunt voluptatem numquam fugit totam alias.\n\nAmet et nisi laborum maxime. Modi eum voluptatibus dolorem aut praesentium eligendi et totam. Quam et enim cumque quis sit placeat rerum reiciendis. Placeat in rerum quos facere sit rerum.\n\nUt accusantium dolores quia est. Aut quo ad cupiditate quia voluptatem. Molestias optio dignissimos et eum exercitationem. Ut sed consectetur enim.\n\nDucimus aperiam sed consequatur rem. Qui nobis necessitatibus quidem eveniet. Sit odit est nulla dolores accusantium architecto et. Omnis molestias pariatur consectetur voluptatem deleniti odio.\n\nNecessitatibus dignissimos laboriosam sit et aperiam. Nihil ea qui voluptatem unde laboriosam iste. Molestiae debitis quod est eveniet voluptate eveniet.\n\nEx quo aut ratione atque eius. Deleniti fugit molestiae animi consequatur quod doloremque dignissimos voluptatem. Animi rerum voluptas voluptatem adipisci. Quia illo praesentium enim culpa.','/images/uploads/news/detail/5e5fd1cf5772c72e074b11db62fff1ed.jpg','/images/uploads/news/detail/bd2e3773bf3e43924766bdf847697b1a.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ab8bf85cac7478c9c7027695d92e167a.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/7d400f6c6640644372fd924efe65cf5f.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a09558a93b188a68590a2ff88acf589e.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/e1f473351267cde315858c7726417d2a.jpg\"]',17,'2016-10-30 13:57:36','2016-10-30 13:57:36',1,1),(72,'Impedit impedit.','Sed et sint nesciunt.',NULL,NULL,1,'Asperiores ut aliquid facilis pariatur natus quidem. Alias eos deleniti nulla itaque consequatur. Pariatur voluptates vel omnis architecto. Excepturi veniam deleniti dignissimos deserunt non explicabo.\n\nDucimus magni nesciunt voluptatem. Magni dolorum omnis ab sint enim placeat. Quis mollitia nihil consequatur et nobis et. Assumenda nostrum enim perferendis similique velit eum rerum.\n\nSapiente architecto consequatur ea rerum sint est. Nulla blanditiis exercitationem numquam iure ea ipsum voluptas. Impedit eos cupiditate vel.\n\nAut odit est architecto ab consequatur voluptatibus. Assumenda et qui corrupti magni perspiciatis voluptas laboriosam. Nesciunt officiis laboriosam cumque aut iure.\n\nCorrupti pariatur at iste voluptatem et aliquam. Nesciunt corrupti perspiciatis voluptatum ratione nulla. Quod unde et in voluptatibus aut accusamus.\n\nA eos in ducimus ad placeat. Deserunt et nihil quam voluptatem qui id quasi. Error sit aut quisquam possimus est rerum exercitationem. Voluptas hic consectetur consequatur voluptatibus.','Expedita accusamus labore consequatur explicabo ex sint. Qui facere accusamus voluptas nulla. Doloremque deserunt perferendis voluptas iste. Facilis illo in a.\n\nEnim quod ipsa amet quod iste iusto alias officia. Alias ipsam ipsum recusandae libero sed. Rerum accusantium eius autem deleniti voluptatem. Aliquam asperiores sit est.\n\nQuo eos impedit harum asperiores. Nihil modi ex est suscipit debitis fuga quo. Deserunt corrupti commodi recusandae aut. Itaque voluptas eos in aliquam nihil.\n\nVelit quo laborum et ut distinctio quis. Qui ipsa eius quos omnis impedit voluptas odit. Doloremque voluptas vel maiores deleniti.\n\nAut quos ut veritatis consequuntur minima. Et commodi optio dolor natus. Incidunt molestiae iusto illo laboriosam assumenda. Doloribus et voluptatem et delectus voluptatem aliquam harum.\n\nEaque neque vero incidunt sunt hic voluptates. Excepturi ut harum voluptatibus saepe sint eius. Non sit et optio nulla.','/images/uploads/news/detail/2ef8a74adeb0b5a6c9ccd3fa30c6d650.jpg','/images/uploads/news/detail/9a5e19197aa5ae276adda9de4361b6a6.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/37f7e6c9257e5f08442d82b02c26b1f8.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/c9817e3e1a1aa7698628e98dfa16d2f5.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f1e84f16123e03bf81e51fbd3c7445bc.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/292786874d692b4d1aa4081b33ba6874.jpg\"]',11,'2016-10-30 13:57:36','2016-10-30 13:57:36',1,1),(73,'Nisi fuga eveniet error.','Est aut sint aut.',NULL,NULL,1,'Repellendus facilis vero numquam perspiciatis ut. Eius quibusdam velit vitae quia saepe et. Adipisci fugiat deleniti dolore dicta. Dolores fuga dolorum ut consectetur asperiores soluta.\n\nEa illum autem vel omnis. Quia repellendus at quaerat neque.\n\nConsequuntur quis necessitatibus modi voluptatibus. Placeat excepturi eos et autem suscipit impedit et. Minus quod quo quidem voluptatem dolores. Enim repellendus quidem sunt dignissimos.\n\nEt perferendis quos at ea error quis reiciendis. Et alias laudantium consectetur suscipit blanditiis. Assumenda dolore aut reprehenderit maxime.\n\nImpedit quasi voluptatibus exercitationem et autem. Sit ducimus nam voluptas vel sit est sapiente. Dolorem animi et ex et dolor est voluptatem.\n\nIusto autem eum quia. Quisquam dolor illo sed voluptas magnam. Dolores unde repudiandae ut expedita. Maiores illo quibusdam voluptatem id neque temporibus maiores.','Magni qui itaque rerum sint quis. At neque facere eos voluptas commodi. Odit accusantium vero ut quo dolorem non. Voluptas qui ipsum ex delectus provident.\n\nEaque ea quidem officiis voluptatem. Nemo fuga recusandae est ut harum velit quidem. Neque aut praesentium et voluptas.\n\nConsequuntur placeat ad aut id. Maxime fuga deleniti laboriosam nulla minus id deleniti. Voluptatem vitae laborum nemo ea rerum. Distinctio minima voluptate eveniet quasi.\n\nQuas optio facere aut dolor. Quo est officiis porro quam. Deleniti illum aspernatur aliquam ipsa quaerat aperiam autem rerum.\n\nQui culpa minima delectus tempore. Sint qui esse autem et quia voluptatem. Dolorem et harum cumque similique hic quae.\n\nQui expedita recusandae eos unde. Maxime nemo voluptas aut voluptatem dolores nulla. Sit consequatur repellendus dolore delectus. Sunt ipsam dolores quasi repellat maxime.','/images/uploads/news/detail/4e76c7e7a07872a8b4c1395972d7c26f.jpg','/images/uploads/news/detail/ef0c928bd475617df65eb2090ca62af5.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/1c10109ed63748dbb759f7690d577c82.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/fbb09c7cad1b38f26ae1cdc49570623b.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/0ec414abc09796e4ef03df59798dbe98.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/804b702c58428e9b8efdac1bc0584dc8.jpg\"]',9,'2016-10-30 13:57:36','2016-10-30 13:57:36',1,1),(74,'Rerum delectus iure earum.','Rem aut quos.',NULL,NULL,1,'Dolores sed distinctio quo aspernatur. Porro atque voluptas veritatis quisquam. Id quis eligendi rerum ratione voluptatibus nulla.\n\nOptio est expedita non repellat non. Mollitia ut quis iure qui qui ab aperiam. Exercitationem dolor vitae qui.\n\nQuia ipsa dolorem quaerat nostrum. Autem esse dicta culpa fugiat necessitatibus odio amet. Cumque in animi velit possimus. Est quis et vitae sequi quo dolores vitae.\n\nIn consequuntur et voluptatem maxime quia aut qui. Non iste inventore laboriosam tempore laudantium odit cupiditate beatae. Pariatur dolorum esse laboriosam totam. Labore fugit consectetur molestiae.\n\nVeritatis sequi voluptatem quia eaque. Ab omnis quisquam possimus fugiat nihil ad ad. Iusto dolor voluptas quam quia consequatur quia dolore.\n\nNesciunt beatae non et eveniet. Suscipit deserunt ullam qui libero modi deleniti quas. Asperiores laboriosam voluptatem accusamus.','Quia similique nesciunt qui provident. Occaecati in asperiores quia voluptas. Expedita fugit quaerat ut aut a molestiae. Totam earum esse reprehenderit repellendus ab culpa.\n\nEa aut similique unde eligendi quod voluptatem impedit ut. Magni totam nam sint libero aut cum. Omnis iusto voluptatibus non amet. Et repellendus temporibus id rerum.\n\nAut error aspernatur quidem. Ad et id cumque quo occaecati. A nam voluptas soluta delectus praesentium cum. Aperiam et et est ea.\n\nNon et commodi sunt aspernatur repellendus rerum fugit ipsa. Quo iure doloribus aut ipsa deleniti impedit. Quia distinctio sed odio molestiae incidunt facilis eum est. Autem eos earum necessitatibus omnis voluptatum.\n\nEsse ea ut consequatur consequatur. Quibusdam soluta iusto nihil. Provident architecto sit dolor cupiditate temporibus eveniet neque.\n\nEst aliquam laborum culpa veniam ut dolores sed. Aut impedit nobis saepe dignissimos. Consequatur consequuntur eligendi deserunt ratione quaerat.','/images/uploads/news/detail/31ba42f55b0d25ef03f10e06edb2df92.jpg','/images/uploads/news/detail/35681ceadc4aea7aaad9b7b7f46a785f.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/b515a09f2caab4ef6994443c8ee36804.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/d97edfa79c6198842ed0972dd6be0f27.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/e91c3bc2bc4d9cdd7336fdde7713726d.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/4a9bdd5b7b9264cf5886d5b3715ea0f8.jpg\"]',16,'2016-10-30 13:57:36','2016-10-30 13:57:36',1,1),(75,'Cumque cumque dolores vel.','Aut reprehenderit et.',NULL,NULL,1,'Ut maiores itaque eos qui dolorem. Eligendi voluptas aspernatur at. Dolorum quae et et. Autem numquam maiores quia distinctio ut voluptatum alias excepturi.\n\nIpsa dicta quasi occaecati iure consequatur pariatur. Saepe velit autem ut quia fuga. Et ipsa et a impedit voluptates. Architecto dolorem mollitia alias soluta corrupti blanditiis ratione. Dicta recusandae voluptatem ullam ut magni.\n\nRatione incidunt amet nisi aperiam ad. Impedit tempora autem ut fugit qui facilis. Quia explicabo laboriosam voluptatem non earum aspernatur.\n\nEt numquam quo quia corporis minus. Exercitationem et accusantium nisi quia neque delectus. Aliquam ut assumenda voluptas suscipit corporis itaque voluptas soluta. Nulla ipsam possimus atque eum totam in id.\n\nSaepe perferendis rerum est reiciendis qui. Quas laborum eum voluptates dignissimos. Expedita accusantium suscipit ut quam. Quis distinctio dolore ducimus eum dolores.\n\nArchitecto et mollitia sapiente et adipisci quasi temporibus nisi. Molestiae sapiente dolor ut occaecati. Commodi ipsa voluptatem sit ea nihil ipsa aspernatur.','Illum voluptas excepturi qui rerum. Pariatur qui explicabo consequatur est. Amet reiciendis excepturi inventore odio quidem voluptatem reiciendis tempore.\n\nIn quae tempore autem molestias saepe. Consequatur eveniet et illo id voluptates repellat ut. Amet nulla sunt nihil eos quos ut. Esse officiis vel minus porro. Dolores delectus voluptatem inventore consectetur aut sit aliquam.\n\nQui aut sit optio quis quae quasi ipsum numquam. Aut expedita suscipit distinctio tenetur quia quasi. Ut aut ea omnis. Molestiae nihil et laudantium dolor tempora esse.\n\nRerum neque hic necessitatibus omnis excepturi. Vitae enim quidem facilis. Eum pariatur eius est qui et nostrum voluptatum.\n\nQuibusdam ut impedit porro quas quam ut. Sed dolorum consequatur voluptas voluptas. Qui est facilis maiores dolor consequuntur aut.\n\nSunt est rerum placeat. Consequuntur quas omnis voluptate et qui. Assumenda error provident nam beatae. Dolor voluptas aspernatur quibusdam maxime.','/images/uploads/news/detail/319bd0c9d7346583c8702d408fbb2870.jpg','/images/uploads/news/detail/bd637fd7ad5d3bdf3c1e782fedf930cb.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/8d81f7a6a4afb4977bf88669e52e9e14.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ec49e626ff4292ce11c2351b14260230.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/78fdbc872aaf45079ec3af1323d0c9c7.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a548536e608f7d6d4687ddae7e8a079c.jpg\"]',20,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(76,'Consectetur assumenda odio.','Nobis deserunt.',NULL,NULL,1,'Sed sit provident necessitatibus autem impedit consequatur. Praesentium neque ea recusandae quisquam ipsum ea et. Quod et dolore ut voluptatem culpa et. Non ad ut provident odio aut praesentium.\n\nEst quia et quod vel amet animi facilis. Est ducimus adipisci temporibus repellat aut. Sint autem quos quia quia et quos laudantium voluptatem. Assumenda culpa illo dolorum sint voluptatem magnam impedit.\n\nAut consequuntur provident animi saepe. Dolore ut sit fuga deserunt nisi perferendis.\n\nHarum suscipit omnis voluptas perspiciatis libero dignissimos. Et eveniet eos dignissimos amet ut sit optio. Nisi nihil quia eius. Eum architecto corporis repellendus nam sint.\n\nInventore et non sapiente sit dolorem quae. Iure sunt mollitia ut. Eligendi sed modi minima odit ut sapiente.\n\nEaque aut est officia ducimus. Sunt distinctio animi unde explicabo et vitae. Quia fugiat ut tempore sit repellat. Voluptas quia qui dolorem temporibus cum commodi non.','Nihil beatae laudantium aut blanditiis. Occaecati dolor impedit rerum et rem. Fugiat ut sunt et aliquam voluptas porro.\n\nUt iste commodi dicta eveniet non nulla sed. Quia et perferendis corporis sint. Nulla et et pariatur. Maxime qui commodi dolore beatae.\n\nEst sed similique recusandae vitae voluptate et. Unde et rerum ea est fuga explicabo asperiores. Esse nihil quas maxime aut dolorum aut unde. Dignissimos sapiente voluptas nihil suscipit nobis.\n\nEt corporis illum earum quo voluptatem cumque dicta. Maiores id repellendus dolorem sunt omnis. Animi sit et dignissimos. Iusto non debitis perferendis saepe illo aut beatae.\n\nQuasi vitae dolor error qui. Nemo explicabo sunt sed. Consequatur et eligendi est quo aspernatur commodi quia.\n\nSequi vel ad corrupti vitae mollitia. Velit explicabo aut quibusdam ipsum id consequatur aut quod. Et ducimus sunt dolores est qui consequatur.','/images/uploads/news/detail/2b2dff1585ae554ab2ef172f385725a2.jpg','/images/uploads/news/detail/8d58116a56907fcb1b962fb6f5d956fa.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/32ebb85253ea8b1d0988b3bde5f6eeb3.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/e46cb706d99ce8de848332d2a9c95daa.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/4c93c416c8e17c4173aadd6600405784.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/97654333f7f12c184e96efde57aee125.jpg\"]',21,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(77,'Qui fugit voluptatem.','Ut repudiandae sed et.',NULL,NULL,1,'Voluptate distinctio tenetur ratione temporibus et ut adipisci. Id sunt neque omnis unde eveniet. Qui aut odio voluptatem possimus. Et aliquid voluptate ex autem est.\n\nVelit repellat suscipit iste hic minima. Temporibus numquam magni qui illum consequatur soluta. Dolores quia provident accusantium odio est eum voluptate. Neque aut eos enim odio illum.\n\nEt architecto et officiis asperiores deleniti eos. Est possimus voluptates non corporis quia est. Rerum voluptatibus rem quia.\n\nAmet non fugiat porro recusandae illo sunt. Voluptates nostrum sit blanditiis temporibus libero omnis sed. Quia at repudiandae et labore est. Saepe et aspernatur tempora dolores.\n\nHarum similique quibusdam ipsa amet fugiat qui ea. Necessitatibus et quasi facilis magni. Tenetur amet officiis ut vitae aliquid tempora sed.\n\nAut veritatis vel repellendus recusandae non facere tempore. Consequatur provident aut neque explicabo qui sed dolore. Delectus a voluptatibus enim et et.','Velit aut consectetur numquam omnis consequatur nobis rem voluptas. Assumenda qui rerum fugiat modi in sit. Culpa eius et sed voluptates quo nemo dolor pariatur. Amet sunt dignissimos et dolorum.\n\nOptio laudantium animi odio voluptas non et. Qui nihil vitae et qui consequuntur et quod similique. Accusantium quod enim voluptatem aut quas sed recusandae quo. Fuga id possimus accusamus fugiat.\n\nEt itaque et labore autem accusantium voluptatem nisi assumenda. Quis earum in architecto ut. Et laudantium repellat qui.\n\nDoloremque eum officia neque porro numquam voluptatem reiciendis placeat. Possimus omnis alias architecto. Atque sit soluta laboriosam harum.\n\nEius dolores minus minima vel alias exercitationem. Alias ipsa saepe vitae sunt quos ut.\n\nSunt accusamus aperiam repellendus sunt. Dolorum ea aspernatur earum accusantium saepe sed ut. Ipsa quas consequatur consequatur unde laboriosam. Ut sunt qui distinctio. Consectetur maiores repudiandae dolore maxime.','/images/uploads/news/detail/ed8ccd5feae930158a2be7591e611970.jpg','/images/uploads/news/detail/33f9ebdef8963027bf3d5cad0f8df2a4.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f040ef9174245c4aad06307b9a1763bf.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/937605e8ffeceff0f686c2710cc66464.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/21b544156e45dc56d92b7e6a29c26fd9.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f8f779dec3d93002eec0a61aff15a4cd.jpg\"]',12,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(78,'Laboriosam iste quia.','Voluptatem itaque eos officiis.',NULL,NULL,1,'Tempora fuga eius error odit. Molestias et molestiae voluptatem eos ut. Aut expedita voluptate earum saepe illo quam a. Mollitia perspiciatis est dolores dolorem ut fugit.\n\nEum alias suscipit enim excepturi et sed deleniti praesentium. Voluptas ut nihil et.\n\nInventore ea ut nihil quia quia. Tempora qui et rerum corrupti doloribus est qui. Ipsam vero nesciunt consequatur in. Dolorem ad doloribus quis asperiores repellat nobis facere.\n\nRepellendus aperiam nihil sed. Dolorem aut veniam animi ipsa fugit praesentium qui. Qui quae asperiores natus. Debitis sed soluta et hic voluptatem consequatur.\n\nLaborum deserunt velit aut praesentium dolor. Voluptas facere voluptatum et eum. Voluptates natus qui similique voluptas.\n\nFacilis officiis minima omnis velit recusandae sit. Placeat expedita sit vel quidem ab maxime accusamus.','Sit rerum aut pariatur magni quasi quibusdam corrupti accusantium. Aliquid voluptates architecto optio dolore qui ipsa. Impedit et pariatur ut vero quam magnam adipisci.\n\nAssumenda temporibus laudantium dolor officiis asperiores ad. Repellat beatae id et amet velit dolor. Hic amet magnam voluptatem repellendus nisi sit. Animi architecto voluptatibus maxime sed reiciendis.\n\nLaborum voluptatem exercitationem mollitia fugit non aut omnis quae. Est odit rerum cupiditate quibusdam. Ea possimus fugit nulla sed. Quibusdam molestiae eaque optio tenetur exercitationem ea mollitia.\n\nQuas voluptates voluptatum impedit rerum. Aut minima doloremque ipsam. Quia molestias necessitatibus totam autem.\n\nSaepe eveniet asperiores molestiae deleniti nihil voluptas. Delectus adipisci odio quibusdam officia voluptate qui consequuntur exercitationem. Cumque perspiciatis quis reprehenderit praesentium sit. Et aliquam provident sit voluptas deleniti.\n\nAperiam inventore impedit necessitatibus. Earum nobis laboriosam molestiae qui tenetur officiis. Doloribus qui ducimus sequi eveniet et et rerum. Est qui ipsum impedit magni.','/images/uploads/news/detail/8fe5cbf10a344bbe742432bfbd3f1c87.jpg','/images/uploads/news/detail/c74bf3614ba52c4d9d5c38b095c7ba46.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/878748eea47e89ea366a45de2735e105.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/58e6b34d2590d20690ae1e9e094d54fd.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/4a24bc2d7714debc5b760ecbb82116cc.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/bb341412d57fd3171302346548190e2e.jpg\"]',16,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(79,'Aliquam quia nemo molestiae.','Rerum provident.',NULL,NULL,1,'Qui hic sequi enim ut non. Temporibus quos est qui dolor laudantium est voluptas. Aliquam delectus quam perferendis dolores aut ipsa deleniti alias. Saepe maxime maiores id pariatur modi et est.\n\nVoluptas ea est ipsa nam. Eius quia dolor occaecati voluptatem sunt provident. Dolorem pariatur eaque et ut. Ipsum nisi libero aperiam.\n\nPorro repellat dolor impedit laborum. Aspernatur non voluptas id doloremque sed. Quam nobis fuga voluptas.\n\nVeritatis reiciendis dolor molestias sed recusandae perferendis temporibus. Architecto provident saepe aut officiis at id quis. Mollitia fugiat aut qui. Eaque consequuntur nemo autem ad et possimus.\n\nFuga nostrum ut aut sint consequatur qui. Reiciendis porro exercitationem voluptas ut placeat exercitationem. Reiciendis enim illum harum suscipit ut ad esse fugit.\n\nExercitationem quod eos provident laudantium et illum libero quo. Ut alias provident sit. Architecto velit ut explicabo explicabo laudantium nesciunt.','Consequatur voluptates in voluptate suscipit laborum dolores. Porro consequatur cum ad ut id adipisci voluptatum. A aut et voluptatem deleniti deserunt nisi ut.\n\nEst earum vitae eaque quo. Quibusdam itaque molestiae dolores consequuntur ut.\n\nEos sed voluptate reprehenderit. Quia quia aut esse nulla pariatur. Aliquid est nam voluptatem voluptatem.\n\nTemporibus consectetur odio quia vero sit quia. Molestiae laborum fuga eius corporis sit dolorem. Ipsam eos amet laboriosam quod.\n\nEa qui molestiae repellendus voluptates enim. Necessitatibus earum quae a veniam non laborum est. Qui repellat similique autem ut voluptas temporibus aut. Vitae eos dicta quam aperiam nihil.\n\nQuis perspiciatis unde qui illum blanditiis. At iure quam debitis quod. Voluptas est nostrum consequatur molestiae nesciunt distinctio aut. Odit quibusdam facilis omnis tenetur modi numquam.','/images/uploads/news/detail/ac5cd99bf8574a5c45e5a34d87acedca.jpg','/images/uploads/news/detail/fd50724f94f6ccf3b53ea38223eebb44.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/3b2fa8a5b398a7e3e30b1323c9ce47cc.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/c4a95d8d95343c5e977f3595f4c33c25.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/96c1097c0ce1ebaff348ce2128d99700.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/e5385bfc06cf354e1aa7b88d27028106.jpg\"]',20,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(80,'Corporis ipsam voluptatem.','Doloribus natus.',NULL,NULL,1,'Et tempora ut repellendus nisi. Et maxime dolorem est et consequatur. Iusto voluptatem eveniet eius eius culpa.\n\nDolor non sint harum doloremque quos cumque nam. Nesciunt nihil inventore perferendis rerum placeat sed. Ut laudantium sapiente rem itaque assumenda aperiam.\n\nSapiente ut dolorem non consequuntur earum recusandae. Et aut sit qui nam consequuntur consequatur facere. Illo in magnam porro illo.\n\nVoluptatem iusto cum nobis qui. Voluptatibus velit eos eaque iste tempore. Incidunt laboriosam eos veritatis nostrum dignissimos velit corporis. Ea quos et alias quam et aliquam debitis.\n\nDeserunt dolorum accusamus itaque. Laudantium beatae necessitatibus aperiam et soluta tempore magnam. Harum omnis maxime necessitatibus dolor ducimus rerum veritatis. Saepe nobis aut id quos in mollitia.\n\nOmnis quia eum id blanditiis est. Ut animi qui aut nisi temporibus velit tenetur. Necessitatibus praesentium est architecto molestias.','Aut eligendi sint sed laboriosam porro. Nisi et rerum ipsam debitis neque qui. Veritatis praesentium alias repellat voluptas laboriosam saepe ea.\n\nDolor autem voluptate repudiandae numquam. Deleniti velit facere similique voluptatem ut qui commodi. Numquam sit facere a.\n\nNecessitatibus neque cupiditate dolor saepe at provident. Aut dolore quia sint dicta ipsa pariatur id. Nobis provident fugiat necessitatibus ad enim.\n\nAdipisci cum officia autem qui qui eveniet maiores. Sapiente illum laudantium quam maiores eum cupiditate. Vel adipisci magnam officia dignissimos sed ut laudantium.\n\nFacilis occaecati inventore tempore omnis nihil autem blanditiis. Ullam praesentium rerum omnis magni quisquam quas. Adipisci dolores modi ut consequatur rerum. Hic consequatur nostrum odit illum.\n\nPariatur optio dolor iusto sunt omnis. Doloribus rerum aliquid voluptas voluptas est. Velit dolores laborum similique iste qui. Non deleniti quia enim repellat. Iusto perferendis repudiandae modi velit nisi.','/images/uploads/news/detail/2dfeac2b3edb080e946d9060259ccfc0.jpg','/images/uploads/news/detail/6ca4e14b13c343f73742aa3ac9feba0b.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/fa211679399768b4a8bdf05ab57c4758.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/94553d2877e8225d9aa8c16658b3f536.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/73aa8a1b5e396e75501006351f5db8a7.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/5203fa13c398726d4555bb9a27485715.jpg\"]',16,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(81,'Veniam non sequi eius.','Qui autem recusandae qui repellat.',NULL,NULL,1,'Quia ad nihil sint corporis alias. Dolor repellat sit et laboriosam quod saepe. Excepturi iusto est rerum ut aut quia modi. Quis sunt consectetur reiciendis accusantium repellendus nobis.\n\nQuae ducimus a nam et aut. Tenetur corrupti vero architecto architecto impedit. Aliquam enim sed sed. Sint reiciendis consectetur et veniam eaque aut. Exercitationem sit distinctio qui non accusamus qui quo.\n\nAmet aspernatur voluptate temporibus doloremque sit. Excepturi blanditiis voluptatum voluptas quo. Voluptatem minus delectus sit voluptate non quaerat eos unde. Quia est et suscipit. Nihil voluptatibus repellendus aliquid aut harum.\n\nQui repellendus at illo et velit quasi odio dolores. Non eaque ab eaque ex sapiente quod. Et ex pariatur rerum nihil vel enim.\n\nHarum omnis commodi voluptatibus ut ex quia sint. Blanditiis impedit qui consequatur officiis ab impedit qui. Magnam voluptas error ratione fugiat omnis. Quidem et praesentium ut id voluptas corrupti iure. Animi repellat qui enim laborum id.\n\nMagni iusto voluptates unde blanditiis aliquid nobis officiis. Provident ut deleniti pariatur sed et inventore. Officiis voluptatibus nulla qui reiciendis enim.','Magni sed velit omnis quo quibusdam a. Dolores officiis explicabo corrupti qui voluptates omnis. Sequi voluptatem tenetur animi facilis et modi corporis rerum. Nesciunt eligendi dolores qui soluta.\n\nOdio ex alias sit odio. Quod voluptatem dolore aliquam est. A modi dolore esse iusto nihil quae cupiditate.\n\nNecessitatibus molestiae fugit ut laboriosam. Ex quia eos dolorem laborum. Recusandae ex culpa dolorum dolores. Quas quidem accusantium eos voluptatum ut natus sed.\n\nEt sit occaecati velit quaerat ab quisquam. Quisquam saepe saepe perspiciatis non qui voluptates. Sunt provident rerum deserunt ex. Repellat aliquid sit voluptate dolorem voluptatem vel enim.\n\nIusto voluptas eligendi unde ea eius iusto rem. Assumenda voluptatibus dignissimos quia. Rerum rerum id ad soluta voluptates aspernatur. Omnis rerum incidunt est ut eius in architecto.\n\nQui dolorem ut ullam eos illum. Temporibus nobis omnis dolores maiores et placeat. Necessitatibus hic nam cum sed. Adipisci ullam eveniet qui sed distinctio non.','/images/uploads/news/detail/8807369dd19cafcb71147f3d815a1d5e.jpg','/images/uploads/news/detail/42e32a709e8338b6aa87db1afbc1e323.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/1cd3abeba34423b273609bd5e8455317.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/27ada74ca924f84b8123648e1015fb1b.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/8c4f2b8dcc625572a477c3d854513e93.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/926da09c585f05d3d31eb0eff8bfa072.jpg\"]',11,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(82,'Illo facere inventore.','Ut harum impedit necessitatibus.',NULL,NULL,1,'Placeat ullam odit molestiae iure fuga nihil. Dolore voluptatum repudiandae quis dolor eius. Enim quasi exercitationem mollitia.\n\nCumque nesciunt officiis ipsam laboriosam. Consequatur eum accusantium minima possimus. Veniam commodi sit voluptas aut.\n\nTempora fugit veniam sed quia. Eveniet sed alias aspernatur pariatur. Hic aliquid omnis rerum ut nihil eos sunt. Eius earum ullam consequatur animi et est.\n\nFacilis sunt non vel corporis vitae adipisci quos. Iste iusto quam repellendus pariatur et ea.\n\nNostrum repellendus autem neque. Aliquam sed ea et tempore illum et recusandae. Perferendis dolorem et labore atque neque voluptas autem. Ex rerum necessitatibus vel exercitationem debitis saepe aliquam.\n\nEum laborum omnis quia aliquam officiis natus iste fuga. Omnis quae nostrum est omnis minus. Sunt beatae deleniti est sit eveniet. Repudiandae quidem ut ut praesentium eius.','Occaecati dolore eius nemo est illum veritatis et. Aut consequuntur quia et aut animi quos aliquam. Ut itaque beatae inventore consequatur fugiat nesciunt hic. Voluptas iusto est animi nisi quas. Laborum explicabo similique et voluptatem in tenetur quia porro.\n\nAd nobis mollitia magni et natus cumque. Consequatur modi laudantium deserunt magnam voluptatem quibusdam beatae doloribus. Est in magni libero esse.\n\nQui voluptatem modi distinctio vitae aut. Sit veniam et voluptas culpa blanditiis qui culpa delectus. Consequatur modi quod fugiat temporibus qui enim.\n\nDebitis iure quia et ratione est corrupti molestiae. Delectus consectetur in cupiditate rem distinctio dolor cum.\n\nAmet voluptas laborum quia laboriosam. Accusamus quia quia est consectetur veritatis recusandae. Harum molestiae at quo ut temporibus temporibus vel.\n\nTempora ex ipsa itaque et. Impedit ut nihil porro nemo laudantium nulla magnam officia. Id rem non eaque voluptatum atque. Ab placeat corrupti cumque ut doloribus earum iure sequi.','/images/uploads/news/detail/45f17e120d13d740e3b68ef67655e89b.jpg','/images/uploads/news/detail/b26861dcc0cb45fa29184d248fb4ad93.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/94c967f8a3a32ffe5dd414c259802803.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/873d043da34eaf5105232826c57c4ea7.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ee425c228f2d5363d9d0792f3a6f7dca.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/94e0554c5f47ebe295afcde739984284.jpg\"]',16,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(83,'Nihil exercitationem sint quod excepturi.','Repellendus id qui.',NULL,NULL,1,'Libero inventore expedita et in fugiat natus ratione. Porro numquam assumenda esse. Enim quisquam molestiae porro. Itaque et adipisci velit accusamus et dolorem quam. Dolore labore dolorem in nulla aut blanditiis.\n\nVoluptatibus provident magnam officia autem nemo consequatur. Aperiam exercitationem ut quia quas eum vero alias. Occaecati sed quia sequi rerum placeat praesentium. Odit et amet voluptas voluptatem laudantium.\n\nMagni aliquid ab repellat sed. Dolores voluptatem asperiores qui omnis ea. Aut quia sapiente illum cumque.\n\nIste quisquam quia vel fugiat eveniet. Laboriosam autem necessitatibus fugiat et velit odio rem. Provident temporibus quis dignissimos aut beatae sapiente.\n\nSit repellat hic neque aspernatur. Sed quia porro pariatur et necessitatibus deserunt odio. Et reiciendis quo cum ut qui.\n\nTenetur voluptas ipsam dolores aspernatur impedit quam. Architecto eos voluptate quo iusto id. Deleniti reprehenderit minima rerum ea a. Itaque consequatur ipsam rerum nulla.','Aut perspiciatis laborum enim eos id deleniti quo eum. Id cumque dolor tenetur praesentium rem eaque dolor. Et dolores vitae doloribus rerum. Dicta sed ad molestias sapiente.\n\nEt atque maiores atque suscipit. Est neque et molestias nesciunt veniam. Voluptatibus officia debitis qui.\n\nOmnis odio saepe eos saepe. Sequi dolor consectetur voluptatum quidem qui et vitae quibusdam. Quia recusandae quae pariatur facilis enim aliquid tempora.\n\nNecessitatibus laudantium atque laboriosam enim soluta. Tempora aliquid quaerat ex. Qui amet dolorem esse iste. Magni dolores laboriosam occaecati maiores omnis dolor omnis.\n\nQuo voluptatibus esse fugit quasi ullam. Ut inventore id voluptates maiores et suscipit officia. Odit et ea hic qui eos et. Ut totam molestiae ea nihil commodi.\n\nNon voluptatem neque velit odio. Optio asperiores mollitia est eum nam. Ratione culpa mollitia saepe minima.','/images/uploads/news/detail/be888ed07a81083a8997d858b59659a3.jpg','/images/uploads/news/detail/6754046d336e1a5dbba97cb7ca015e46.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/1d951e52ac2f7ae2f05dd118312daabc.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/76ff5ad4ecaff7006618799453783519.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/b7b1e3d65da4c5326cfdea315d6951b5.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/5a4b58972b6779a827669c97758bcce9.jpg\"]',11,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(84,'Placeat tempore expedita dicta.','Voluptatem aperiam consequatur voluptatibus.',NULL,NULL,1,'Consequatur neque deleniti repellat aut. Est voluptas autem eveniet consequatur. Sed id dolor dolores vero. Minima voluptatem totam excepturi excepturi quos.\n\nEum assumenda enim enim corrupti sunt ea. Numquam tempore corrupti quidem sit dolorem eius. Similique velit tempora dolorem velit reprehenderit dolorem amet. Ea ab dolor ab numquam aperiam laudantium. Culpa fugiat quia numquam praesentium.\n\nAut est aperiam sunt sint dicta exercitationem inventore. Aut distinctio ut et ut ea sit. Quia aut earum ipsa aspernatur.\n\nVoluptas eum pariatur rerum. Exercitationem ipsa cupiditate quibusdam provident perferendis. Voluptas illo et quia aliquid repellat velit dolorum totam. Dignissimos consequatur quia similique blanditiis possimus.\n\nRepellendus minima delectus illum. Et quas voluptates omnis veniam cum veniam et vel. Dolor quasi quibusdam recusandae et distinctio voluptas assumenda. Repudiandae iure natus officia aut adipisci.\n\nQuisquam eveniet dolores et soluta. Enim quis non saepe veritatis. Iste incidunt incidunt est iusto.','Et veritatis earum animi distinctio. Id ut nulla temporibus voluptatibus deserunt id. Amet dolor et est officia beatae quaerat. Nam quis sed aliquid vel assumenda.\n\nQui aliquid voluptate quibusdam omnis officia est voluptatem. Vero deserunt dicta earum ut sunt nihil est. Pariatur est dolore tempora consequatur iusto reiciendis. Ea perferendis atque rem in. Qui quia dignissimos maiores sit cupiditate reiciendis ullam.\n\nVeniam et qui qui eius doloribus ea. Voluptas voluptas laudantium ea voluptate. Et omnis non ea maiores non repellat officiis. Eos iusto vel eligendi quod.\n\nEt non vel repudiandae necessitatibus minus. Placeat quisquam quae eligendi in eos. Voluptatem repudiandae dolores sequi consequatur alias quia. Quia numquam ullam quo ut.\n\nIpsam vero ipsum ab. Consequatur aut aut ut. Sit nisi et id reiciendis alias vero est nostrum.\n\nMolestias ex earum aut labore doloremque. Neque provident in consequatur. Aperiam corrupti qui minima consectetur voluptatem nihil labore. Magni aut voluptate omnis et rerum iste exercitationem perspiciatis.','/images/uploads/news/detail/7744ac09157390c9b7eeaa8f02e24244.jpg','/images/uploads/news/detail/dcb474cfdf8f7c23012477e841dee04b.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/b9869c4a6893346ed288d8eb7840b289.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/aae1736357c9faf9cc8d328657a05ff6.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/bf5e1ba458f4d52b320c8b559045dcaf.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/de51b604504470597d886c34ffe6e8cd.jpg\"]',8,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(85,'Eos dicta.','Quasi eum aliquam.',NULL,NULL,1,'Quod quasi ab et. Ipsa nihil magni repellat. Excepturi labore unde necessitatibus tempora porro.\n\nQuas est est praesentium molestias iusto. Laudantium impedit tempora quidem laudantium. Unde odit rerum nihil. Quod et magnam dolor commodi molestiae.\n\nModi repellendus repudiandae quod aut voluptatem. Nesciunt natus adipisci numquam veritatis. Recusandae aperiam nulla esse molestias accusantium delectus.\n\nEt qui accusantium natus reiciendis nostrum. Quia nostrum molestiae eligendi qui non.\n\nSequi omnis dolore doloribus impedit molestias. Quia voluptates nostrum aut optio minus incidunt aut facilis. Voluptates id blanditiis vitae impedit soluta voluptatem.\n\nImpedit sequi quis rerum illum dolores qui. Molestiae est pariatur dolores vitae ex sed ipsum eos. Et necessitatibus dolores qui saepe quos. Nemo et nihil fugiat occaecati dolores quisquam.','Ad veniam quia error dolorem eum. Atque eaque qui rerum pariatur dolorem aut. Corporis provident eius quidem voluptatem. Aspernatur tenetur voluptas quam animi.\n\nUt dolore dolorem distinctio provident qui animi. Quasi quo quos ea. Animi maxime adipisci pariatur qui.\n\nTempora dolorem necessitatibus facere modi blanditiis in soluta. Ab quia dolorem consequuntur laboriosam qui non velit.\n\nNesciunt et saepe molestiae at itaque. Repellendus debitis eos rerum et non et. Hic eum a nobis tenetur facere cumque.\n\nNulla quasi vel cupiditate omnis non qui omnis. Sit quo ducimus blanditiis perspiciatis. Sit eos suscipit aut et voluptatibus. Voluptatem temporibus rerum ad.\n\nIpsam dolor impedit voluptatem ut beatae dolor rem. Velit mollitia delectus natus voluptatem voluptatem. Repellat earum quas eius consequatur.','/images/uploads/news/detail/0e582e7b0a4045224128a8af85c6dba7.jpg','/images/uploads/news/detail/3157539615ab052b55792c3528bf6634.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ca4465377f1ddb41c466789154a1a97e.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/6f01a069e56baa0e788287f14ec176ae.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/0714f4421339285ef8447fff4e188cb3.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/0c6aa816eba9db18c742f0dfeb828abe.jpg\"]',17,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(86,'Illum in aut.','Sed doloremque commodi.',NULL,NULL,1,'Dignissimos inventore qui aut. Iure temporibus sed blanditiis dicta earum perspiciatis. Eum occaecati ut sunt. Rem qui asperiores voluptates eligendi magni et laudantium dolorem.\n\nEt excepturi qui non doloribus laudantium. Iste ullam porro cumque harum. Reprehenderit quas maxime ut et ut quia sit.\n\nAspernatur in natus deleniti voluptates qui expedita. Quod est totam eum. Nam corrupti provident aperiam laborum possimus.\n\nSequi vel et voluptas ut voluptas nemo. Debitis totam quisquam sunt odit consequatur. In aperiam praesentium sunt animi quaerat. Quasi aut ut ex deserunt possimus aliquam. Beatae non repellat quibusdam atque nihil debitis omnis omnis.\n\nAutem ipsa saepe at nisi quibusdam. Similique corrupti voluptate culpa facere dolorem. Veniam sint a delectus odit ut.\n\nVoluptatibus praesentium doloribus est non cumque. Odit aut dignissimos ut rerum perspiciatis voluptatem. Assumenda rerum voluptatum est omnis eveniet repudiandae.','Consequuntur quam illo officiis impedit tenetur ut debitis. Iste quidem accusamus accusamus et. Voluptatem et itaque rerum quia corrupti sed labore.\n\nLaudantium laborum eaque reprehenderit. Aut qui ut perspiciatis cupiditate voluptatem est. Consequatur aut eos quisquam nihil modi qui. Corporis accusamus commodi quam quaerat.\n\nSuscipit ut facere nostrum et itaque perspiciatis sint. Quis atque qui doloremque natus non incidunt commodi ipsa. Earum eveniet voluptas occaecati.\n\nQuasi earum eum odio et maiores facilis. Explicabo architecto ut quasi ut. Aperiam ex autem facilis rerum ut. Aut perspiciatis sapiente velit blanditiis. Sed aut ullam laborum sunt omnis quos.\n\nUt neque autem et quisquam dicta enim qui. Sapiente consectetur est harum reprehenderit qui explicabo incidunt. Architecto qui iusto tempora molestias iure.\n\nLaboriosam dolores molestiae reiciendis sint exercitationem fugit deleniti maxime. Dignissimos assumenda facilis tempora nulla praesentium iste dolore. Explicabo minus eveniet aliquid voluptas totam quia est. Sequi quos et non aut dolorum quibusdam illo aut. Incidunt facere quis qui eligendi ut nostrum quos.','/images/uploads/news/detail/79fbded53f363f60a9731fb061abcc6d.jpg','/images/uploads/news/detail/17f5b54a3468762d4e4865ecdb7525d4.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/312f0943b415b03c591cfb71c4d04172.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/8e933e9325476c1a8c7ba8ef16bbdf25.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/670b438bab79058b11f35195a7195359.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/e39794dfe31b3930b96fac243928ae9c.jpg\"]',20,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(87,'Veniam accusamus consequuntur.','Deserunt tenetur impedit quia vitae.',NULL,NULL,1,'Ratione dolor nihil eaque esse. Nobis neque a amet est ab. Quidem harum et quis et laudantium non iste. Tempora optio nemo ipsum non velit. Itaque omnis quis velit ut.\n\nEt natus praesentium non ut odio dolores. Ratione et vero voluptas. Aut qui aut fugiat. Beatae temporibus nostrum consequuntur fugiat.\n\nIllo hic deserunt animi maiores repellendus eum. Amet distinctio alias amet doloribus non rerum voluptate molestiae. Reprehenderit pariatur fugit est alias. Enim eos nam adipisci.\n\nEx ut numquam porro sit eaque consequuntur numquam autem. Totam repudiandae sint ut assumenda aspernatur porro. Ratione sapiente quis qui.\n\nVoluptate ut voluptate laboriosam tenetur velit qui non. Ducimus et facilis accusantium quia. Expedita ea quia quia voluptates rerum.\n\nEt rerum culpa omnis aut. Doloribus hic ex quia dolores voluptatibus ut accusamus.','Blanditiis ipsum debitis eveniet. Deleniti sint soluta aut sed enim est.\n\nLaborum doloribus molestiae doloribus distinctio ab sequi. Quia autem repellat distinctio corporis. Et ad et tenetur repellat sint qui. Commodi ut eius in et. Corrupti exercitationem similique incidunt consequatur maiores.\n\nUt exercitationem tenetur consequatur quis suscipit commodi. Sit nihil qui beatae. Magnam eos magnam aperiam deleniti sunt animi dolore.\n\nOmnis non non enim consequuntur qui odit molestiae. Qui accusantium hic delectus impedit et ratione. Voluptas in quia harum deserunt molestiae aut ab unde.\n\nEarum veritatis molestiae vel voluptatum corrupti reiciendis officiis qui. Cumque odio ut voluptatem omnis ullam vel a mollitia. Est maxime vero nisi qui corrupti. Rerum reprehenderit voluptas quia fuga.\n\nQuidem ut deserunt odit corporis nesciunt omnis qui. Aut quia nobis iure voluptas. Consequatur quaerat ad magnam minus eaque. Illum accusamus aut dolores.','/images/uploads/news/detail/78fbed208381aef8d02abdcff7f2d1c6.jpg','/images/uploads/news/detail/fc354244e2d83af7f4f7aa5aea01549a.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/d8497c5847fcda77756d2cac30e26677.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/cc2f3d76f12ce18d27ce5be81e1b8c56.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/3c3d4fb0106a6b3825c79e3409a2d3c6.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/22b3c37cbaae181be99f23d903994a36.jpg\"]',15,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(88,'Cum aut in.','Delectus similique sed voluptatem.',NULL,NULL,1,'Quis deleniti porro aut hic reprehenderit molestias hic voluptatum. Sit doloremque incidunt culpa tempore accusamus. Provident minus molestiae tempora provident. Omnis ut consequuntur veritatis aspernatur voluptas.\n\nDolorum explicabo ducimus et. Neque quidem consequatur nobis placeat hic corrupti. Ut minima culpa minima dolorum aspernatur non quia. Rerum ducimus veritatis quo illum fugit neque velit.\n\nConsectetur aut error eum consequatur. Quis veniam exercitationem aliquam. Ea aperiam vel voluptatem aut beatae omnis. Non expedita nobis eius iusto aut animi nostrum.\n\nIn omnis facilis veritatis voluptatibus pariatur consequatur. Quis doloribus hic modi placeat ducimus. Et et omnis perferendis earum ut magnam. Tempore consequatur amet ex maiores eius et assumenda ratione.\n\nNon occaecati eos vel nihil. Id esse architecto impedit ab error soluta maxime consequuntur. Laudantium ab iste id accusamus sit.\n\nExplicabo vel similique itaque accusamus suscipit. Sapiente aut vel aperiam atque non eos inventore. Consectetur maiores deserunt exercitationem ut. Et sed non repellat ut unde ut. Fuga qui dolorem et odit id perferendis.','Deserunt dolor voluptatum eaque voluptas omnis. Modi accusamus pariatur quia et ea qui. Facilis assumenda magnam tempora.\n\nExpedita quia est id nobis alias vel iste. Corporis eligendi quia et numquam officiis magnam enim temporibus. Ex et magnam eum corrupti laboriosam harum et. Enim ipsa ab facere possimus vero illo. Aperiam at praesentium nemo animi ipsum.\n\nTotam qui commodi et. Et provident sunt quos reprehenderit at. Itaque culpa perspiciatis ex sapiente quia fugiat. Perferendis sequi possimus qui fuga voluptas. Quis necessitatibus aut aut magnam repellat vero dolores.\n\nQuam dolores iste porro. Necessitatibus enim praesentium labore in eos.\n\nEa officia expedita labore ut. Neque modi architecto sint maiores minima est.\n\nFacere quia dicta accusamus eius dolorem sint tempore. Blanditiis placeat ut assumenda quae. Et similique in dolorum qui sed. Non eveniet laborum alias tenetur nesciunt.','/images/uploads/news/detail/b07d97dd1bfbeb1c5c19ca64bfb07308.jpg','/images/uploads/news/detail/7d5d1ee763531cddfac5d0f4bd4268c1.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/989512848fc2d3e79b50eb09bd544679.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ccc66c8e64bf29173727716f6a57c846.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/fa67a090a7aeaecd9586ae6b6bfa86b7.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/4ceb29ee73c4640e8b2e14b0db2b3853.jpg\"]',21,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(89,'Consequatur enim perferendis quam.','Occaecati doloribus et suscipit.',NULL,NULL,1,'Voluptates eos tempora voluptas quae animi repellendus. Perferendis maiores eum repudiandae adipisci qui vero ab. Expedita vitae est laboriosam dolore sed nemo soluta. Sed voluptatibus velit ea sit.\n\nQuasi itaque nulla impedit veritatis quia. Distinctio nihil sed sed ea est dolore.\n\nVoluptates rerum numquam recusandae libero aspernatur laborum excepturi. Assumenda minima debitis distinctio. Unde ad dolore quas est dolore et. Nisi est quos ducimus est nulla earum.\n\nQuis ut eveniet dolores deleniti corporis consectetur nihil laboriosam. Natus perferendis minima suscipit quod laboriosam omnis. Dolores dignissimos voluptates sequi.\n\nEnim dolores tempore dolores perspiciatis aspernatur ut. Sed ipsa culpa velit voluptas. Delectus ex exercitationem est.\n\nEveniet voluptatum odio aut ut voluptatem. Aliquam est atque molestiae facilis est dicta. Perspiciatis quas quo pariatur incidunt. Et accusamus ut perferendis eum.','Eos ut quisquam nesciunt aut ad officiis. Ea animi sunt expedita sunt. Sint sit ut voluptatem reiciendis.\n\nEaque in magni eius aut. Dolores et voluptatem tenetur. Explicabo fugit eos eaque quae et.\n\nUnde dolores omnis expedita rem consequatur ipsam a. Animi officia nihil ea natus reiciendis doloribus.\n\nReprehenderit autem sit velit eum corporis qui mollitia. Facere qui voluptatem est in aut tempore consequatur. Qui quo vero soluta consectetur omnis delectus reiciendis iusto.\n\nIpsa error quis non consequatur qui sunt aut. Et odio consequatur et tempora vero maxime qui. Et molestiae nulla necessitatibus provident fugiat asperiores et modi. Incidunt voluptatem architecto omnis cupiditate.\n\nMinima quam est officia. In et accusamus quia tenetur vel. Natus aliquid facilis architecto laborum illo adipisci aperiam.','/images/uploads/news/detail/fd4f4079328269990825db0335ead1b6.jpg','/images/uploads/news/detail/c2dbc1fe27a308a93058d5b7566a6125.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f0ede15c0d6275e417df678bd8f2ed13.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a1cea094c85066aad0aa2639ba9358fd.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a9e4bbe400343a19b80e26ad6ee08bb7.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/75926aba092b4d12bc79305daea9e3cd.jpg\"]',17,'2016-10-30 13:57:37','2016-10-30 13:57:37',1,1),(90,'Ipsum quis qui.','Dolor architecto voluptates quos esse.',NULL,NULL,1,'Velit aut architecto et consectetur repudiandae quia nemo. Voluptatem libero distinctio et est. Est laborum aliquid qui voluptate aut delectus molestiae consequatur. Molestias rem placeat est harum magni ut ex.\n\nDoloribus ratione facilis alias debitis modi enim consequuntur. Voluptate vitae vero ipsum temporibus consequatur. Fugit ut nemo maxime et.\n\nVoluptate qui ducimus voluptatem nesciunt. Dolores est consequuntur ipsum molestias qui. Ducimus nihil rem tempora blanditiis odio incidunt. Nisi magni consequatur impedit quasi.\n\nOfficiis rerum voluptas at libero aut voluptatem rem. Impedit quisquam temporibus aut repellendus dolore. Sapiente occaecati accusamus ex dolorem exercitationem cum eos. Corporis minus aspernatur totam voluptas quis.\n\nSaepe optio consectetur sed dolorem. Nesciunt harum sint vero dicta doloribus odit. Et eum nisi explicabo.\n\nCupiditate vitae voluptates eveniet provident. Nulla quia sed eveniet eius qui. Deserunt omnis harum pariatur soluta.','Veritatis veniam temporibus repudiandae id est. Quisquam sunt sint dicta aut perferendis autem voluptatem. Non ducimus ullam voluptatem autem. Deleniti in quaerat architecto et vel eum.\n\nNon est consectetur non eos velit. Suscipit quasi totam quibusdam libero iure qui voluptatibus. Sit qui sed non et ut repellat.\n\nEa id a necessitatibus tenetur perferendis dicta. Praesentium sit ea non aut ut. Illum maxime deleniti cumque aut iste. Dolor ut et amet dolores animi nihil quis voluptatibus. Et corrupti nam ut non doloremque ipsam non.\n\nMinus dolores deleniti voluptas sint dolor veritatis dolores. Distinctio repellat non dignissimos. Accusantium sit cupiditate culpa officia porro qui et.\n\nAperiam in unde nostrum quia. Et dolor quos quia culpa dicta velit. Eveniet dolorem asperiores sint autem officiis. Dolores rerum qui voluptatum explicabo.\n\nFuga dolores et quod odio dolores quasi. Ducimus quia atque doloribus vitae et magni sit. Ipsum beatae corporis eveniet odio quam aut laborum.','/images/uploads/news/detail/0ae1c1f23945e6acc067d58961d81845.jpg','/images/uploads/news/detail/7d066d499da11250a4b5d22dd1eda241.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/78a9788a4776594c3962580490ed1f26.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/1c2535928ee132b046b2ee07ad09bee7.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/32b48ed2e74ba46bab47179a6baf7893.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/25dee4ad24877b013f533937ca7cb362.jpg\"]',20,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(91,'Vitae amet maxime qui et.','Accusamus blanditiis est.',NULL,NULL,1,'Ut recusandae aut culpa quaerat voluptas. Quaerat voluptatibus fugiat doloremque velit unde voluptate. Nobis doloribus nesciunt sed et nesciunt eum excepturi. Sint libero quod asperiores et quia.\n\nAperiam delectus culpa temporibus dolore quas aliquid. Fuga maxime sed et qui.\n\nBlanditiis adipisci eius harum beatae. Et quo quas et nisi. Id omnis autem et enim dicta blanditiis quia. Rem et et sapiente quo aliquam quas facilis. Tempore suscipit voluptate rerum natus aliquam voluptas.\n\nCorporis modi impedit iure qui. Voluptates repellendus aut enim eum sequi. Cupiditate officiis enim commodi et maiores sed consequatur.\n\nQuisquam quod adipisci nisi modi et vel. Laudantium ut dolore qui sunt autem delectus. Tenetur ea facilis dolorem et voluptatum assumenda voluptas labore.\n\nVoluptatem temporibus qui aspernatur dolorem cumque et. Nam eos quia aut voluptatem aut. Excepturi cum dolorum ex aut occaecati adipisci voluptates et. Consequatur reprehenderit vel sed atque suscipit nulla.','Delectus sunt ut facere. Et laboriosam eos esse sunt laborum omnis beatae. Officia provident tempore nam voluptas.\n\nItaque iusto ex dicta. Minus nostrum et tenetur illo fuga omnis. Libero officiis culpa quia aut libero beatae omnis delectus. Aliquid rerum aut deleniti aut ullam dolorem.\n\nUt perferendis aliquid illo est laboriosam. Sit exercitationem sequi necessitatibus quis aut. Accusamus necessitatibus qui voluptas quo itaque. Id temporibus excepturi recusandae labore incidunt fugit illo.\n\nDolores velit eligendi alias. Eum ut numquam officiis quos sed. Aut facere nihil in enim voluptatum sed nihil eos.\n\nRepellendus dolores similique alias sequi nesciunt laudantium et. Architecto possimus dolor ex expedita voluptates atque accusantium. Ducimus tempore sequi quo qui reiciendis qui dicta.\n\nAtque vero et laborum dolor aut omnis. Suscipit sed atque dicta quia illo ea voluptatibus officia.','/images/uploads/news/detail/b66e6641a4d8e41c6160bdd9722bee2d.jpg','/images/uploads/news/detail/c296eaf086c75de27766d26b2415f7f4.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/166e94c0a20cd2e6dd496a072596b955.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/d93a9744e43014746c67a9063f66e553.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/46908ed744cea1bc688deaa03156b1e2.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/932227d61aff5fc523ec6d808ab68381.jpg\"]',12,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(92,'Cupiditate neque reprehenderit ullam.','Beatae aspernatur unde.',NULL,NULL,1,'Est minus ut vero eos quo. Tenetur aut iusto similique. Sunt ullam id et iure harum. Odio omnis recusandae autem odio maiores.\n\nEst quia quod hic libero omnis est eos error. Natus ut vel aliquid veniam reprehenderit sapiente assumenda enim. Quos quis dolores impedit molestias maxime dolor.\n\nQuo consequatur illum soluta aut ea animi. Molestiae optio veritatis similique iusto ab accusantium. Quidem quo ea repellat modi ab.\n\nAsperiores facere dolores voluptatum nemo quis reiciendis dignissimos. Qui et quo accusantium sed doloremque non. Qui reiciendis soluta sunt.\n\nNesciunt quia aut est iure. Unde ut fugiat voluptatem voluptas tempore maiores laudantium. Laboriosam sunt nam placeat labore sit ut. Eos ut officiis atque.\n\nAperiam in alias voluptatem voluptas. Earum et molestiae in eius. Quisquam in eligendi saepe ea.','Ut sit nihil tempora error sed. Itaque tempore molestiae doloremque reprehenderit placeat molestiae. Aut ipsa consequatur architecto sequi.\n\nOfficia quas earum ipsum inventore sed. Eaque itaque ullam iusto ipsum velit reiciendis possimus. Aut ipsam iste nulla architecto nostrum dolores.\n\nQuisquam aliquam sint atque est reprehenderit. Quisquam voluptas perferendis facere. Error voluptas sequi ipsam.\n\nVoluptates est nemo dolor aperiam. Id eum sit necessitatibus sit sit corporis harum consequatur. Deleniti cupiditate amet amet accusantium.\n\nIllum ut quasi labore soluta sit magni incidunt. Aspernatur officia voluptate ea quia nemo. Ut perferendis et velit est totam expedita.\n\nVel dolor consequatur enim eius natus. Sapiente minima dolorem est omnis numquam saepe voluptas. Perspiciatis optio facere voluptas qui laudantium vero.','/images/uploads/news/detail/1725ead2ec24ebe499ec53b530b2b8ca.jpg','/images/uploads/news/detail/c419b97572be4dbc917b4a8de91d21c4.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/292af10036f0bcbc862bd81639d056a9.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/8714dd64eceef7724dc2e3bdc667d265.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/9b8ec9fc4c071f3fc8b40587d438d92d.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ddec4b62496048b53f2b11665a3ed7c0.jpg\"]',8,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(93,'Optio laboriosam quia ut.','Ad excepturi natus voluptas.',NULL,NULL,1,'Molestias aut dolores dicta et sapiente officiis. Repellat in aut quam minus magni. Qui ab quos consectetur sit error. Quisquam praesentium repellendus aut consequatur architecto rerum consequatur.\n\nQuis perferendis illum libero. Mollitia et voluptas ipsam nemo dolor. Ut amet voluptas explicabo et omnis rerum exercitationem. Ea sunt eaque reprehenderit id aut repellat. Error cupiditate et aut nulla ipsa eum omnis.\n\nInventore velit sint incidunt rerum quibusdam. Fugiat sit consequatur asperiores commodi voluptates quia qui enim.\n\nQuidem asperiores et et. Distinctio vitae quibusdam cum libero aut quas enim et. Nihil praesentium sequi ducimus sed corporis et esse.\n\nQuis provident mollitia qui qui quia quo est totam. Commodi quis ut aliquid incidunt inventore. Amet enim qui minima harum reiciendis esse. Temporibus impedit amet ut odit sit unde.\n\nEst voluptate autem nostrum perferendis est. Expedita molestiae culpa quo perferendis.','In unde sed sit sit consequatur possimus mollitia. Est tempore fuga iusto unde.\n\nExcepturi aut consequatur qui voluptatibus. Quia quasi est ut odio perferendis. Illo itaque voluptas doloremque.\n\nVoluptas minus quis fuga fuga et quis deserunt. Excepturi et cumque voluptas sapiente quaerat illo in. Dolorum recusandae aut dolor maiores. Harum in ut doloribus praesentium voluptas tempora totam.\n\nQuod voluptate qui debitis repellat ea maiores exercitationem. Ab labore enim quam facere. Rem consequatur vel voluptatem eum.\n\nNumquam maiores dolor ipsa quis quia. In excepturi non aut aspernatur ipsam omnis. Fuga error odio doloremque in doloribus suscipit molestias amet. Illo atque labore officiis enim.\n\nOmnis sed ex omnis qui aut fugiat. Sint libero et cupiditate et rerum quia. Quasi et officiis officiis aspernatur. Et hic sit consequatur aut est dolore ut.','/images/uploads/news/detail/a317c3c6f896f4a1f7371e51f029a1e4.jpg','/images/uploads/news/detail/5ffeb0d711f5513dc3ec5f5d8f0c87a2.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f9fd5cd8266a9e2f2f351d4a0c6561a0.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/afba12f3c7c54c32c6b9b99c640f032c.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/6cc81447fc9843159f8a1f3050264eed.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/8f4d9656fbda42b88ca38f2758d610a5.jpg\"]',10,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(94,'Sit voluptate dolore ut adipisci.','Ducimus tempore dolor.',NULL,NULL,1,'Non nulla ab cumque doloribus. In aut voluptatem occaecati esse consectetur est laboriosam.\n\nEst sed tenetur repellat quae. Numquam aut eum ut hic corporis facere. Sed repudiandae voluptatum deserunt dolorum veritatis. Nihil doloribus voluptatem mollitia quia incidunt aspernatur.\n\nRerum architecto ut laboriosam facere. Voluptate aut facere enim qui velit repellat. Libero doloremque et fugit voluptas et aut.\n\nConsequatur neque ut et autem. Magnam temporibus numquam quas quasi. Et illo maiores ipsum ut qui neque qui vero.\n\nVoluptas dolorem dolore amet qui dolor eos velit eveniet. Minus totam perferendis est totam. Ut reprehenderit tenetur aut voluptatem enim odio vero.\n\nEt enim non eligendi neque ad ipsa facilis nesciunt. Sit voluptatem incidunt fuga deserunt inventore quo. Laborum molestias sequi qui sint itaque earum ratione voluptatum.','Ex voluptatem animi nihil hic magni. Ex pariatur placeat voluptatem rerum. Nobis aut veniam excepturi rerum qui officiis blanditiis.\n\nPariatur ratione quam labore eligendi unde odit. Autem eos sit et perspiciatis similique maiores. Aut itaque dolore necessitatibus.\n\nAsperiores quia mollitia illum atque nulla architecto soluta. Fuga sapiente ut enim et repellat reprehenderit aspernatur est. Rerum molestiae omnis qui ea error consequatur itaque.\n\nUt quos voluptatem qui maiores commodi cupiditate. Qui voluptatibus in esse id magni quia. Beatae vel reprehenderit facilis. A animi quo omnis incidunt.\n\nVeniam commodi consectetur in velit et deleniti ut. Quia veritatis et consequatur illo cum aliquid. Consequatur occaecati omnis ipsa sint ipsa.\n\nDolores beatae non doloribus dolorem quod. Atque culpa eius quia quam sequi. Excepturi odio sunt est illum voluptate. Sit provident dolores doloremque.','/images/uploads/news/detail/f07139a6071defa64f0232913222ac68.jpg','/images/uploads/news/detail/ba6517c49d22b0f4fb3c3b057cc9c488.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a18e204bf737531f202c9c59ba3cb38a.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/bb3b699469b3430540062148fff331a4.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/33915b2db0a1eb52773a4167f8a98bc9.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/5fee5faa1fee66bd2bc2d915bd7151c7.jpg\"]',15,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(95,'Nulla nisi neque.','Molestiae exercitationem maiores.',NULL,NULL,1,'Sint omnis vel animi ut vero corrupti. Atque aut et omnis ut voluptatem. Qui nesciunt suscipit qui cum corporis non.\n\nAtque et fuga molestiae soluta repellat ut quaerat aut. Voluptas ut ut sunt voluptatem. Ut corporis exercitationem esse.\n\nImpedit expedita corrupti aliquam quaerat corrupti sed natus ut. Fugiat dolores et veritatis qui ab. Quasi et tempore quia magnam voluptatum sed animi. Tempore qui saepe corrupti excepturi qui possimus fuga rerum.\n\nFugit natus sunt et voluptatem. Laborum consequatur necessitatibus quia neque dicta et voluptatem.\n\nError quo sit nulla delectus. Eos consequuntur cum eveniet explicabo atque facilis in.\n\nConsectetur et et sapiente aut. Natus exercitationem illo in tenetur molestiae. Officiis architecto deserunt distinctio delectus rerum ut. Ratione quisquam nihil fuga et cupiditate ut in. Dolorem consequatur adipisci dignissimos dignissimos velit rerum nihil placeat.','Qui laudantium eum dignissimos quidem dicta quibusdam qui vero. Soluta aliquam cupiditate aut animi impedit et autem.\n\nQuae asperiores qui aut soluta vero in. Qui officia neque molestias ut ratione eos. Qui libero doloribus non et. Dolorum nesciunt laudantium quibusdam totam omnis et.\n\nSed assumenda voluptatem et modi iste nulla culpa. Ratione quis ipsa eaque. Dolores ab quis quis ex tempora eum. Unde autem ratione architecto corrupti.\n\nEx quae ullam eos harum soluta ut. Facere molestiae debitis sint velit iusto. Dolor quis sed aperiam blanditiis deleniti optio ut.\n\nRatione sed et ut. Nulla architecto fuga et omnis et aut a dolor.\n\nUllam iusto cupiditate pariatur consequuntur. Ipsa et eos non provident ex. Quo similique vel nam hic iure repellendus nobis. Sit dolorum et blanditiis vero libero nihil quia.','/images/uploads/news/detail/cee89d4d045706649ace562ef038193d.jpg','/images/uploads/news/detail/ea445b8873e889575897b2e8927bda05.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/0063b54684c3adff70d24a8d7c400775.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/75fbfea5586066e67c478a0390b1225f.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/fddfe789e5d14737377e3b0e05cb75e2.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/846573f01d9e35e5a5df9ff3f794ec4a.jpg\"]',17,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(96,'Nam reprehenderit excepturi.','Aliquam et et.',NULL,NULL,1,'Molestiae quia quaerat magnam sit corporis. Nesciunt facere ipsam sunt nisi voluptatem sit odio. Dolores quia iure consequuntur placeat dolorem eum qui rerum. Mollitia iure illum in facere non.\n\nAlias nihil aut iure est est ut nemo. Natus perspiciatis velit est optio est.\n\nEt sapiente aperiam accusantium cupiditate illo. Architecto et non adipisci omnis exercitationem earum delectus. Quis qui adipisci non laboriosam et. Provident assumenda exercitationem ullam sit quia ullam.\n\nTempora reiciendis rerum ea nisi dolorum. Tempora et ad qui illo. Delectus eius culpa doloribus officia necessitatibus.\n\nHic mollitia tempore fugit voluptas eos corporis et. Delectus voluptates a dolorum hic. Omnis accusamus consequatur voluptatem tempore molestiae repellat.\n\nIusto provident praesentium distinctio et et id excepturi. Enim sed voluptatem eveniet quia voluptatem aut eligendi. Inventore corporis harum sed.','Placeat pariatur molestiae et sit earum ut mollitia. Eum qui dicta libero odit voluptate architecto. Enim similique expedita inventore. Ea commodi cumque et reprehenderit ut aut.\n\nAccusantium rerum tempora officia quia dolor rerum. Est non praesentium voluptatem fugit explicabo earum quae assumenda. Omnis impedit officiis eos aliquid error rerum. Atque omnis asperiores totam fuga aspernatur non est. Tempora consequatur et autem incidunt blanditiis aperiam.\n\nSit aut quia esse maxime. Ut tenetur perferendis soluta eius. Ducimus maiores pariatur soluta sit facere hic. Quia facilis ea est.\n\nNam odit et explicabo placeat vero incidunt. Animi consequuntur magnam quibusdam ut est voluptas amet. Ut corporis ullam dicta officiis sit recusandae excepturi.\n\nEst impedit porro eos et repudiandae iusto. Veniam accusantium impedit placeat.\n\nLibero aut qui quibusdam. Vel molestiae esse nesciunt. Pariatur soluta dolore dolor sint. Est quia qui nostrum iusto.','/images/uploads/news/detail/06f9166e468542ff1e63648304864eae.jpg','/images/uploads/news/detail/62f4b0946154420a19144026d6ac80f7.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/e5b08e82b44bca8f43dea6952e73f807.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f918dce3c8531c02438b5894793a8a3a.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/c0c29189f2231fc8606144575b36a476.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/ee42505ac1632e02212f24823fa212a6.jpg\"]',15,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(97,'Odit sapiente molestiae ducimus.','Velit fugiat dolores magni.',NULL,NULL,1,'Qui quibusdam reiciendis dignissimos. Numquam magnam earum enim sit. Autem rem aut ab iusto in.\n\nNon iusto velit tempore et. Expedita saepe labore aspernatur. Natus beatae consequatur quo et. Consectetur totam possimus molestiae amet dolorem perspiciatis unde.\n\nItaque blanditiis modi debitis quaerat eius tenetur. Dolor a iure neque earum.\n\nEveniet dolorum provident voluptas. Sint rem voluptate ad alias a. Deserunt dolor veritatis aut enim porro. Iste neque culpa consequatur perspiciatis.\n\nSuscipit non et et ullam quia. Hic ipsum earum non ea quisquam placeat. Fugiat voluptas corrupti hic harum aut quia similique. Laudantium aut saepe ex ab.\n\nUt nesciunt voluptatem qui perspiciatis quam eos ut. Aliquam ab quae possimus quia. Aut quia vel quo nobis odio nesciunt.','Repellat vel non eum aliquam. Iusto velit optio dolores omnis. Et dolorem fugit laboriosam. Eum iusto aut asperiores quasi officia consequatur.\n\nEsse dolore veritatis veritatis rerum blanditiis excepturi. Est sit asperiores modi est. Iusto quia ipsam eius eos. Omnis ex cumque totam quae maiores amet voluptatem.\n\nTotam delectus cumque earum aut aliquid ea consequatur. Veritatis dolore vel qui dolor corporis illum voluptatem. Exercitationem aperiam est qui voluptatem est. Hic velit sunt qui.\n\nDoloremque quis omnis accusamus quis. Repellat magnam autem enim enim in facilis tempora.\n\nIn quasi ut commodi fugiat qui et. Sed et optio et velit magni itaque voluptate. Et aut enim illo illo voluptatem quis. Dolores dolorum architecto architecto incidunt expedita eos aut sed.\n\nDucimus non aliquam odit at. Et a quisquam minus modi qui ad. Eaque aspernatur possimus suscipit exercitationem amet ad similique itaque. Sit voluptas possimus ut illum magnam quam inventore amet.','/images/uploads/news/detail/d31605a26606fc73d4f09bcf0ba98f71.jpg','/images/uploads/news/detail/28f59b9ff1777a977697dc2c4a7de370.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/2cf651cbee0f053157e8ecd8c7882be5.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/a3b3778bb4f9df3a2242e778f0bbaf1c.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/119f24e3cd0ccda83dec11da7e4b83e9.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/cf4c71db3ef842f477a3390a029813c4.jpg\"]',21,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1),(98,'Laudantium ratione.','Vero neque nesciunt.',NULL,NULL,1,'Earum eos officia incidunt ex nihil recusandae. Inventore nostrum enim natus porro et. Consequuntur natus minima voluptatibus dolores. Sed voluptate facilis eveniet qui vero. Velit est nemo consequatur magni.\n\nExcepturi vitae saepe sit fugiat. Rerum aut iure quo qui quo nisi. Voluptatem optio hic eos pariatur ex pariatur. Sapiente itaque autem molestiae earum aut.\n\nOfficia sit quas et est voluptatem deserunt. Impedit dolores aut ad. Ut ipsum ipsam aspernatur cumque voluptatem eaque.\n\nRerum excepturi quidem veritatis minima ducimus reprehenderit. Non qui soluta beatae sint. Alias fuga consequuntur eaque enim maiores voluptas et nihil. Suscipit deleniti dicta quia maxime eius aut.\n\nVoluptatem ut et delectus et sit aut nemo. Odio et totam ducimus. Voluptatem tenetur nihil dolorem adipisci dolor.\n\nConsequatur natus est laboriosam corrupti rerum aut qui. Ad velit adipisci qui laboriosam praesentium. Ab incidunt eligendi deserunt vitae in ad quibusdam. Voluptas maxime officia beatae aut itaque placeat blanditiis.','Corporis alias et aut sapiente deserunt porro. Quas fuga qui officiis optio consequatur. Quod odit ex deserunt aut fugiat voluptatem.\n\nArchitecto est molestiae numquam non est voluptate. Quas perferendis laudantium incidunt alias excepturi. Delectus aliquam est et.\n\nEx esse vel esse debitis quae nihil et. Ex et corrupti fugit quia et. Iusto ducimus quisquam ex odio quos quis ullam debitis.\n\nEnim vel quidem dolorum molestias doloremque ut quis. Fugiat vel deserunt est excepturi.\n\nDolores non et exercitationem consequatur alias sed maiores. Consequatur voluptas amet aspernatur harum. Saepe dolorem quaerat excepturi saepe consequatur facilis. Corporis inventore aut nihil voluptas. Quia aut enim nostrum.\n\nIn quis dolore quidem soluta tempore. Sit est aut dolores laudantium. Aut omnis et ea iste qui. Labore quis praesentium eaque eveniet sunt. Nesciunt ut est voluptatem omnis ex iure.','/images/uploads/news/detail/159a0a5894ddef43529531f43ed8eb0b.jpg','/images/uploads/news/detail/67f07846abd5a86f20ba5f61ff30cc9b.jpg','[\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/634550ce92ba0e22c6bd903a78b40b48.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/6dde4941462cc61c54443c63efb74037.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/f69c3255a314b24f7fd5665c55f506be.jpg\",\"\\/home\\/evgeniy\\/Hosts\\/altamedica.local\\/public\\/images\\/uploads\\/2dc4f1d290fb0e3b32c6f7e71ab83f78.jpg\"]',12,'2016-10-30 13:57:38','2016-10-30 13:57:38',1,1);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phones`
--

DROP TABLE IF EXISTS `phones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `phones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phones`
--

LOCK TABLES `phones` WRITE;
/*!40000 ALTER TABLE `phones` DISABLE KEYS */;
INSERT INTO `phones` VALUES (1,'Vodafone','+380509087654',1,'2016-10-28 18:09:20','2016-10-28 18:09:20'),(2,'Life','+380939087654',1,'2016-10-28 18:09:55','2016-10-28 18:09:55'),(3,'Kyivstar','+380989087654',1,'2016-10-28 18:10:45','2016-10-28 18:10:45');
/*!40000 ALTER TABLE `phones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualifies`
--

DROP TABLE IF EXISTS `qualifies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualifies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualifies`
--

LOCK TABLES `qualifies` WRITE;
/*!40000 ALTER TABLE `qualifies` DISABLE KEYS */;
INSERT INTO `qualifies` VALUES (1,'Старший врач','Старший врач','2016-10-16 15:46:05','2016-10-16 15:46:05');
/*!40000 ALTER TABLE `qualifies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,1,1,NULL,NULL),(7,6,1,NULL,NULL),(8,7,1,NULL,NULL);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin',1,NULL,NULL),(2,'Manager',2,'2016-10-16 11:01:45','2016-10-16 11:01:45');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialties`
--

DROP TABLE IF EXISTS `specialties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialties` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialties`
--

LOCK TABLES `specialties` WRITE;
/*!40000 ALTER TABLE `specialties` DISABLE KEYS */;
INSERT INTO `specialties` VALUES (1,'Взрослый','Дорослый','2016-10-16 15:51:16','2016-10-16 15:51:16'),(2,'Детский','Дитячий','2016-10-16 15:51:44','2016-10-16 15:51:44');
/*!40000 ALTER TABLE `specialties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@admin.com','$2y$10$sR2aDI0wDkCY1mzBv07oXeaSoRZ8KiBWEuenMSguGkDdYOrFt5sju','TjRQh4050A',NULL,NULL),(7,'Евгений','e.nakoneschniy@gmail.com','$2y$10$/ydMhY4wrjAFWBhkXCJh5uve.Mx5ApFZqmIurzXWSKC12JgYdTvq2','BnBJTKNxwIsYqMWU2g9x1sQ6en8Jy29kxCuJEgqdql1wU9N8yxweGFTuvTgP','2016-10-16 14:33:39','2016-10-16 18:11:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacancies`
--

DROP TABLE IF EXISTS `vacancies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vacancies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title_ua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description_ua` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description_ru` longtext COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data` date DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacancies`
--

LOCK TABLES `vacancies` WRITE;
/*!40000 ALTER TABLE `vacancies` DISABLE KEYS */;
INSERT INTO `vacancies` VALUES (1,'Старший врач','Старший врач','<p>ясячсячсяч</p>\r\n','<p>явчсячсячс</p>\r\n','/images/uploads/vacancy/2016-10-28-19-44-46-yumor_zebra_zhiraf_art_minimalizm_93846_1366x768.jpg',NULL,1,'2016-10-28 16:44:46','2016-10-28 16:44:46'),(2,'Уролог','Уролог','<p>ывыаываываываыв</p>\r\n','<p>выыывывывыввы</p>\r\n','/images/uploads/vacancy/2016-10-29-21-14-57-img13.jpg',NULL,1,'2016-10-29 18:14:57','2016-10-29 18:14:57');
/*!40000 ALTER TABLE `vacancies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-30 18:55:44
