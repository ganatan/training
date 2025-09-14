@echo off
echo ===============================================
echo 🧹 Cleaning Qdrant (containers + volumes + images)
echo ===============================================
docker compose -f ..\docker\docker-compose.qdrant.yml down --volumes --rmi all
