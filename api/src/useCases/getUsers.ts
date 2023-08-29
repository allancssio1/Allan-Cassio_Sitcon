import { PatienteRepository } from '../repositories/patientessRepository'

export class getPatientes {
  constructor(private patientesRepository: PatienteRepository) {}
  async execute() {
    const patientes = this.patientesRepository.findMany()
    return patientes ?? []
  }
}
