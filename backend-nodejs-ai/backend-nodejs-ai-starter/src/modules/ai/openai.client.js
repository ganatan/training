import OpenAI from 'openai'
import config from '../../config/config.js'

export function createOpenAIClient({ mock = false } = {}) {
  if (mock) {
    async function summarize(text) {
      const result = {
        summary: 'This is a mock summary.',
        inputTokens: 10,
        outputTokens: 20,
        totalTokens: 30,
        cost: '$0.000350'
      }
      console.log('MOCK_SUMMARY:', JSON.stringify(result))
      return result
    }

    return { summarize }
  }

  const openai = new OpenAI({ apiKey: config.openaiKey })

  async function summarize(text) {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You summarize texts.' },
        { role: 'user', content: text }
      ]
    })

    const summary = response.choices[0].message.content.trim()
    const usage = response.usage

    const inputTokens = usage.prompt_tokens
    const outputTokens = usage.completion_tokens
    const totalTokens = usage.total_tokens

    const cost = (
      (inputTokens * 0.005 + outputTokens * 0.015) / 1000
    ).toFixed(6)

    const result = {
      summary,
      inputTokens,
      outputTokens,
      totalTokens,
      cost: `$${cost}`
    }

    console.log('OPENAI_SUMMARY:', JSON.stringify(result))
    return result
  }

  return { summarize }
}


// import OpenAI from 'openai'
// import config from '../../../config/config.js'

// export function createOpenAIClient({ mock = false } = {}) {
//   if (mock) {
//     async function summarize(text) {
//       const result = {
//         summary: 'This is a mock summary.',
//         inputTokens: 10,
//         outputTokens: 20,
//         totalTokens: 30,
//         cost: '$0.000350'
//       }
//       console.log('MOCK_SUMMARY:', JSON.stringify(result))
//       return result
//     }

//     return { summarize }
//   }

//   const openai = new OpenAI({ apiKey: config.openaiKey })

//   async function summarize(text) {
//     const response = await openai.chat.completions.create({
//       model: 'gpt-4o',
//       messages: [
//         { role: 'system', content: 'You summarize texts.' },
//         { role: 'user', content: text }
//       ]
//     })

//     const summary = response.choices[0].message.content.trim()
//     const usage = response.usage

//     const inputTokens = usage.prompt_tokens
//     const outputTokens = usage.completion_tokens
//     const totalTokens = usage.total_tokens

//     const cost = (
//       (inputTokens * 0.005 + outputTokens * 0.015) / 1000
//     ).toFixed(6)

//     const result = {
//       summary,
//       inputTokens,
//       outputTokens,
//       totalTokens,
//       cost: `$${cost}`
//     }

//     console.log('OPENAI_SUMMARY:', JSON.stringify(result))
//     return result
//   }

//   return { summarize }
// }


// import OpenAI from 'openai'
// import config from '../../../config/config.js';

// export function createOpenAIClient() {
//   const openai = new OpenAI({ apiKey: config.openaiKey })

//   async function summarize(text) {
//     const response = await openai.chat.completions.create({
//       model: 'gpt-4o',
//       messages: [
//         { role: 'system', content: 'You summarize texts.' },
//         { role: 'user', content: text }
//       ]
//     })

//     const summary = response.choices[0].message.content.trim()
//     const usage = response.usage

//     const inputTokens = usage.prompt_tokens
//     const outputTokens = usage.completion_tokens
//     const totalTokens = usage.total_tokens

//     const cost = (
//       (inputTokens * 0.005 + outputTokens * 0.015) / 1000
//     ).toFixed(6)
//     let result = {
//       summary,
//       inputTokens,
//       outputTokens,
//       totalTokens,
//       cost: `$${cost}`
//     }
//     console.log('00000000001:' + JSON.stringify(result));
//     return result;
//   }

//   return { summarize }
// }
