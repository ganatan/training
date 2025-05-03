
app.js


const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('application backend-javascript')
})

app.get('/person/:name', async (req, res) => {
  const raw = req.params.name
  const formatted = raw
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  const prompt = `Fais une biographie courte (5 lignes maximum) du réalisateur ${formatted}.`

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const result = response.data.choices?.[0]?.message?.content
    res.send(result || 'Aucune réponse générée.')
  } catch (error) {
    console.error('Erreur OpenAI:', error.message)
    res.status(500).send('Erreur lors de la génération avec ChatGPT')
  }
})

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000')
})
