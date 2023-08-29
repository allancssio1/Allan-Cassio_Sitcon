import { PatienteRepository } from '../repositories/patientesRepository'

interface DataRequet {
  professionalId: string
  requestTypeId: string
  proceduresId: string
  date: string
  hour: string
  patienteId: string
}

export class RegisterRequest {
  constructor(private patientesRepository: PatienteRepository) {}
  async execute({}: DataRequet) {
    const patientes = this.patientesRepository.findMany()
    return patientes ?? []
  }
}
