# Prompt

  dans main.js 

  const { app, BrowserWindow } = require('electron')
  const path = require('path')

  function createWindow() {
    const win = new BrowserWindow({
      width: 1024,
      height: 768,
      webPreferences: {
        nodeIntegration: false
      }
    })
    win.loadFile(
      path.join(__dirname, '../renderer/angular/dist/angular-starter/browser/index.html')
    )
    win.webContents.openDevTools()
  }

  app.whenReady().then(() => {
    createWindow()
  })


  j'ai rajoute
    win.webContents.openDevTools()

  je veux une condition avec un fichier d'environnement
  devtools s'affiche si je suis en mode dev


  Comment faire
  donne les etapes precises dans un tableau

  le format du fichier .env




# Prompt

  {
    "name": "app-electron-angular",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "dev": "electron src/main/main.js",
      "start": "electron src/main/main.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "devDependencies": {
      "electron": "37.2.0"
    },
    "dependencies": {
      "dotenv": "17.0.1"
    }
  }


  mon package json
  version developpement et non dev


  comment differencier

  tiens compte de cette erreur (utilisation de cross_env je crois)
  'NODE_ENV' n’est pas reconnu en tant que commande interne