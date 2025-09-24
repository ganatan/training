# Principes

  Spring WebFlux, qui apporte :
  WebClient → client HTTP moderne (remplace RestTemplate).
  un moteur réactif (Reactor) → utile si tu veux du non-bloquant.
  
  Jackson est déjà inclus par défaut dans Spring Boot, via spring-boot-starter-json

# Rajout de Jackson inclus dans Springboot

  - Fichier pom.xml

  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-webflux</artifactId>
  </dependency>
