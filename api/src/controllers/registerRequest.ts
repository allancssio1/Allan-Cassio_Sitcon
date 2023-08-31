import { Request, Response } from 'express'
import { PrismaPatientesRepository } from '../repositories/prisma/prismaPatientesRepository'
import { RegisterRequest } from '../useCases/registerRequest'

export async function registerRequest(request: Request, response: Response) {
  const { professionalId, requestTypeId, procedureId, date, hour, id } =
    request.body

  if (
    !professionalId ||
    !requestTypeId ||
    !procedureId ||
    !date ||
    date === '' ||
    !hour ||
    hour === '' ||
    !id
  ) {
    return response.status(400).json({
      error: !id
        ? 'Id not passed by parameters!'
        : 'Body is not being passed completely.',
    })
  }

  const repository = new PrismaPatientesRepository()
  const patientesUseCase = new RegisterRequest(repository)

  const requestSuccess = await patientesUseCase.execute({
    ...request.body,
    patienteId: id,
  })

  return response.status(201).json({ success: requestSuccess ? true : false })
}
