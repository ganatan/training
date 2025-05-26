// import express from 'express'
// import dotenv from 'dotenv'
// dotenv.config()

// import * as chatgptMock from '../mock/llm/chatgpt.mock.js'
// import * as claudeMock from '../mock/llm/claude.mock.js'

// import * as chatgptReal from '../services/llm/chatgpt.service.js'
// import * as claudeReal from '../services/llm/claude.service.js'

// const router = express.Router()
// const useMock = process.env.USE_MOCK === 'true'

// const providers = {
//   chatgpt: {
//     mock: chatgptMock,
//     real: chatgptReal
//   },
//   claude: {
//     mock: claudeMock,
//     real: claudeReal
//   }
// }

// const allowedTypes = ['biography', 'summary']

// router.post('/:type/:llm', async (req, res) => {
//   const { type, llm } = req.params
//   const input = req.body
//   const provider = providers[llm]

//   if (!provider || !allowedTypes.includes(type)) {
//     return res.json({ success: false, llm, data: 'unknown-provider-or-type' })
//   }

//   try {
//     console.log('00000000001:' + useMock);
//     console.log('00000000002":' + llm);
//     console.log('00000000003":' + type);
//     console.log('00000000004:' + JSON.stringify(input));
//     const reply = useMock
//       ? await provider.mock(input)
//       : await provider.real(input)

//     console.log('00000000005:' + JSON.stringify(reply));

//     return res.json({
//       success: true,
//       llm,
//       data: reply || ''
//     })

//   } catch (err) {
//     const message = err.message.toLowerCase()
//     const isUnauthorized = message.includes('unauthorized') || message.includes('401')

//     return res.json({
//       success: false,
//       llm,
//       data: isUnauthorized ? 'unauthorized API KEY' : 'error'
//     })
//   }
// })

// export default router



import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import * as chatgptMock from '../mock/llm/chatgpt.mock.js'
import * as claudeMock from '../mock/llm/claude.mock.js'

import * as chatgptReal from '../services/llm/chatgpt.service.js'
import * as claudeReal from '../services/llm/claude.service.js'

const router = express.Router()
const useMock = process.env.USE_MOCK === 'true'

const providers = {
  chatgpt: {
    mock: chatgptMock.reply,
    real: chatgptReal.reply
  },
  claude: {
    mock: claudeMock.reply,
    real: claudeReal.reply
  }
}

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params
  const input = req.body
  const provider = providers[llm]
  console.log('00000000001');
  console.log('00000000001:' + llm);
  console.log('00000000001:' + type);

  if (!provider) {
    return res.json({ success: false, llm, data: 'unknown-provider' })
  }

  try {
    const reply = useMock
      ? await provider.mock(type,input)
      : await provider.real(type,input)

    res.json({
      success: true,
      llm,
      data: reply || ''
    })

  } catch (err) {
    const message = err.message.toLowerCase()
    const isUnauthorized = message.includes('unauthorized') || message.includes('401')

    return res.json({
      success: false,
      llm,
      data: isUnauthorized ? 'unauthorized API KEY' : 'error'
    })
  }
})

export default router
