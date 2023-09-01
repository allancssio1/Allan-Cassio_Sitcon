import { Router } from 'express'
import { listPatientes } from './controllers/listPatientes'
import { findPatienteById } from './controllers/findPatiente'
import { registerRequest } from './controllers/registerRequest'
import { listProfessional } from './controllers/listProfessional'
import { listRequestsTypes } from './controllers/listRequestsTypes'
import { listRequests } from './controllers/listRequests'

export const routes = Router()

routes.get('/patiente/list', listPatientes)
routes.get('/patiente/:patienteId', findPatienteById)
routes.post('/patiente/register', registerRequest)
routes.get('/requests', listRequests)

routes.get('/professionals', listProfessional)

routes.get('/requestsTypes/:id', listRequestsTypes)
