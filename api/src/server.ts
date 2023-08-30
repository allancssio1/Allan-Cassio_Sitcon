import express from 'express'
import { routes } from './routes'
import cors from 'cors'
import { updateDB } from '../script'

const app = express()

// updateDB()
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Server Running')
})
