# Installation Docker

  https://www.docker.com/products/docker-desktop/
  
    Docker Desktop Installer.exe

    docker --version
    docker compose version

# Installation Wsl2

  wsl -update
    Valider la reparation avec entrée

  Vérifie dans cmd :
    wsl --version
  
# Liste des data

  - Images
    docker images

  - Containers
    docker ps -a

  - Volumes
    docker volume ls
    
# Suppression
  - Images
    docker rmi -f $(docker images -q)

  - Containers
    docker rm -f $(docker ps -aq)

  - Volumes
    docker volume prune -f


# Build et Run
  
  docker pull registry.gitlab.com/ganatan/sandbox/rag-generator/frontend-angular:latest

  docker run -p 4000:4000 registry.gitlab.com/ganatan/sandbox/rag-generator/frontend-angular:latest

  docker run -d -p 4000:4000 registry.gitlab.com/ganatan/sandbox/rag-generator/frontend-angular:latest

  docker stop frontend-angular

  docker rmi registry.gitlab.com/ganatan/sandbox/rag-generator/frontend-angular:latest



docker pull https://hub.docker.com/r/ganatan/frontend-angular:latest
docker pull ganatan/frontend-angular
docker pull docker.io/ganatan/frontend-angular:latest