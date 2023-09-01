import { RequestsResponse } from '../interfaces/RegisterRequest'

export interface RequestsRepository {
  findMany(): Promise<RequestsResponse[]>
}
