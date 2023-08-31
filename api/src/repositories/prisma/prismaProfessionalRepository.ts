import { prismaClient } from '../../../prisma/prismaClient'
import { ProfessionalsRepository } from '../professionalsRepository'

export class PrismaProfessionalRepository implements ProfessionalsRepository {
  async findMany() {
    return await prismaClient.professional.findMany()
  }
}
