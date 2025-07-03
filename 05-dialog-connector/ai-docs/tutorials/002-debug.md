
# Installer dotenv	
  npm install dotenv

# Créer un fichier .env 
  MODE=development

# Modifier main.js
 if (process.env.MODE === 'development') {
    win.webContents.openDevTools()
  }  

# Modifier package.json

  npm install --save-dev cross-env

  "scripts": {
    "dev": "cross-env NODE_ENV=development electron src/main/main.js",
    "start": "cross-env NODE_ENV=production electron src/main/main.js"
  },