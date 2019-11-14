create database teste ;
create table user_details (
	id int (255) primary key auto_increment,
	name varchar(255) not null,
    sobrenome varchar (255),
    email varchar(255) not null,
    password varchar(255) not null,
    telefone numeric(65),
    
    endereco varchar(255),
    numero int (255),
    bairro varchar (255),
    cidade varchar (255),
    estado varchar (255)
   
);

ALTER TABLE rasp_location MODIFY latitude decimal (65,20);
ALTER TABLE rasp_location MODIFY longitude decimal (65,20);

drop table rasp_location;
create table rasp_location(
	id int (255) primary key auto_increment,
	latitude decimal (65,15),
	longitude decimal (65,15),
	user_email varchar (255),
	rasp_id varchar (255),
    allowed  int 
);

SELECT * FROM user_details;
SELECT * FROM rasp_location;