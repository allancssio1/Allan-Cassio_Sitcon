import { Request } from '@prisma/client'

export interface DataRequest {
  professionalId: number
  requestTypeId: number
  procedureId: number
  patienteId: number
  date: string
  hour: string
  id?: number
}
