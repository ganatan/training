import { createOpenAIClient } from './providers/openai.client.js'

export function aiClient() {
  return createOpenAIClient()
}