import express from 'express'

import aiRouter from './modules/ai/ai.router.js'

process.removeAllListeners('warning')

const app = express()
app.use(express.json())

app.use('/api/ai', aiRouter)

app.get('/ai', async (req, res) => {
  const { summarizeHello } = await import('./modules/ai/ai.controller.js')
  const result = await summarizeHello()
  res.json(result)
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

export default app
