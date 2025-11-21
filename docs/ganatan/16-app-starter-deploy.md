package.json


  "build": {
    "appId": "com.ganatan.demo",
    "productName": "GanatanElectronApp",
    "asar": false,
    "directories": {
      "output": "dist/electron"
    },
    "files": [
      "apps/electron/**/*",
      "dist/apps/frontend-angular/browser/**/*",
      "package.json",
      "!**/node_modules/**",
      "node_modules/ws/**/*",
      "node_modules/dotenv/**/*"
    ],
    "extraMetadata": {
      "main": "apps/electron/src/main.js"
    }
  },





main.js

'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')

const { WebSocketServer } = require('ws')

require('dotenv').config()

function startWebSocketServer() {
  console.log('WebSocketServer sur le port 8080')
  const wss = new WebSocketServer({ port: 8080 })

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      ws.send(`Réponse du serveur : vous avez dit "${message.toString()}"`)
    })
  })
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false
    }
  })

  console.log('00000000001:' + process.env.MODE)

  if (process.env.MODE === 'html') {
    const indexHtmlPath = path.join(
      __dirname,
      '.',
      'renderer',
      'html',
      'index.html'
    )
    win.loadFile(indexHtmlPath);
  } else {

    const indexHtmlPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'dist',
      'apps',
      'frontend-angular',
      'browser',
      'index.html'
    )
    win.loadFile(indexHtmlPath);
  }

  if (process.env.NODE_ENV === 'development') {
    if (process.env.DEVTOOLS === 'true') {
      win.webContents.openDevTools()
    }
  }
}

app.whenReady().then(() => {
  startWebSocketServer()
  createWindow()
})
