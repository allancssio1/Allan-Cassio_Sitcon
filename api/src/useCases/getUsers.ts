import { PatienteRepository } from '../repositories/patientesRepository'

export class GetPatientes {
  constructor(private patientesRepository: PatienteRepository) {}
  async execute() {
    const patientes = this.patientesRepository.findMany()
    return patientes ?? []
  }
}
