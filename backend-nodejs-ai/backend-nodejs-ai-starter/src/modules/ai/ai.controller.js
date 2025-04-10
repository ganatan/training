import { createOpenAIClient } from './openai.client.js'

const openaiClient = createOpenAIClient({ mock: true })

export async function getStory(req, res) {
  try {
    const text = 'Write a short story about a robot learning emotions.'
    const result = await openaiClient.summarize(text)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function getActors(req, res) {
  try {
    const text = 'List and describe the main actors in AI development history.'
    const result = await openaiClient.summarize(text)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export async function getAiRoot(req, res) {
  try {
    let result = { summary: 1111 };
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}




// const openaiClient = createOpenAIClient({ mock: false })

// export async function getStory(req, res) {
//   const text = 'Write a short story about a robot learning emotions.'
//   const result = await openaiClient.summarize(text)
//   res.json(result)
// }

// export async function getActors(req, res) {
//   const text = 'List and describe the main actors in AI development history.'
//   const result = await openaiClient.summarize(text)
//   res.json(result)
// }

// export async function getAiRoot(req, res) {
//   const text = 'Explain what artificial intelligence is in simple terms.'
//   const result = await openaiClient.summarize(text)
//   res.json(result)
// }




// import { aiClient } from './ai.client.js'

// export async function getStory(req, res) {
//   const client = aiClient('openai')

//   const text = `
// Ridley Scott is a British film director and producer known for his visually striking and atmospheric style.
// He has directed influential films such as Alien (1979), Blade Runner (1982), Gladiator (2000), and The Martian (2015).
// His work spans science fiction, historical epic, and action genres.
// Summarize this biography in 2 sentences.
//   `

//   const result = await client.summarize(text)

//   // const result = { summary: 1111 };
//   res.json(result);
// }

// export async function getActors(req, res) {
//   const result = { summary: 2222 };
//   res.json(result);
// }

// export async function getAiRoot(req, res) {
//   const result = { summary: 3333 };
//   res.json(result);
// }


// // import { aiClient } from './ai.client.js'

// // export async function summarizeHello() {
// //   const client = aiClient('openai')

// //   const text = `
// // Ridley Scott is a British film director and producer known for his visually striking and atmospheric style.
// // He has directed influential films such as Alien (1979), Blade Runner (1982), Gladiator (2000), and The Martian (2015).
// // His work spans science fiction, historical epic, and action genres.
// // Summarize this biography in 2 sentences.
// //   `

// //   return await client.summarize(text)
// // }

// // export async function summarizeText(text) {
// //   const client = aiClient('openai')
// //   return await client.summarize(text)
// // }
