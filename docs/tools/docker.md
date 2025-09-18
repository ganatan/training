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
