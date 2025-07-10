# dialog-connector

Starter **Electron + Angular**  
Structure de projet pour intégrer un chatbot avec WebSocket et OpenAI.

---

## 📁 Arborescence

```
src/
  main/                    => code Electron
    main.js
  renderer/angular/        => projet Angular
```

---

## 🚀 Commandes d’amorçage

```bash
mkdir -p src/main
mkdir -p src/renderer
cd src/renderer
ng new angular-starter --style=scss --routing=false
```

---

## ⚙️ package.json

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:electron": "ng build --base-href ./",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "electron": "electron src/main/main.js"
  }
}
```

---

## 🛠 Installation des dépendances

```bash
npm init -y
npm install --save-dev electron
```

---

## 🖥️ src/main/main.js

```javascript
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
}

app.whenReady().then(() => {
  createWindow()
})
```

---

## ▶️ Lancer l’application

```bash
npm run build:electron
npm run electron
```

---

