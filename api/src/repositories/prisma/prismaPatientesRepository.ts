import { prismaClient } from '../../../prisma/prismaClient'
import { PatienteRepository } from '../patientesRepository'
import { DataRequest } from '../../interfaces/RegisterRequest'

export class PrismaPatientesRepository implements PatienteRepository {
  async register(data: DataRequest) {
    return await prismaClient.request.create({ data })
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
