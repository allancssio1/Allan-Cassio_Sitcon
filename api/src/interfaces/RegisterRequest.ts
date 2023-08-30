import { Request } from '@prisma/client'

export interface DataRequest extends Request {
  professionalId: number
  requestTypeId: number
  procedureId: number
  date: string
  hour: string
  patienteId: number
}
