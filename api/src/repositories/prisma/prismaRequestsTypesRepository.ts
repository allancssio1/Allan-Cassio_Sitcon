import { prismaClient } from '../../../prisma/prismaClient'
import { RequestsTypesRepository } from '../requestsTypesRepository'

export class PrismaRequestsTypesRepository implements RequestsTypesRepository {
  async findById(id: number) {
    return await prismaClient.requestType.findFirst({
      where: {
        id,
      },
    })
  }
}
