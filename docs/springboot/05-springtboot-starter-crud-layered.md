# Rajout du pattern Layered Architecture

  Architecture en couches (Layered Architecture)
  séparation Controller → Service → Repository

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