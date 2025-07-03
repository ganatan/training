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
  win.loadFile(
    path.join(__dirname, '../renderer/angular/dist/angular-starter/browser/index.html')
  )
  console.log('00000000001:' + process.env.MODE)
  if (process.env.MODE === 'development') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindow()
})
