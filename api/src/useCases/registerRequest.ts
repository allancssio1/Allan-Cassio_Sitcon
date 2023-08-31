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
  }: DataRequest) {
    const requestSuccess = this.patientesRepository.register({
      patienteId: Number(patienteId),
      procedureId: Number(procedureId),
      professionalId: Number(professionalId),
      requestTypeId: Number(requestTypeId),
      hour,
      date,
    })

    return requestSuccess ?? {}
  }
}
