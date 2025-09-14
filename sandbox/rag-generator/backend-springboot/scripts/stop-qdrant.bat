@echo off
echo ===============================================
echo 🛑 Stopping Qdrant and removing containers
echo ===============================================
docker compose -f ..\docker\docker-compose.qdrant.yml down
