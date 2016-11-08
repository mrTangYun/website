-- phpMyAdmin SQL Dump
-- version 3.3.3
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2012 年 06 月 11 日 19:30
-- 服务器版本: 5.1.50
-- PHP 版本: 5.3.9-ZS5.6.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `gforce`
--

-- --------------------------------------------------------

--
-- 表的结构 `gforce_race_record`
--

DROP TABLE IF EXISTS `gforce_race_record`;
CREATE TABLE IF NOT EXISTS `gforce_race_record` (
  `rid` bigint(10) unsigned NOT NULL AUTO_INCREMENT,
  `mid` bigint(10) NOT NULL,
  `race_id` smallint(5) NOT NULL,
  `record` bigint(10) NOT NULL,
  `r_time` int(10) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `gforce_race_record`
--


-- --------------------------------------------------------

--
-- 表的结构 `gforce_race_request`
--

DROP TABLE IF EXISTS `gforce_race_request`;
CREATE TABLE IF NOT EXISTS `gforce_race_request` (
  `r_id` bigint(10) unsigned NOT NULL AUTO_INCREMENT,
  `mid` bigint(10) NOT NULL,
  `race_id` int(5) NOT NULL,
  `r_start` int(10) NOT NULL,
  `r_end` int(10) NOT NULL,
  `r_hash` varchar(30) NOT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `gforce_race_request`
--


-- --------------------------------------------------------

--
-- 表的结构 `gforce_race_scores`
--

DROP TABLE IF EXISTS `gforce_race_scores`;
CREATE TABLE IF NOT EXISTS `gforce_race_scores` (
  `s_id` bigint(10) unsigned NOT NULL AUTO_INCREMENT,
  `mid` bigint(10) NOT NULL,
  `race_id` int(5) NOT NULL,
  `scores` int(10) NOT NULL,
  `r_time` int(10) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `gforce_race_scores`
--

