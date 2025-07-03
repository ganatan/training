# Rajouter le websocket


  npm install ws

'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const { WebSocketServer } = require('ws')

function startWebSocketServer() {
  const wss = new WebSocketServer({ port: 8080 })
  wss.on('connection', (ws) => {
    console.log('Client WebSocket connecté')
    ws.on('message', (message) => {
      console.log('Message reçu :', message.toString())
      ws.send(`Echo: ${message}`)
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
  win.loadFile(
    path.join(__dirname, '../renderer/angular/dist/angular-starter/browser/index.html')
  )
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  startWebSocketServer()
  createWindow()
})
