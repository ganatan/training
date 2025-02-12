# Déploiement

mvn clean package

java -jar target/backend-springboot-0.0.1-SNAPSHOT.jar


# Modifier le port du serveur HTTP
Par défaut, Spring Boot utilise port 8080.
Tu peux le changer dans application.properties :

📂 src/main/resources/application.properties

properties
  server.port=9000
  
  L'API sera accessible sur http://localhost:9000/persons.