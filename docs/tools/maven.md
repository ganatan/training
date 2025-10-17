# Installation Maven
  
  https://maven.apache.org/download.cgi

  apache-maven-3.9.11-bin.zip
    Decompresser dans 
    D:\hal\apache-maven-3.9.11\bin

  Rajouter le Path
    dans Variables d'environnement
    
    D:\hal\apache-maven-3.9.11\bin
    Tester 
      mvn -version

# Compatibilite Maven / Java

Java	Maven minimum	Plugin compiler minimum

8	    3.0             3.3
11	    3.6	            3.8
17	    3.8.4	        3.10
21	    3.9.5	        3.12
22	    3.9.6	        3.13
23	    3.9.6	        3.13
24	    3.9.7	        3.13
25	    3.9.9	        3.13

# Commandes

Commande	            Description

mvn clean	            Supprime le dossier target/ et nettoie les fichiers générés
mvn compile	            Compile les sources Java du projet
mvn test	            Compile et exécute les tests unitaires
mvn package	            Crée le livrable (.jar ou .war) dans target/
mvn install	            Installe le livrable dans le dépôt Maven local (~/.m2/repository)
mvn deploy	            Déploie le livrable vers un dépôt Maven distant (Nexus, Artifactory…)
mvn verify	            Vérifie l’intégrité du projet (tests, intégration, packaging)
mvn site	            Génère la documentation du projet (rapport Maven Site)
mvn clean install -U    install -U	Force la mise à jour des dépendances depuis Maven Central
mvn spring-boot:run	    Démarre l’application Spring Boot directement