import axios from 'axios'

export async function reply(input) {
  try {
    const name = input.name || 'unknown'
    const prompt = `Write a ${input.length || 'short'} biography of ${name.replace('-', ' ')}, in ${input.style || 'neutral'} style.`

    console.log('🔹 Prompt:', prompt)

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo',
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const result = response.data.choices[0].message.content
    console.log('✅ GPT response:', result)
    return result

  } catch (error) {
    console.error('❌ Error in chatgpt.service:', error.message)
    throw new Error('OpenAI API error: ' + error.message)
  }
}


// import axios from 'axios'

// export async function reply(input) {
//   const name = input.name || 'unknown'
//   const prompt = `Write a ${input.length || 'short'} biography of ${name.replace('-', ' ')}, in ${input.style || 'neutral'} style.`
//   console.log('00000000001:');
//   const response = await axios.post(
//     'https://api.openai.com/v1/chat/completions',
//     {
//       model: 'gpt-4-turbo',
//       messages: [{ role: 'user', content: prompt }]
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         'Content-Type': 'application/json'
//       }
//     }
//   )

//   let result = response.data.choices[0].message.content;
//   console.log('00000000002:' + result);
//   return result;
// }
