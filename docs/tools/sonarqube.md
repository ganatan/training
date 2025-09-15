# Principes
  Mesurer la qualité de code (bugs, vulnérabilités, duplications, complexité).
  Vérifier la couverture de tests (via JaCoCo).
  Suivre la dette technique et appliquer des règles de qualité.
  S’intègre facilement en CI/CD (GitLab, GitHub, Jenkins…).

# Lancement
  docker-compose.yml

    services:
    sonarqube:
        image: sonarqube:community
        container_name: sonarqube
        ports:
        - "9000:9000"
        environment:
        - SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true
        volumes:
        - sonarqube_data:/opt/sonarqube/data
        - sonarqube_extensions:/opt/sonarqube/extensions
        - sonarqube_logs:/opt/sonarqube/logs

    volumes:
    sonarqube_data:
    sonarqube_extensions:
    sonarqube_logs:

# Lancement
  - Connection
    http://localhost:9000
      login       admin
      password    admin

  - Changement de password      
      password    Trustno1&234

  - Générer un token SonarQube
    http://localhost:9000

    Menu My Account → Security → Generate Token
      Name        springboot-starter-tests
      Type        User Token

      squ_xxxxxxxxxxxxxx

# Envoyer le projet à sonarqube
  mvn clean verify sonar:sonar ^
    -Dsonar.projectKey=springboot-starter-tests ^
    -Dsonar.host.url=http://localhost:9000 ^
    -Dsonar.login=TON_TOKEN      

  mvn clean verify sonar:sonar -Dsonar.projectKey=springboot-starter-tests -Dsonar.host.url=http://localhost:9000 -Dsonar.login=squ_xxxxxxxxxxxxxx
