import { Professional } from '@prisma/client'

export interface ProfessionalsRepository {
  findMany(): Promise<Professional[]>
}
