import { RequestType } from '@prisma/client'

export interface RequestsTypesRepository {
  findById(id: number): Promise<RequestType | null>
}
