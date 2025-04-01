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


INSERT INTO profession (name) VALUES ('Acteur');
INSERT INTO profession (name) VALUES ('Actrice');
INSERT INTO profession (name) VALUES ('Réalisateur');
INSERT INTO profession (name) VALUES ('Producteur');
INSERT INTO profession (name) VALUES ('Producteur exécutif');
INSERT INTO profession (name) VALUES ('Producteur associé');
INSERT INTO profession (name) VALUES ('Scénariste');
INSERT INTO profession (name) VALUES ('Auteur');
INSERT INTO profession (name) VALUES ('Co-auteur');
INSERT INTO profession (name) VALUES ('Superviseur de script');
INSERT INTO profession (name) VALUES ('Compositeur');
INSERT INTO profession (name) VALUES ('Chef d’orchestre');
INSERT INTO profession (name) VALUES ('Superviseur musical');
INSERT INTO profession (name) VALUES ('Concepteur sonore');
INSERT INTO profession (name) VALUES ('Monteur son');
INSERT INTO profession (name) VALUES ('Cadreur');
INSERT INTO profession (name) VALUES ('Directeur de la photographie');
INSERT INTO profession (name) VALUES ('Opérateur caméra');
INSERT INTO profession (name) VALUES ('Monteur');
INSERT INTO profession (name) VALUES ('Coloriste');
INSERT INTO profession (name) VALUES ('Directeur de casting');
INSERT INTO profession (name) VALUES ('Maquilleur');
INSERT INTO profession (name) VALUES ('Costumier');
INSERT INTO profession (name) VALUES ('Directeur artistique');
INSERT INTO profession (name) VALUES ('Chef décorateur');
INSERT INTO profession (name) VALUES ('Décorateur de plateau');
INSERT INTO profession (name) VALUES ('Chef électricien');
INSERT INTO profession (name) VALUES ('Chef machiniste');
INSERT INTO profession (name) VALUES ('Machiniste');
INSERT INTO profession (name) VALUES ('Coordinateur des cascades');
INSERT INTO profession (name) VALUES ('Cascadeur');
INSERT INTO profession (name) VALUES ('Superviseur effets visuels');
INSERT INTO profession (name) VALUES ('Technicien effets spéciaux');
INSERT INTO profession (name) VALUES ('Technicien lumière');
INSERT INTO profession (name) VALUES ('Directeur de production');
INSERT INTO profession (name) VALUES ('Directeur de production délégué');
INSERT INTO profession (name) VALUES ('Assistant de production');
INSERT INTO profession (name) VALUES ('Perchman');
INSERT INTO profession (name) VALUES ('Bruiteur');
INSERT INTO profession (name) VALUES ('Animateur');
INSERT INTO profession (name) VALUES ('Voix off');
INSERT INTO profession (name) VALUES ('Responsable des lieux de tournage');
INSERT INTO profession (name) VALUES ('Storyboarder');
INSERT INTO profession (name) VALUES ('Monteur (image)');
INSERT INTO profession (name) VALUES ('Coach de dialogue');
INSERT INTO profession (name) VALUES ('Coach de dialecte');

