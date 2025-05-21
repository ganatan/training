import express from 'express'
import cors from 'cors'
import aiRoutes from './routes/ai.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.get('/api/ai/services', (req, res) => {
  res.json({
    llms: ['OpenAI', 'Claude', 'Gemini', 'Mistral', 'Perplexity', 'DeepSeek'],
    tts: ['ElevenLabs'],
    avatars: ['D-ID', 'Heygen', 'Jogg AI'],
    images: ['Leonardo AI', 'MidJourney', 'Kling AI'],
    agents: ['LangChain', 'LlamaIndex'],
    music: ['Suno AI', 'Udio AI']
  })
})

app.use('/api/ai', aiRoutes)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
