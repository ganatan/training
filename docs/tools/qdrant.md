
# Principes

  Quadrant = espace vectoriel en 4 parties → lien direct avec la recherche vectorielle.
  Facile à associer à l’idée de moteur de recherche vectoriel (Vector DB).

# Installation via Docker
  
  "compose:qdrant": "docker compose -f docker/docker-compose.qdrant.yml up -d",

  http://localhost:6333/healthz
  
  http://localhost:6333/dashboard#/welcome


# Utilisation avec SpringBoot

  Pom.xml


  <properties>
    <qdrant.version>1.15.0</qdrant.version>
    <io.grpc.version>1.75.0</io.grpc.version>
  </properties>

  <dependency>
      <groupId>io.grpc</groupId>
      <artifactId>grpc-netty-shaded</artifactId>
      <version>${io.grpc.version}</version>
  </dependency>
    <dependency>
        <groupId>io.grpc</groupId>
        <artifactId>grpc-protobuf</artifactId>
      <version>${io.grpc.version}</version>
    </dependency>
    <dependency>
      <groupId>io.grpc</groupId>
      <artifactId>grpc-stub</artifactId>
      <version>${io.grpc.version}</version>
    </dependency>	
	    
  .gitignore
    docker/qdrant_data/