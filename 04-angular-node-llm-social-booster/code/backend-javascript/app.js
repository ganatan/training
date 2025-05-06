const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const { generateImagePrompt } = require('./services/promptService')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('angular-node-llm-social-booster')
})

app.get('/generate-prompts', async (req, res) => {
  try {
    // const { filename } = req.body
    let filename = 'mock-podcast.json';
    if (!filename) return res.status(400).json({ error: 'filename manquant' })

    const inputPath = path.join(__dirname, 'conversations', filename)
    if (!fs.existsSync(inputPath)) {
      return res.status(404).json({ error: 'Fichier non trouvé' })
    }

    const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))
    const enriched = []

    for (const entry of data) {
      const { speaker, message } = entry
      try {
        const prompt = await generateImagePrompt(message, speaker)
        enriched.push({ speaker, message, prompt })
      } catch (err) {
        enriched.push({ speaker, message, error: err.message })
      }
    }

    const outFilename = filename.replace('.json', '-with-prompts.json')
    const outputPath = path.join(__dirname, 'conversations', outFilename)
    fs.writeFileSync(outputPath, JSON.stringify(enriched, null, 2))

    res.json({ success: true, file: outFilename, items: enriched })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000')
})
