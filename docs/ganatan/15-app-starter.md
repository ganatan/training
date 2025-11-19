# Projet angular-node-electron
  
  npx create-nx-workspace@latest

  nom du workspace 
    frontend-angular

  Scripts
    "start-frontend-angular": "nx serve frontend-angular",
    "lint-frontend-angular": "nx lint frontend-angular",
    "test-frontend-angular": "nx test frontend-angular",
    "build-frontend-angular": "nx build frontend-angular",
    "e2e-frontend-angular": "nx e2e frontend-angular-e2e"


  npx nx reset
  nx add @nx/node

  nx g @nx/node:application apps/backend-typescript

  nx g @nx/node:application apps/electron-typescript

  nx g @nx/node:application apps/electron-javascript --js

# Deploiement
    npm run build-frontend
    npm run build-backend
    npm run build-electron-ts


# Installation electron
  npm install electron

# Build angular 
  "build-frontend": "nx build frontend-angular --base-href ./",


# Erreur pas utile d'installer js
!!!!!!!!!!!!!!!!!!!!!!! 
nx add @nx/js


. Pourquoi @nx/js:app ne marche pas

Tu as :

nx g @nx/js:app javascript-api --js


et l’erreur :

Unable to resolve @nx/js:app.
Cannot find generator 'app' in node_modules/@nx/js/generators.json


Normal.

Le plugin @nx/js ne fournit plus de générateur d’application.

Il ne sert plus qu’à gérer des libs JS/TS et des tâches de build/typecheck. 
Nx

L’ancien générateur @nrwl/js:app a été retiré précisément pour ça. 
GitHub

➡ Conclusion : @nx/js = libs uniquement, pas d’app.
