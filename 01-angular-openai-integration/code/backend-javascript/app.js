const express = require('express')
const axios = require('axios')
const app = express()

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
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    },
    {
      headers: {
        Authorization: 'Bearer 1234567890-1234567890-1234567890-1234567890-1234567890-1234567890JuBXldWDZe-vSvgu4T3BlbkFJNs4amEXT9qTYT06iQLcd-123456789-123456789-123456789-123456789-123456789-123',
        'Content-Type': 'application/json'
      }
    }
  )
  res.send(response.data.choices[0].message.content)
})

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000')
})

