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
        void testGetPersonNotFound() throws Exception {
            mockMvc.perform(get("/persons/999"))
                    .andExpect(status().isNotFound());
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
        void testUpdatePersonNotFound() throws Exception {
            mockMvc.perform(put("/persons/999")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{\"name\":\"Unknown\"}"))
                    .andExpect(status().isNotFound());
        }

        @Test
        void testDeletePerson() throws Exception {
            mockMvc.perform(delete("/persons/2"))
                    .andExpect(status().isOk());

            mockMvc.perform(get("/persons/2"))
                    .andExpect(status().isNotFound());
        }

        @Test
        void testDeletePersonNotFound() throws Exception {
            mockMvc.perform(delete("/persons/999"))
                    .andExpect(status().isNotFound());
        }

        @Test
        void testDeleteAndCheckListSize() throws Exception {
            mockMvc.perform(delete("/persons/5"))
                    .andExpect(status().isOk());

            mockMvc.perform(get("/persons"))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.length()").value(4));
        }
    }

# Improve de ApplicationTests

  package com.ganatan.starter;

  import org.junit.jupiter.api.Test;
  import org.springframework.boot.test.context.SpringBootTest;

  import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

  @SpringBootTest
  class ApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void mainMethodRuns() {
      assertDoesNotThrow(() -> StarterApplication.main(new String[] {}));
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

# Rajout de Sonaqube

  docker-compose.sonarqube.yml

    services:
      sonarqube:
        image: sonarqube:community
        container_name: sonarqube
        ports:
          - "9000:9000"
        environment:
          - SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
        volumes:
          - sonarqube_data:/opt/sonarqube/data
          - sonarqube_extensions:/opt/sonarqube/extensions
          - sonarqube_logs:/opt/sonarqube/logs

    volumes:
      sonarqube_data:
      sonarqube_extensions:
      sonarqube_logs:

# Lancement sonarqube      
  - Connection
    http://localhost:9000
      login       admin
      password    admin

  - Changement de password      
      password    Trustno1&234

  - Générer un token SonarQube
    http://localhost:9000

    Menu My Account → Security → Generate Token
      Name        springboot-starter-tests
      Type        User Token

      squ_xxxxxxxxxxxxxx

# Envoyer le projet à sonarqube
  
  mvn clean verify sonar:sonar ^
    -Dsonar.projectKey=springboot-starter-tests ^
    -Dsonar.host.url=http://localhost:9000 ^
    -Dsonar.login=TON_TOKEN      

  mvn clean verify sonar:sonar -Dsonar.projectKey=springboot-starter-tests -Dsonar.host.url=http://localhost:9000 -Dsonar.login=squ_xxxxxxxxxxxxxx

# Utilisation des fichiers
  
  Fichier .env pour les token sonrqube
  Fichier .bat pour executer le script sonarqube

  .env.template

      # ===================================================
      # 🌍 SonarQube configuration
      # Copy this file to ".env" and set your real values
      # ===================================================

      # 🔑 Authentication Token (generate it in SonarQube UI)
      SONAR_TOKEN=REPLACE_WITH_YOUR_SONARQUBE_TOKEN

      # 📦 Project key (unique identifier in SonarQube)
      SONAR_PROJECT_KEY=springboot-starter

      # 🌐 SonarQube server URL
      SONAR_HOST_URL=http://localhost:9000

  sonarqube-analyze.bat      


      @echo off
      setlocal enabledelayedexpansion

      echo ===============================================
      echo 🔐 Loading environment variables from ../.env
      echo ===============================================

      REM Charger toutes les variables depuis le fichier .env (racine du projet)
      for /f "usebackq tokens=1,* delims==" %%a in ("..\.env") do (
          set %%a=%%b
      )

      if "%SONAR_TOKEN%"=="" (
          echo ❌ ERROR: SONAR_TOKEN not found in .env
          pause
          exit /b 1
      )

      echo ===============================================
      echo 🚀 Running Tests + JaCoCo + SonarQube Analysis
      echo ===============================================

      REM Aller à la racine du projet (là où se trouve pom.xml)
      cd ..

      mvn clean verify sonar:sonar ^
        -Dsonar.projectKey=%SONAR_PROJECT_KEY% ^
        -Dsonar.host.url=%SONAR_HOST_URL% ^
        -Dsonar.login=%SONAR_TOKEN%

      REM Retourner dans scripts/ à la fin
      cd scripts

      echo.
      echo ===============================================
      echo ✅ Analysis complete - check SonarQube UI
      echo 🌍 %SONAR_HOST_URL%/projects
      echo ===============================================
      pause

# Exclusion des fichiers Tools si necessaire

  dans le pom.xml

			<plugin>
			  <groupId>org.jacoco</groupId>
			  <artifactId>jacoco-maven-plugin</artifactId>
			  <version>0.8.11</version>
			  <configuration>
			    <excludes>
			      <exclude>**/tools/**</exclude>
			    </excludes>
			  </configuration>
			  <executions>
			    <execution>
			      <goals>
			        <goal>prepare-agent</goal>
			      </goals>
			    </execution>
			    <execution>
			      <id>report</id>
			      <phase>test</phase>
			      <goals>
			        <goal>report</goal>
			      </goals>
			    </execution>
			  </executions>
			</plugin>




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
