# Rajout de JPA et HIBERNATE

  - Modification du pom.xml

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>		
	<dependency>
		<groupId>org.postgresql</groupId>
		<artifactId>postgresql</artifactId>
		<scope>runtime</scope>
	</dependency>
	<dependency>
		<groupId>com.oracle.database.jdbc</groupId>
		<artifactId>ojdbc11</artifactId>
		<scope>runtime</scope>
	</dependency>		

# Test Maven

  mvn clean
  mvn test
  mvn package
  mvn spring-boot:run
  mvn clean verify

    Verifier le rapport
      target/site/jacoco/index.html

  
  mvn checkstyle:check                Vérifier uniquement Checkstyle
  mvn checkstyle:checkstyle           Vérifier + rapport HTML

    Rapport dans
      target/reports/checkstyle.html

# Rajout des services et repository
	- Person

    package com.ganatan.starter.modules.person;

    import jakarta.persistence.*;

    @Entity
    @Table(name = "person")
    public class Person {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      @Column(nullable = false, length = 100)
      private String name;

      public Person() {
      }

      public Person(Long id, String name) {
        this.id = id;
        this.name = name;
      }

      public Long getId() {
        return id;
      }

      public void setId(Long id) {
        this.id = id;
      }

      public String getName() {
        return name;
      }

      public void setName(String name) {
        this.name = name;
      }
    }

  - PersonController

    package com.ganatan.starter.modules.person;

    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    @RequestMapping("/persons")
    public class PersonController {

      private final PersonService service;

      public PersonController(PersonService service) {
        this.service = service;
      }

      @GetMapping
      public List<Person> getAll() {
        return service.getAll();
      }

      @GetMapping("/{id}")
      public ResponseEntity<Person> getById(@PathVariable Long id) {
        return service.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
      }

      @PostMapping
      public ResponseEntity<Person> create(@RequestBody Person person) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(person));
      }

      @PutMapping("/{id}")
      public ResponseEntity<Person> update(@PathVariable Long id, @RequestBody Person updated) {
        return service.update(id, updated).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
      }

      @DeleteMapping("/{id}")
      public ResponseEntity<Void> delete(@PathVariable Long id) {
        return service.delete(id) ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
      }
    }

  - PersonRepository

    package com.ganatan.starter.modules.person;

    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;

    @Repository
    public interface PersonRepository extends JpaRepository<Person, Long> {
    }

  - PersonService

    package com.ganatan.starter.modules.person;

    import org.springframework.stereotype.Service;

    import java.util.List;
    import java.util.Optional;

    @Service
    public class PersonService {

      private final PersonRepository repository;

      public PersonService(PersonRepository repository) {
        this.repository = repository;
      }

      public List<Person> getAll() {
        return repository.findAll();
      }

      public Optional<Person> getById(Long id) {
        return repository.findById(id);
      }

      public Person create(Person person) {
        return repository.save(person);
      }

      public Optional<Person> update(Long id, Person updated) {
        if (repository.existsById(id)) {
          updated.setId(id);
          return Optional.of(repository.save(updated));
        }
        return Optional.empty();
      }

      public boolean delete(Long id) {
        if (repository.existsById(id)) {
          repository.deleteById(id);
          return true;
        }
        return false;
      }
    }

# Utilisation de Mockito pour les tests
  
  Mockito est un framework de mocking pour créer des objets "faux" (mocks) qui simulent le comportement de vraies dépendances.

  Le starter SpringBoot inclut JUnit Jupiter, Mockito core, Mockito JUnit, Hamcrest, AssertJ.