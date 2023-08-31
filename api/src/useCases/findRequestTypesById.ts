import { RequestsTypesRepository } from '../repositories/requestsTypesRepository'

export class FindRequestTypesById {
  constructor(private repository: RequestsTypesRepository) {}
  async execute(id: number) {
    const requestType = await this.repository.findById(id)
    return requestType ?? null
  }
}
