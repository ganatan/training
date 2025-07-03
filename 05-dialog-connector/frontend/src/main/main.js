'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const { WebSocketServer } = require('ws')

require('dotenv').config()

function startWebSocketServer() {
  console.log('WebSocketServer démarré sur le port 8080')
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
  if (process.env.MODE === 'html') {
    win.loadFile(path.join(__dirname, '../renderer/html/index.html'))
  } else {
    win.loadFile(path.join(__dirname, '../renderer/angular/dist/angular-starter/browser/index.html'))
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

