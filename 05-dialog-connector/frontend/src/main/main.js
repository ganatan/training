'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const { WebSocketServer } = require('ws')

require('dotenv').config()

function startWebSocketServer() {
  console.log('00000000001:startWebSocketServer')
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
  console.log('00000000001:' + process.env.MODE)
  if (process.env.MODE === 'html') {
    console.log('00000000002:' + process.env.MODE)
    win.loadFile(path.join(__dirname, '../renderer/html/index.html'))
  } else {
    console.log('00000000003:' + process.env.MODE)
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


// 'use strict'

// const { app, BrowserWindow } = require('electron')
// const path = require('path')

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1024,
//     height: 768,
//     webPreferences: {
//       nodeIntegration: false
//     }
//   })
//   win.loadFile(
//     path.join(__dirname, '../renderer/angular/dist/angular-starter/browser/index.html')
//   )
//   if (process.env.NODE_ENV === 'development') {
//     win.webContents.openDevTools()
//   }
// }

// app.whenReady().then(() => {
//   createWindow()
// })
