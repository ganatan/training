const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('application backend-javascript')
})

app.get('/person/:name', (req, res) => {
  const raw = req.params.name
  const formatted = raw
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  res.send(`biographie de ${formatted}`)
})

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000')
})
