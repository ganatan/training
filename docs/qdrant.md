
# Principes

  Quadrant = espace vectoriel en 4 parties → lien direct avec la recherche vectorielle.
  Facile à associer à l’idée de moteur de recherche vectoriel (Vector DB).

# Installation via Docker
  
  "compose:qdrant": "docker compose -f docker/docker-compose.qdrant.yml up -d",

  http://localhost:6333/healthz
  
  http://localhost:6333/dashboard#/welcome


# Utilisation avec SprigBoot

  Pom.xml

  <dependency>
      <groupId>io.qdrant</groupId>
      <artifactId>client</artifactId>
      <version>1.15.0</version>
  </dependency>
  
  .gitignore
    docker/qdrant_data/