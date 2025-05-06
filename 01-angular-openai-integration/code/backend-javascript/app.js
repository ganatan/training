const express = require('express')
const axios = require('axios')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('application backend-javascript')
})

app.get('/person/:name', async (req, res) => {
  const name = req.params.name
  const prompt = 'Donne une biographie courte de ' + name.replace('-', ' ')
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      // model: 'gpt-3.5-turbo',
      model: 'gpt-4-turbo',
      messages: [{ role: 'user', content: prompt }]
    },
    {
      headers: {
        Authorization: 'Bearer 1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-XXXXXXXXX-XXXXXXXXX-XXXXXXXXX-XXXXXXXXX-1234-123456789-123456789-123456789-123456789-123456789-123',
        'Content-Type': 'application/json'
      }
    }
  )
  res.send(response.data.choices[0].message.content)
})

app.get('/api-lists2', (req, res) => {
  res.send('api-lists')
})

app.get('/api-lists', async (req, res) => {
  console.log('00000000001')
  try {
    const response = await axios.get('https://api.openai.com/v1/models', {
      headers: {
        Authorization: 'Bearer 1234567890-1234567890-1234567890-1234567890-1234567890-1234567890-XXXXXXXXX-XXXXXXXXX-XXXXXXXXX-XXXXXXXXX-1234-123456789-123456789-123456789-123456789-123456789-123'
      }
    })
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des modèles', details: error.message })
  }
})

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000')
})

