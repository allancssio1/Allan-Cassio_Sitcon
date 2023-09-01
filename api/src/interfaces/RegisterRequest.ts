export interface DataRequest {
  professionalId: number
  requestTypeId: number
  procedureId: number
  patienteId: number
  date: string
  hour: string
  id?: number
}

export interface RequestsResponse {
  professional_id: {
    id: number
    name: string
  }
  requestType_id: {
    id: number
    description: string
  }
  procedure_id: {
    id: number
    description: string | null
  }
  patiente_id: {
    name: string
    cpf: string
    id: number
  }
  date: string
  hour: string
}
