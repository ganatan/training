-- Domains for text fields
CREATE DOMAIN dom_char AS char(1) DEFAULT '';

CREATE DOMAIN dom_comment AS varchar(200) DEFAULT '';

CREATE DOMAIN dom_comment_long AS varchar(400) DEFAULT '';

CREATE DOMAIN dom_comment_xlong AS varchar(1000) DEFAULT '';

CREATE DOMAIN dom_lib AS varchar(50) DEFAULT '';

CREATE DOMAIN dom_lib_short AS varchar(20) DEFAULT '';

CREATE DOMAIN dom_lib_long AS varchar(100) DEFAULT '';

CREATE DOMAIN dom_lib_xlong AS varchar(200) DEFAULT '';

CREATE DOMAIN dom_text AS text DEFAULT '';

-- Domains for date/time fields
CREATE DOMAIN dom_date AS date DEFAULT NULL;

CREATE DOMAIN dom_datetime AS timestamp with time zone DEFAULT NULL;

CREATE DOMAIN dom_time AS time DEFAULT NULL;

-- Domains for boolean fields
CREATE DOMAIN dom_boolean AS boolean DEFAULT false;

-- Domains for numeric fields
CREATE DOMAIN dom_float AS float DEFAULT 0;

CREATE DOMAIN dom_integer AS integer DEFAULT 0;

CREATE DOMAIN dom_bigint AS bigint DEFAULT 0;

CREATE DOMAIN dom_numeric AS numeric(15, 2) DEFAULT 0;

-- Domains for keys
CREATE DOMAIN dom_fk AS integer DEFAULT NULL;

CREATE DOMAIN dom_pk AS integer DEFAULT NULL;

-- Special domains
CREATE DOMAIN dom_uuid AS uuid DEFAULT NULL;



CREATE SEQUENCE continent_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE continent_id_seq OWNER TO postgres;

CREATE TABLE continent (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('continent_id_seq' :: regclass),
  code dom_lib_short NOT NULL,
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  area dom_integer DEFAULT 0,
  population dom_bigint DEFAULT 0,
  countries_count dom_integer DEFAULT 0
);

CREATE SEQUENCE country_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE country_id_seq OWNER TO postgres;

