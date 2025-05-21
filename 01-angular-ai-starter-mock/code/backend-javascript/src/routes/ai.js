import express from 'express'
import { aiServices } from '../config/ai-services.js'

const router = express.Router()
const useMock = process.env.USE_MOCK === 'true'

router.get('/:type', async (req, res) => {
  const { type } = req.params
  const input = req.body
  const service = aiServices[type]

  if (!service) {
    return res.status(404).json({ error: `Unknown service: ${type}` })
  }

  if (useMock && service.mock) {
    const response = service.mock(input)
    return res.json(response)
  }

  if (!service.available) {
    return res.status(501).json({ error: `Service ${type} not yet implemented` })
  }

  return res.status(501).json({ error: `Real mode for ${type} not yet available` })
})

export default router
