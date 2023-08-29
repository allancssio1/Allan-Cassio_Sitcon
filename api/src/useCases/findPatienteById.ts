import { Patiente } from '@prisma/client'
import { PatienteRepository } from '../repositories/patientessRepository'

export class FindPatienteById {
  constructor(private patienteRepository: PatienteRepository) {}

  async execute(id: string): Promise<Patiente | null> {
    const patiente = await this.patienteRepository.findId(+id)
    return patiente
  }
}
