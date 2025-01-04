import express, { json } from 'express'
import logger from './src/middleware/logger.js'
import { router } from './src/Routes/index.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(logger)
app.use('/api/v1/', router)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}
  access it with the link http://localhost:${PORT}/`)
})
