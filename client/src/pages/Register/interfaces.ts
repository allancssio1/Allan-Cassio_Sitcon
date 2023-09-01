export interface Patiente {
  id: number
  name: string
  birthDate: string
  cpf: string
}

export interface Procedure {
  id: number
  description: string
  status: boolean
  requestTypeId: number
}

export interface RequestType {
  id: number
  description: string
  status: boolean
}

export interface Request {
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

export interface Prefessional {
  id: number
  name: string
  status: boolean
  procedures: {
    id: number
    description: string
    status: boolean
    requestTypeId: number
  }[]
}

export interface IFormData {
  name: string
  birthDate: string
  cpf: string
  professionalId: number
  requestTypeId: number
  procedureId: number
  date: string
  hour: string
}
