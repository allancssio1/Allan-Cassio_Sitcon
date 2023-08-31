import { prismaClient } from '../../../prisma/prismaClient'
import { ProfessionalsRepository } from '../professionalsRepository'

export class PrismaProfessionalRepository implements ProfessionalsRepository {
  async findMany() {
    return await prismaClient.professional.findMany({
      select: {
        id: true,
        name: true,
        status: true,
        Attendant: {
          select: {
            procedure_id: true,
          },
        },
      },
    })
  }
}
