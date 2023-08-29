import { prismaClient } from '../../../prisma/prismaClient'
import { PatienteRepository } from '../patientessRepository'

export class PrismaPatientesRepository implements PatienteRepository {
  async findId(id: number) {
    return await prismaClient.patiente.findFirst({
      where: { id },
    })
  }

  async findMany() {
    return await prismaClient.patiente.findMany()
  }
}
