import { Patiente } from '@prisma/client'
import { DataRequest } from '../interfaces/RegisterRequest'

export interface PatienteRepository {
  findMany(): Promise<Patiente[]>
  findId(id: number): Promise<Patiente | null>
  register(data: DataRequest): Promise<any>
}
