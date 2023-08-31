import { Patiente } from '@prisma/client'
import { PatienteRepository } from '../repositories/patientesRepository'

export class FindPatienteById {
  constructor(private patienteRepository: PatienteRepository) {}

  async execute(id: string) {
    const patiente = await this.patienteRepository.findId(Number(id))
    return patiente
  }
}
