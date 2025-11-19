# Site officiel
  https://nx.dev/

# Creation via github
  git clone https://github.com/nrwl/empty-template my-empty-workspace
  cd my-empty-workspace
  npm install

# Creation via nx  

  nx init

# Installation de Angular
  
  nx add @nx/angular


# Creation Manuelle du workspace

  npm add --global nx

  npx create-nx-workspace@latest

  nom du workspace 
    angular-starter

  selection angular monorepo

  nom du projet angular
    angular-routing
  
  Scripts
    "start-routing": "nx serve angular-routing",
    "lint-routing": "nx lint angular-routing",
    "test-routing": "nx test angular-routing",
    "build-routing": "nx build angular-routing",
    "e2e-routing": "nx e2e angular-routing-e2e"


# Creation de l'application angular
  
  https://nx.dev/docs/technologies/angular/introduction

  
  nx g @nx/angular:app apps/angular-component

    Scripts
    "start-component": "nx serve angular-component",
    "lint-component": "nx lint angular-component",
    "test-component": "nx test angular-component",
    "build-component": "nx build angular-component",
    "e2e-component": "nx e2e angular-component-e2e"

# Creation de librairies
  
  https://nx.dev/docs/technologies/angular/introduction
  
  nx g @nx/angular:lib libs/tailwindcomponents

  "lint-tailwindcomponents": "nx lint tailwindcomponents",
  "test-tailwindcomponents": "nx test tailwindcomponents",

# Liste des libs
  
  Fichier
    tsconfig.base.json

    exemple de code

      "paths": {
        "@ddd-starter/tailwindcomponents": [
          "libs/tailwindcomponents/src/index.ts"
        ]
      }


# Utilisation dans App
  import { Tailwindcomponents } from '@ddd-starter/tailwindcomponents';

  @Component({
    imports: [
      RouterModule,
      Tailwindcomponents
