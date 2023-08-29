import { DataRequest } from '../interfaces/RegisterRequest'
import { PatienteRepository } from '../repositories/patientesRepository'

export class RegisterRequest {
  constructor(private patientesRepository: PatienteRepository) {}
  async execute({
    date,
    hour,
    patienteId,
    procedureId,
    professionalId,
    requestTypeId,
    id,
  }: DataRequest) {
    const patientes = this.patientesRepository.register({
      date,
      hour,
      patienteId,
      procedureId,
      professionalId,
      requestTypeId,
      id,
    })

    return patientes ?? []
  }
}
