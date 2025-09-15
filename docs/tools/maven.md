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