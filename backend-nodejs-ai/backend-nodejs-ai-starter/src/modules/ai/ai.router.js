import express from 'express'
import { summarizeHello, summarizeText } from './ai.controller.js'

const router = express.Router()

router.get('/summary', async (req, res) => {
  const result = await summarizeHello()
  res.json(result)
})

router.post('/summarize', async (req, res) => {
  const { text } = req.body
  if (!text) return res.status(400).json({ error: 'Missing text' })
  const result = await summarizeText(text)
  res.json(result)
})

export default router
