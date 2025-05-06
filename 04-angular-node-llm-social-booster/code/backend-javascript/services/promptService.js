const axios = require('axios')
require('dotenv').config()

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages'
const API_KEY = process.env.ANTHROPIC_API_KEY

async function generateImagePrompt(message, speaker) {
  const system = "Tu es un assistant visuel. Pour chaque message, génère un prompt DALL·E pour illustrer le message sous forme d’image stylisée. Claude = sarcastique, GPT = optimiste, Animateur = neutre. Réponds uniquement par le prompt, sans explication."

  const userPrompt = `Personnage : ${speaker}\nMessage : "${message}"\nQuel prompt DALL·E utiliser ?`

  const response = await axios.post(
    CLAUDE_API_URL,
    {
      model: 'claude-3-sonnet-20240229',
      max_tokens: 200,
      temperature: 0.7,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: userPrompt }
      ]
    },
    {
      headers: {
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      }
    }
  )

  return response.data.content[0].text.trim()
}

module.exports = { generateImagePrompt }
