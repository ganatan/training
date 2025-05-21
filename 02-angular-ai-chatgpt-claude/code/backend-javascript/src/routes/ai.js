import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import * as chatgptMock from '../mock/llm/chatgpt.mock.js'
import * as claudeMock from '../mock/llm/claude.mock.js'
import * as chatgptReal from '../services/llm/chatgpt.service.js'

const router = express.Router()
const useMock = process.env.USE_MOCK === 'true'

const providers = {
  chatgpt: {
    mock: chatgptMock.reply,
    real: chatgptReal.reply
  },
  claude: {
    mock: claudeMock.reply,
    real: null 
  }
}

router.post('/biography/:llm', async (req, res) => {
  const { llm } = req.params
  const input = req.body
  const provider = providers[llm]

  if (!provider) {
    return res.status(404).json({ success: false, error: `Unknown provider: ${llm}` })
  }

  try {
    const reply = useMock
      ? await provider.mock(input)
      : await provider.real?.(input)

    if (!reply) {
      return res.status(501).json({ success: false, error: `Real service for ${llm} not implemented` })
    }

    res.json({
      success: true,
      llm,
      data: reply
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      llm,
      error: err.message || 'Unexpected error'
    })
  }
})

export default router

