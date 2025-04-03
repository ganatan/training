import { aiClient } from './ai.client.js'

export async function summarizeText(req, res) {
  const { text, provider } = req.body
  if (!text) return res.status(400).json({ error: 'Missing text' })

  const client = aiClient(provider || 'openai')
  const summary = await client.summarize(text)
  res.json({ summary })
}
