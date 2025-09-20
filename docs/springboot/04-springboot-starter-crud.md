
# Generer un springboot-starter-crud
  
  Copier springboot-starter

  Renommer un project
    
    dans .project le nom du projet Eclipse

    	<name>springboot-starter-crud</name>

    dans pom.xml le artifactId + name  (identifiant Maven complet)

      <artifactId>springboot-starter-crud</artifactId>
      <name>springboot-starter-crud</name>

# Rajout du controller CRUD

  - Folders / Classes    

    New Folder / modules
      New Folder / Person
        New Class / Person
        New Class / Personcontroller


  - Person.java

    package com.ganatan.starter.modules.person;

    public class Person {
        private Long id;
        private String name;

        public Person() {}

        public Person(Long id, String name) {
            this.id = id;
            this.name = name;
        }

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
    }

  - Personcontroller.java

    package com.ganatan.starter.modules.person;

    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.*;
    import java.util.concurrent.atomic.AtomicLong;

    @RestController
    @RequestMapping("/persons")
    public class PersonController {

        private final Map<Long, Person> persons = new HashMap<>();
        private final AtomicLong counter = new AtomicLong(1);

        public PersonController() {
            create(new Person(null, "Quentin Tarantino"));
            create(new Person(null, "Christopher Nolan"));
            create(new Person(null, "Steven Spielberg"));
            create(new Person(null, "Martin Scorsese"));
            create(new Person(null, "Sofia Coppola"));
        }

        @GetMapping
        public Collection<Person> getAll() {
            return persons.values();
        }

        @GetMapping("/{id}")
        public ResponseEntity<Person> getById(@PathVariable Long id) {
            Person person = persons.get(id);
            return person != null ? ResponseEntity.ok(person) : ResponseEntity.notFound().build();
        }

        @PostMapping
        public Person create(@RequestBody Person person) {
            long id = counter.getAndIncrement();
            person.setId(id);
            persons.put(id, person);
            return person;
        }

        @PutMapping("/{id}")
        public ResponseEntity<Person> update(@PathVariable Long id, @RequestBody Person updated) {
            if (persons.containsKey(id)) {
                updated.setId(id);
                persons.put(id, updated);
                return ResponseEntity.ok(updated);
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> delete(@PathVariable Long id) {
            if (persons.containsKey(id)) {
                persons.remove(id);
                return ResponseEntity.ok().build();
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }



# Test Maven

  mvn clean	              Supprime le dossier target/ et nettoie les fichiers générés
  mvn test	              Compile et exécute les tests unitaires
  mvn package	            Crée le livrable (.jar ou .war) dans target/
  mvn spring-boot:run	    Démarre l’application Spring Boot directement

# Tester CRUD

  http://localhost:8080/persons
  http://localhost:8080/persons/1


# Test Postman

  Méthode	   URL	                              Body (JSON)

  GET	       http://localhost:8080/persons
  GET	       http://localhost:8080/persons/1

  DELETE	   http://localhost:8080/persons/2

  POST	     http://localhost:8080/persons	    { "name": "Ridley Scott" }
  PUT	       http://localhost:8080/persons/3	  { "name": "Steven Spielberg (updated)" }

# Parametres Postman sur POST / PUT
  Body / Raw / JSON  

