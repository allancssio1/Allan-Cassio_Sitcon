import { Router } from 'express'
import { listPatientes } from './controllers/listPatientes'
import { findPatienteById } from './controllers/findPatiente'
import { registerRequest } from './controllers/registerRequest'
import { listProfessional } from './controllers/listProfessional'

export const routes = Router()

routes.get('/', listPatientes)
routes.get('/patiente/:patienteId', findPatienteById)
routes.post('/patiente/:patienteId', registerRequest)

routes.get('/professionals', listProfessional)
