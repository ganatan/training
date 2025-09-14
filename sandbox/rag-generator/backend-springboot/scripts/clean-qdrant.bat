@echo off
echo ===============================================
echo 🚀 Starting Qdrant with Docker Compose
echo ===============================================
docker compose -f ..\docker\docker-compose.qdrant.yml up -d
