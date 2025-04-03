import express from 'express'
// import { config } from './config/env.js'

import aiRouter from './modules/ai/ai.router.js'
// import healthRouter from './modules/health/health.router.js'

const app = express()

app.use(express.json())
app.use('/api/ai', aiRouter)
// app.use('/api/health', healthRouter)

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

export default app
