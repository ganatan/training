# Rajout dans pom.xml

  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <scope>provided</scope>
  </dependency>

# Activer l’annotation processing dans l’IDE

  C’est obligatoire, sinon Lombok ne génère rien.
    🔹 IntelliJ IDEA
      File → Settings → Build, Execution, Deployment → Compiler → Annotation Processors
      Coche :
        Enable annotation processing
        ✔ Obtain processors from project classpath
      
      Redémarre IntelliJ.
        Puis Reload All Maven Projects.

# Refacto de code

  # Code Initial
      package com.ganatan.starter.modules.person;

      public class Person {
        private Long id;
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

  # Code Refacto
    package com.ganatan.starter.modules.person;


    import lombok.Data;
    import lombok.NoArgsConstructor;
    import lombok.AllArgsConstructor;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor

    public class Person {
      private Long id;
      private String name;
    }


# Details Annotation

  @Data = macro Lombok qui combine plusieurs annotations :
    @Getter
    @Setter
    @RequiredArgsConstructor
    @ToString
    @EqualsAndHashCode


    Concrètement, pour chaque champ non static :
      a) Getters / setters
      Pour :
          private Long id;
          private String name;

        Lombok génère :

        public Long getId() { return this.id; }
        public void setId(Long id) { this.id = id; }

        public String getName() { return this.name; }
        public void setName(String name) { this.name = name; }

  @NoArgsConstructor génère :
    public Person() {}        