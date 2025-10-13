
# Generer springboot-starter

 Générer le projet avec Spring Initializr
 
    https://start.spring.io

      Project           Maven
      Language          Java
      Spring Boot       3.5.5

      Group             com.ganatan
      Artifact          springboot-starter
      Name              springboot-starter
      Description       Demo project for Spring Boot Starter
      Package name      com.ganatan.starter

      Java              21
      Packaging         jar

    Ajoute les dépendances :
      Spring Web

    Clique sur Generate    

# Modifications configuration

  Probleme avec Eclipse / Modifier pom.xml
  
  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

# Lancement
  sur SpringbootStarterApplication.java
  
  Run as / Java Application

# Generer un springboot-starter-crud
  
  Copier springboot-starter

  Renommer un project
    
    dans .project le nom du projet Eclipse

    	<name>springboot-starter-crud</name>

    dans pom.xml le artifactId + name  (identifiant Maven complet)

      <artifactId>springboot-starter-crud</artifactId>
      <name>springboot-starter-crud</name>

# Modifications controllers

  - Refacto SpringbootStarterApplication
      dans src/main/java
      src/test/java

    Supprimer les anciennes configs      
      Run / run configurations

  - Execution 
    mvn clean install
    mvn clean test
    
  - Rajouter un Controller dans com.ganatan.starter.controllers
    
    New Folder / controllers
      New Class / RootController
    
        package com.ganatan.starter.controllers;

          import org.springframework.web.bind.annotation.GetMapping;
          import org.springframework.web.bind.annotation.RestController;

          @RestController
          public class RootController {

              @GetMapping("/")
              public String root() {
                  return "Spring Boot Starter is running!";
              }
          }

  - Executer
    
    http://localhost:8080
        
# Test Maven

  mvn clean	              Supprime le dossier target/ et nettoie les fichiers générés
  mvn compile	            Compile les sources Java du projet
  mvn test	              Compile et exécute les tests unitaires
  mvn package	            Crée le livrable (.jar ou .war) dans target/
  mvn install	            Installe le livrable dans le dépôt Maven local (~/.m2/repository)
  mvn deploy	            Déploie le livrable vers un dépôt Maven distant (Nexus, Artifactory…)
  mvn verify	            Vérifie l’intégrité du projet (tests, intégration, packaging)
  mvn site	              Génère la documentation du projet (rapport Maven Site)
  mvn clean install -U    install -U	Force la mise à jour des dépendances depuis Maven Central
  mvn spring-boot:run	    Démarre l’application Spring Boot directement