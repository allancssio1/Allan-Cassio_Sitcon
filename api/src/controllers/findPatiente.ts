import { Request, Response } from 'express'
import { PrismaPatientesRepository } from '../repositories/prisma/prismaPatientesRepository'
import { FindPatienteById } from '../useCases/findPatienteById'

export async function findPatienteById(request: Request, response: Response) {
  const { patienteId } = request.params

  if (!patienteId)
    return response.status(400).json({ error: 'Id not passed by parameters!' })

  const repository = new PrismaPatientesRepository()
  const patientesUseCase = new FindPatienteById(repository)

  const patiente = await patientesUseCase.execute(patienteId)

  return response.status(201).json({ patiente })
}
