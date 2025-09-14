
# Generer un springboot-starter-crud

  Renommer un project

    le nom du projet Eclipse
      dans .project
    le groupId + artifactId (identifiant Maven complet)
      dans pom.xml

# Creer les tests 

  dans src/test/java !!!!!!!

  - Au Format
  
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
          mockMvc.perform(get("/"))
                  .andExpect(status().isOk())
                  .andExpect(content().string("🚀 Spring Boot Starter is running!"));
      }
  }

# Excuter les Tests
  mvn clean test