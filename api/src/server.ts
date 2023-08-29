import express from 'express'
import { routes } from './routes'
import { updateDB } from '../script'

const app = express()

// updateDB()

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Server Running')
})
