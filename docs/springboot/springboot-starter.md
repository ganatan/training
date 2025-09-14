
# Generer un springboot-starter

 Générer le projet avec Spring Initializr
 
    https://start.spring.io

      Project           Maven
      Language          Java
      Spring Boot       3.5.5
      Group             com.ganatan
      Artifact          springboot-starter
      Name              springboot-starter
      Package name      com.ganatan.starter
      Java              21
      Packaging         jar

    Ajoute les dépendances :
      Spring Web

    Clique sur Generate    

    Rajouter un Controller
    
    package com.ganatan.starter.controllers;

      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      public class RootController {

          @GetMapping("/")
          public String root() {
              return "🚀 Spring Boot Starter is running!";
          }
      }


      Renommer 
        SpringbootStarterApplication
          en
        StarterApplication

      Executer

        http://localhost:8080
        

# Modifier pom.xml
  
  Probleme avec Eclipse
  
  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">


