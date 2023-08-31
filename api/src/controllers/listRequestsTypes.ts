import { Request, Response } from 'express'
import { PrismaRequestsTypesRepository } from '../repositories/prisma/prismaRequestsTypesRepository'
import { FindRequestTypesById } from '../useCases/findRequestTypesById'

export async function listRequestsTypes(request: Request, response: Response) {
  const { id } = request.params
  const repository = new PrismaRequestsTypesRepository()
  const requestTypesUseCase = new FindRequestTypesById(repository)

  const requestType = await requestTypesUseCase.execute(Number(id))
  return response.status(201).json({ requestType })
}
