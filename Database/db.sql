create database prueba_tecnica;

-- --------------------------------------------------------

create table `Student` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(25) NOT NULL,
    `phone` varchar(15) NOT NULL,
    `email` varchar(50) NOT NULL,
)

create table `Course` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(25) NOT NULL,
    `schedule` number(2) NOT NULL,
    `id_teacher` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
)

create table `Teacher` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(25) NOT NULL,
    `phone` varchar(15) NOT NULL,
    `email` varchar(50) NOT NULL,
)

create table `StudentCourse` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_student` int(11) NOT NULL,
    `id_course` int(11) NOT NULL,
)

create table `TeacherCourse` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_teacher` int(11) NOT NULL,
    `id_course` int(11) NOT NULL,
)