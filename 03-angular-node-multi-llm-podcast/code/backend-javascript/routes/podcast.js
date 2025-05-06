const express = require('express')
const router = express.Router()
const { sendToChatGPT } = require('../services/openaiService')
const { sendToClaude } = require('../services/claudeService')

router.get('/start', async (req, res) => {
  const result = []

  let message = "Bonjour Claude, que penses-tu de l'intelligence artificielle en éducation ?"
  result.push({ speaker: 'ChatGPT', message })

  for (let i = 0; i < 5; i++) {
    const replyClaude = await sendToClaude(message)
    result.push({ speaker: 'Claude', message: replyClaude })

    const replyGPT = await sendToChatGPT(replyClaude)
    result.push({ speaker: 'ChatGPT', message: replyGPT })

    message = replyGPT
  }

  res.json(result)
})

module.exports = router
