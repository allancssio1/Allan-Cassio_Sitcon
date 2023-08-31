import { Request, Response } from 'express'
import { PrismaPatientesRepository } from '../repositories/prisma/prismaPatientesRepository'
import { GetPatientes } from '../useCases/getPatientes'

export async function listPatientes(request: Request, response: Response) {
  const repository = new PrismaPatientesRepository()
  const patientesUseCase = new GetPatientes(repository)

  const patientes = await patientesUseCase.execute()
  return response.status(201).json({ patientes })
}
