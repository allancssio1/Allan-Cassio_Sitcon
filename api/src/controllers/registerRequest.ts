import { Request, Response } from 'express'
import { PrismaPatientesRepository } from '../repositories/prisma/prismaPatientesRepository'
import { FindPatienteById } from '../useCases/findPatienteById'

export async function registerRequest(request: Request, response: Response) {
  const { professional, requestType, procedures, date, hour } = request.body
  const { patienteId } = request.params

  console.log(professional, requestType, procedures, date, hour, patienteId)

  if (
    !professional ||
    professional === '' ||
    !requestType ||
    requestType === '' ||
    !procedures ||
    procedures === '' ||
    !date ||
    date === '' ||
    !hour ||
    hour === '' ||
    !patienteId
  ) {
    return response.status(400).json({
      error: !patienteId
        ? 'Id not passed by parameters!'
        : 'Body is not being passed completely.',
    })
  }

  // const repository = new PrismaPatientesRepository()
  // const patientesUseCase = new FindPatienteById(repository)

  // const patiente = await patientesUseCase.execute(patienteId)

  return response.status(201).json()
}
