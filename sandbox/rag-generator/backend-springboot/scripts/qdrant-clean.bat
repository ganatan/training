@echo off
echo ===============================================
echo 🚀 Cleaning Qdrant with Docker Compose
echo ===============================================
docker compose -f ..\docker\docker-compose.qdrant.yml down --volumes --rmi all
