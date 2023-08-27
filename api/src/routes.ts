import { Request, Response, Router } from 'express'

export const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
  return res.send('deu')
})
