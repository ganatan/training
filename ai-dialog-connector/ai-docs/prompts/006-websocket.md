# Prompt

  mon main js lance par electron

  'use strict'

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
    if (process.env.NODE_ENV === 'development') {
      win.webContents.openDevTools()
    }
  }

  app.whenReady().then(() => {
    createWindow()
  })


    est ce que je dois integrer le server websocket dedans pourquoi et comment


# Prompt
  Comment integrer la reponse dans l'application angular
