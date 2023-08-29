import { Router } from 'express'
import { listPatientes } from './controllers/listPatientes'
import { findPatienteById } from './controllers/findPatiente'
import { registerRequest } from './controllers/registerRequest'

export const routes = Router()

routes.get('/', listPatientes)
routes.get('/:patientId', findPatienteById)
routes.post('/:patientId', registerRequest)
