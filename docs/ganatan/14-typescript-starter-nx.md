# Creation Manuelle du workspace

  npm add --global nx

  npx create-nx-workspace@latest

  nom du workspace 
    typescript-starter

  selection node monorepo

  nom du projet node
    typescript-routing
  
  Scripts
    "start-routing": "nx serve typescript-routing",
    "lint-routing": "nx lint typescript-routing",
    "test-routing": "nx test typescript-routing",
    "build-routing": "nx build typescript-routing",
    "e2e-routing": "nx e2e typescript-routing-e2e"


# Rajout d'une application
  nx g @nx/node:application apps/typescript-api