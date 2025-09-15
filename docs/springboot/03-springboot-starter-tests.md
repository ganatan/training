# Creer les tests 

  dans src/test/java !!!!!!!

  - RootControllerTest
  
    package com.ganatan.starter.controllers;

    import org.junit.jupiter.api.Test;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
    import org.springframework.boot.test.context.SpringBootTest;
    import org.springframework.test.web.servlet.MockMvc;

    import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
    import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

    @SpringBootTest
    @AutoConfigureMockMvc
    class RootControllerTest {

      @Autowired
      private MockMvc mockMvc;

      @Test
      void testRootEndpoint() throws Exception {
        mockMvc.perform(get("/")).andExpect(status().isOk())
            .andExpect(content().string("🚀 Spring Boot Starter is running!"));
      }
    }


  - PersonControllerTest
  
    package com.ganatan.starter.modules.person;

    import org.junit.jupiter.api.Test;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
    import org.springframework.boot.test.context.SpringBootTest;
    import org.springframework.http.MediaType;
    import org.springframework.test.web.servlet.MockMvc;

    import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
    import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

    @SpringBootTest
    @AutoConfigureMockMvc
    class PersonControllerTest {

        @Autowired
        private MockMvc mockMvc;

        @Test
        void testGetAllPersons() throws Exception {
            mockMvc.perform(get("/persons"))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.length()").value(5))
                    .andExpect(jsonPath("$[0].name").value("Quentin Tarantino"));
        }

        @Test
        void testGetPersonById() throws Exception {
            mockMvc.perform(get("/persons/1"))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.name").value("Quentin Tarantino"));
        }

        @Test
        void testCreatePerson() throws Exception {
            mockMvc.perform(post("/persons")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\"name\":\"Ridley Scott\"}"))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.id").exists())
                    .andExpect(jsonPath("$.name").value("Ridley Scott"));
        }

        @Test
        void testUpdatePerson() throws Exception {
            mockMvc.perform(put("/persons/3")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\"name\":\"Steven Spielberg (updated)\"}"))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.id").value(3))
                    .andExpect(jsonPath("$.name").value("Steven Spielberg (updated)"));
        }

        @Test
        void testDeletePerson() throws Exception {
            mockMvc.perform(delete("/persons/2"))
                    .andExpect(status().isOk());

            mockMvc.perform(get("/persons/2"))
                    .andExpect(status().isOk())
                    .andExpect(content().string(""));
        }
    }

# Test Maven

  mvn clean	              Supprime le dossier target/ et nettoie les fichiers générés
  mvn test	              Compile et exécute les tests unitaires
  mvn package	            Crée le livrable (.jar ou .war) dans target/
  mvn spring-boot:run	    Démarre l’application Spring Boot directement

# Rajout de la couverture

  Jacoco (Java Code Coverage)

  pom.xml
    <plugin>
      <groupId>org.jacoco</groupId>
      <artifactId>jacoco-maven-plugin</artifactId>
      <version>0.8.12</version>
      <executions>
        <execution>
          <goals>
            <goal>prepare-agent</goal>
          </goals>
        </execution>
        <execution>
          <id>report</id>
          <phase>verify</phase>
          <goals>
            <goal>report</goal>
          </goals>
        </execution>
      </executions>
    </plugin>

# Test Maven

  mvn clean	              Supprime le dossier target/ et nettoie les fichiers générés
  mvn test	              Compile et exécute les tests unitaires
  mvn package	            Crée le livrable (.jar ou .war) dans target/
  mvn spring-boot:run	    Démarre l’application Spring Boot directement

  mvn clean verify
  
  Verifier
    target/site/jacoco/index.html