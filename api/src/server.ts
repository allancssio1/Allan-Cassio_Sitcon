import express from 'express'
import { routes } from './routes'
import { uploadFileData } from '../uploadData'

const app = express()

uploadFileData()

app.use(routes)

app.listen(3333, () => {
  console.log('Server Running')
})
