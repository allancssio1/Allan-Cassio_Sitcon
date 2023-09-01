import { prismaClient } from '../../../prisma/prismaClient'
import { RequestsResponse } from '../../interfaces/RegisterRequest'
import { RequestsRepository } from '../requestsRepository'

export class PrismaRequestsRepository implements RequestsRepository {
  async findMany(): Promise<RequestsResponse[]> {
    const requests = await prismaClient.request.findMany({
      select: {
        date: true,
        hour: true,
        patiente_id: {
          select: {
            name: true,
            cpf: true,
            id: true,
          },
        },
        procedure_id: {
          select: {
            id: true,
            description: true,
          },
        },
        professional_id: {
          select: {
            id: true,
            name: true,
          },
        },
        requestType_id: {
          select: {
            id: true,
            description: true,
          },
        },
      },
    })

    return requests ?? []
  }
}
