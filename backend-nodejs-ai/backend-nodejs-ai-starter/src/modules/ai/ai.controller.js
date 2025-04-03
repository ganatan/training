import { aiClient } from './ai.client.js'

export async function summarizeHello() {
  const client = aiClient('openai')

  const text = `
Ridley Scott is a British film director and producer known for his visually striking and atmospheric style.
He has directed influential films such as Alien (1979), Blade Runner (1982), Gladiator (2000), and The Martian (2015).
His work spans science fiction, historical epic, and action genres.
Summarize this biography in 2 sentences.
  `

  return await client.summarize(text)
}

export async function summarizeText(text) {
  const client = aiClient('openai')
  return await client.summarize(text)
}
