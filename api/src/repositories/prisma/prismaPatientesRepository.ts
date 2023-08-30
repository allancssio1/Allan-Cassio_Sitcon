import { prismaClient } from '../../../prisma/prismaClient'
import { PatienteRepository } from '../patientesRepository'
import { DataRequest } from '../../interfaces/RegisterRequest'

export class PrismaPatientesRepository implements PatienteRepository {
  register(data: DataRequest): Promise<any> {
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
