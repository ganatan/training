import express from 'express'
import { summarizeText } from './ai.controller';

const router = express.Router()

router.post('/summarize', summarizeText)

export default router
