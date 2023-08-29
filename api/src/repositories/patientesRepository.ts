import { Patiente } from '@prisma/client'

export interface PatienteRepository {
  findMany(): Promise<Patiente[]>
  findId(id: number): Promise<Patiente | null>
  register(data: number): Promise<any>
}
