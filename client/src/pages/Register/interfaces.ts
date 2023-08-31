export interface Patiente {
  name: string
  birthDate: string
  cpf: string
}

export interface Prefessional {
  id: number
  name: string
  status: boolean
}

export interface IFormData {
  name: string
  birthDate: string
  cpf: string
  professional: number
  requestType: number
  procedures: number
  date: string
  hour: string
}
