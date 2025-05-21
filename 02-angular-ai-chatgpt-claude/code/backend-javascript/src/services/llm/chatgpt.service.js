import axios from 'axios'

export async function reply(input) {
  try {
    const name = input.name || 'inconnu'
    const rawStyle = input.style || 'neutral'
    const rawLength = input.length || 'short'

    const lengthMap = {
      short: '20 mots maximum',
      medium: '50 mots maximum',
      long: '80 mots maximum'
    }

    const styleMap = {
      neutral: 'neutre',
      casual: 'décontracté',
      technical: 'technique',
      narrative: 'narratif',
      press: 'journalistique'
    }

    const style = styleMap[rawStyle] || 'neutre'
    const length = lengthMap[rawLength] || 'moyenne'

    const prompt = `Écris une biographie de ${name} en style ${style}, ${length}`

    console.log('📤 Prompt :', prompt)
    console.log('🔑 OpenAI Key (début) :', process.env.OPENAI_API_KEY?.slice(0, 10) + '...')

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
    console.log('✅ Réponse OK')
    return result

  } catch (error) {
    const code = error.response?.status
    const data = error.response?.data

    if (code === 401) {
      console.error('❌ Erreur 401 : Clé API OpenAI manquante ou invalide.')
    } else {
      console.error('❌ Erreur OpenAI :', code, data || error.message)
    }

    throw new Error(
      code === 401
        ? 'Erreur 401 : clé OpenAI absente ou invalide.'
        : 'Erreur OpenAI : ' + (data?.error?.message || error.message)
    )
  }
}


// import axios from 'axios'

// export async function reply(input) {
//   try {
//     const name = input.name || 'inconnu'
//     const rawStyle = input.style || 'Neutre'
//     const rawLength = input.length || 'Moyenne'

//     const lengthMap = {
//       Courte: 'courte',
//       Moyenne: 'moyenne',
//       Longue: 'longue'
//     }

//     const styleMap = {
//       Neutre: 'neutre',
//       Décontracté: 'décontracté',
//       Technique: 'technique',
//       Narratif: 'narratif',
//       Journalistique: 'journalistique'
//     }

//     const style = styleMap[rawStyle] || 'neutre'
//     const length = lengthMap[rawLength] || 'moyenne'

//     // const prompt = `Écris une biographie ${length} de ${name.replace('-', ' ')}, en style ${style}.`
//     const prompt = `Donne moi une biographie Steven Spielberg`;

//     console.log('00000000001' +  prompt)
//     console.log('00000000002' +  process.env.OPENAI_API_KEY)

//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-4-turbo',
//         messages: [{ role: 'user', content: prompt }]
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     )
//     console.log('00000000003')

//     const result = response.data.choices[0].message.content
//     return result

//   } catch (error) {
//     console.log('00000000004' + JSON.stringify(error));
//     throw new Error('Erreur OpenAI : ' + error.message)
//   }
// }