CREATE TABLE country (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('country_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib DEFAULT '',
  continent_id dom_fk,
  iso_numeric dom_lib NOT NULL,
  iso_alpha2 dom_lib NOT NULL,
  iso_alpha3 dom_lib NOT NULL,
  flag dom_lib
);

CREATE SEQUENCE city_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE city_id_seq OWNER TO postgres;

CREATE TABLE city (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('city_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  country_id dom_fk,
  capital dom_boolean DEFAULT false
);

CREATE SEQUENCE person_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE person_id_seq OWNER TO postgres;

CREATE TABLE person (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('person_id_seq' :: regclass),
  name dom_lib NOT NULL,
  wikipedia_link dom_lib NOT NULL,
  birth_date dom_date,
  birth_city_id dom_fk,
  death_date dom_date,
  death_city_id dom_fk,
  gender_id dom_fk,
  image dom_lib
);


CREATE SEQUENCE profession_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1;

ALTER SEQUENCE profession_id_seq OWNER TO postgres;

CREATE TABLE profession (
  id dom_pk PRIMARY KEY NOT NULL DEFAULT nextval('profession_id_seq' :: regclass),
  name dom_lib NOT NULL
);



INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('AF', 'Africa', 'Africa', 30370000, 1287920000, 54);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('AN', 'Antarctica', 'Antarctica', 14000000, 4490, 0);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('AS', 'Asia', 'Asia', 44579000, 4545133000, 47);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('OC', 'Australia', 'Australia_(continent)', 8600000, 41261000, 14);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('EU', 'Europe', 'Europe', 10180000, 742648000, 45);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('NA', 'North America', 'North_America', 24709000, 587615000, 23);
INSERT INTO continent (code, name, wikipedia_link, area, population, countries_count) 
VALUES ('SA', 'South America', 'South_America', 17840000, 428240000, 12);

INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('United States','United_States','US','USA','660','us.png',
(select id from continent where code='NA'));
INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('Jersey','Jersey','JE','JEY','832','je.png',
(select id from continent where code='EU'));
INSERT INTO country (name,wikipedia_link,iso_numeric,iso_alpha2,iso_alpha3,flag,continent_id) 
VALUES('Sweden','Sweden','SE','SWE','752','se.png',
(select id from continent where code='EU'));


INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('New York','New_York_City',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Modesto','Modesto,_California',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Syracus','Syracuse,_New_York',false,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Saint Helier','Saint_Helier',false,
(select id from country where iso_numeric='JE'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Stockholm','Stockholm',true,
(select id from country where iso_numeric='SE'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Fresno, California','Fresno,_California',true,
(select id from country where iso_numeric='US'));
INSERT INTO city ( name,wikipedia_link,capital,country_id) 
VALUES('Detroit','Detroit',true,
(select id from country where iso_numeric='US'));

INSERT INTO city (name, wikipedia_link, capital, country_id)
VALUES('Evanston', 'Evanston,_Illinois', false,
  (SELECT id FROM country WHERE iso_numeric = 'US'));

INSERT INTO city (name, wikipedia_link, capital, country_id)
VALUES('Amsterdam', 'Amsterdam,_New_York', false,
  (SELECT id FROM country WHERE iso_numeric = 'US'));


INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) 
VALUES('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',
(select id from city where wikipedia_link='New_York_City'));

INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) 
VALUES('Jeremy Renner','Jeremy_Renner','1971-01-07',
(select id from city where wikipedia_link='Modesto,_California')
);

INSERT INTO person (name, wikipedia_link, birth_date, death_date, birth_city_id)
VALUES('Charlton Heston', 'Charlton_Heston', '1923-10-04', '2008-04-05',
  (SELECT id FROM city WHERE wikipedia_link = 'Evanston,_Illinois'));

INSERT INTO person (name, wikipedia_link, birth_date, death_date, birth_city_id)
VALUES('Kirk Douglas', 'Kirk_Douglas', '1916-12-09', '2020-02-05',
  (SELECT id FROM city WHERE wikipedia_link = 'Amsterdam,_New_York'));


INSERT INTO profession (name) VALUES ('Actor');
INSERT INTO profession (name) VALUES ('Actress');
INSERT INTO profession (name) VALUES ('Director');
INSERT INTO profession (name) VALUES ('Producer');
INSERT INTO profession (name) VALUES ('Executive Producer');
INSERT INTO profession (name) VALUES ('Associate Producer');
INSERT INTO profession (name) VALUES ('Screenwriter');
INSERT INTO profession (name) VALUES ('Writer');
INSERT INTO profession (name) VALUES ('Co-Writer');
INSERT INTO profession (name) VALUES ('Script Supervisor');
INSERT INTO profession (name) VALUES ('Composer');
INSERT INTO profession (name) VALUES ('Conductor');
INSERT INTO profession (name) VALUES ('Music Supervisor');
INSERT INTO profession (name) VALUES ('Sound Designer');
INSERT INTO profession (name) VALUES ('Sound Editor');
INSERT INTO profession (name) VALUES ('Cinematographer');
INSERT INTO profession (name) VALUES ('Director of Photography');
INSERT INTO profession (name) VALUES ('Camera Operator');
INSERT INTO profession (name) VALUES ('Film Editor');
INSERT INTO profession (name) VALUES ('Colorist');
INSERT INTO profession (name) VALUES ('Casting Director');
INSERT INTO profession (name) VALUES ('Makeup Artist');
INSERT INTO profession (name) VALUES ('Costume Designer');
INSERT INTO profession (name) VALUES ('Art Director');
INSERT INTO profession (name) VALUES ('Production Designer');
INSERT INTO profession (name) VALUES ('Set Decorator');
INSERT INTO profession (name) VALUES ('Gaffer');
INSERT INTO profession (name) VALUES ('Key Grip');
INSERT INTO profession (name) VALUES ('Grip');
INSERT INTO profession (name) VALUES ('Stunt Coordinator');
INSERT INTO profession (name) VALUES ('Stunt Performer');
INSERT INTO profession (name) VALUES ('Visual Effects Supervisor');
INSERT INTO profession (name) VALUES ('Special Effects Technician');
INSERT INTO profession (name) VALUES ('Lighting Technician');
INSERT INTO profession (name) VALUES ('Unit Production Manager');
INSERT INTO profession (name) VALUES ('Line Producer');
INSERT INTO profession (name) VALUES ('Production Assistant');
INSERT INTO profession (name) VALUES ('Boom Operator');
INSERT INTO profession (name) VALUES ('Foley Artist');
INSERT INTO profession (name) VALUES ('Animator');
INSERT INTO profession (name) VALUES ('Voice Actor');
INSERT INTO profession (name) VALUES ('Location Manager');
INSERT INTO profession (name) VALUES ('Storyboard Artist');
INSERT INTO profession (name) VALUES ('Editor');
INSERT INTO profession (name) VALUES ('Dialogue Coach');
INSERT INTO profession (name) VALUES ('Dialect Coach');
