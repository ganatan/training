npm init -y

npm install express
npm install --save-dev nodemon


// app.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('application backend-javascript')
})

app.get('/person/:name', (req, res) => {
  const name = req.params.name
  res.send(`Nom demandé : ${name}`)
})

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000')
})


"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}