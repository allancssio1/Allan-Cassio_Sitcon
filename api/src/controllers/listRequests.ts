import { Request, Response } from 'express'
import { PrismaRequestsRepository } from '../repositories/prisma/prismaRequestsRepository'
import { FindRequests } from '../useCases/findRequests'

export async function listRequests(request: Request, response: Response) {
  const repository = new PrismaRequestsRepository()
  const requestsUseCase = new FindRequests(repository)

  const requests = await requestsUseCase.execute()
  return response.status(201).json({ requests })
}
