import express from 'express'
import { getStory, getActors, getAiRoot } from './ai.controller.js'

const router = express.Router()

router.get('/story', getStory)
router.get('/actors', getActors)
router.get('/', getAiRoot)

export default router



// import express from 'express'
// import { getStory, getActors, getAiRoot } from './ai.controller.js'

// const router = express.Router()

// router.get('/story', getStory)
// router.get('/actors', getActors)
// router.get('/', getAiRoot)

// export default router



// import express from 'express'

// const router = express.Router()

// router.get('/story', async (req, res) => {
//   let result = { summary: 1111 };
//   res.json(result)
// })

// router.get('/actors', async (req, res) => {
//   let result = { summary: 2222 };
//   res.json(result)
// })

// router.get('/', async (req, res) => {
//   let result = { summary: 3333 };
//   res.json(result)
// })


// export default router
