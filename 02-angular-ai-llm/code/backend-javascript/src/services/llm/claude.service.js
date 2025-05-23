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
    const length = lengthMap[rawLength] || '50 mots maximum'

    const prompt = `Écris une biographie de ${name} en style ${style}, de longueur ${length}`

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json'
        }
      }
    )

    const result = response.data.content?.[0]?.text
    if (!result) throw new Error('Réponse vide de Claude.')

    return result

  } catch (error) {
    const code = error.response?.status
    const data = error.response?.data

    if (code === 401) {
      console.error('❌ Erreur 401 : Clé API Claude manquante ou invalide.')
    } else {
      console.error('❌ Erreur Claude :', code, data || error.message)
    }

    throw new Error(
      code === 401
        ? 'Erreur 401 : clé API Claude absente ou invalide.'
        : 'Erreur Claude : ' + (data?.error?.message || error.message)
    )
  }
}
