import express from 'express'
import { rateLimiter } from './rate-limiter'
export const app = express()

app.use(rateLimiter)

app.get('/health', (req, res) => {
  res.send('OK')
})

const port = 3000
app.listen(port, () => console.log('listening on port', port))
