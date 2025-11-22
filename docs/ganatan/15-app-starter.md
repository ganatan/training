# Projet angular-node-electron
  
  npx create-nx-workspace@latest

  nom du workspace 
    angular-node-electron
    stack
      Angular
      Integrated mono repo

  nom du projet angular
    frontend-angular
    esbuild
    jest
    playwright
    guthub-actions

  Scripts
    "start:frontend": "nx serve frontend-angular",
    "lint:frontend": "nx lint frontend-angular",
    "test:frontend": "nx test frontend-angular",
    "build:frontend": "nx build frontend-angular",
    "e2e:frontend": "nx e2e frontend-angular-e2e"

  npx nx reset
  nx add @nx/node

  nx g @nx/node:application apps/backend-typescript

    "start:backend": "nx serve backend-typescript",
    "lint:backend": "nx lint backend-typescript",
    "test:backend": "nx test backend-typescript",
    "build:backend": "nx build backend-typescript",
    "e2e:backend": "nx e2e backend-typescript-e2e"

  nx g @nx/node:application apps/electron --js

    "start:electron": "nx serve electron",
    "lint:electron": "nx lint electron",
    "test:electron": "nx test electron",
    "build:electron": "nx build electron",
    "e2e:electronts": "nx e2e electron-e2e",

# Installation electron
  npm install electron

# Deploiement
    npm run build-frontend
    npm run build-backend
    npm run build-electron

# Build angular 
  "build:frontend": "nx build frontend-angular --base-href ./",

# Start & build electron
  "start:electron": "electron apps/electron/src/main.js",


  'use strict'

  const { app, BrowserWindow } = require('electron')
  const path = require('path')

  require('dotenv').config()

  function createWindow() {
    const win = new BrowserWindow({
      width: 1024,
      height: 768,
      webPreferences: {
        nodeIntegration: false
      }
    })

    const indexHtmlPath = path.join(
        process.cwd(),
        'dist/apps/frontend-angular/browser/index.html'
      )
    console.log('00000000001:' + process.env.MODE);
    win.loadFile(indexHtmlPath)
    if (process.env.NODE_ENV === 'development') {
      if (process.env.DEVTOOLS === 'true') {
        win.webContents.openDevTools()
      }
    }
  }

  console.log('module type =', typeof require === 'function' ? 'CJS' : 'ESM')
  console.log('filename =', __filename)
  console.log('dirname  =', __dirname)

  app.whenReady().then(() => {
    createWindow()
  })



# Options WebSocket
  npm install ws

# Compilation electron
  npm install electron-builder  

  "description": "Angular + Node + Electron demo"
  "author": "ganatan"

  Déplacer electron et electron-builder dans devDependencies

  Rajouter dans dependencies
        "dotenv": "17.0.1",

  


  parametres

      "build": {
      "appId": "com.ganatan.demo",
      "productName": "GanatanElectronApp",
      "directories": {
        "output": "dist/electron"
      },
      "files": [
        "apps/electron/**/*",
        "dist/apps/frontend-angular/**/*",
        "package.json"
      ],
      "extraMetadata": {
        "main": "apps/electron/src/main.js"
      }
    },

# Tout le code electron est en javascript et comon js modules
  !!!!!!!
  donc attention


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


# Compilation frontend-angular

  This workspace is more than three days old and is not connected. Workspaces must be connected within 3 days of creation. Claim your workspace at https://cloud.nx.app. (code: 401)


  dans nx.json
  supprimer
    "nxCloudId": "691d97e3d1664320006c36c8",

# Compilation frontend erreur budget
project.json passer à 
            {
              "type": "initial",
              "maximumWarning": "1mb",
              "maximumError": "1mb"
            },

