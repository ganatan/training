import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

import * as chatgptMock from '../mock/chatgpt.mock.js'
import * as claudeMock from '../mock/claude.mock.js'

const router = express.Router()
const useMock = process.env.USE_MOCK === 'true'

router.get('/:type', async (req, res) => {
  const { type } = req.params
  const input = req.body
  if (useMock) {
    let response
    switch (type) {
      case 'chatgpt':
        response = chatgptMock.reply(input)
        break
      case 'claude':
        response = claudeMock.reply(input)
        break
      default:
        return res.status(400).json({ error: 'Mock non défini pour ce type' })
    }
    return res.json(response)
  }

  return res.status(501).json({ error: 'Mode réel non encore implémenté' })
})

export default router



// import express from 'express'
// import * as chatgpt from '../mock/chatgpt.mock.js'
// import * as claude from '../mock/claude.mock.js'

// const router = express.Router()

// router.get('/:type', async (req, res) => {
//   const { type } = req.params
//   const input = req.body

//   let response
//   switch (type) {
//     case 'chatgpt':
//       response = chatgpt.reply('chatgpt')
//       break
//     case 'claude':
//       response = claude.reply('claude')
//       break
//     default:
//       return res.status(400).json({ error: 'Type inconnu' })
//   }

//   res.json(response)
// })

// export default router
