import { prismaClient } from '../../../prisma/prismaClient'
import { PatienteRepository } from '../patientesRepository'

export class PrismaPatientesRepository implements PatienteRepository {
  register(data: number): Promise<any> {
    throw new Error('Method not implemented.')
  }
  async findId(id: number) {
    return await prismaClient.patiente.findFirst({
      where: { id },
    })
  }

  async findMany() {
    return await prismaClient.patiente.findMany()
  }
}
