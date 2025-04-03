import app from './app.js'
import { config } from './config/env.js'

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`)
})
