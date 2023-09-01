import { RequestsRepository } from '../repositories/requestsRepository'

export class FindRequests {
  constructor(private repository: RequestsRepository) {}
  async execute() {
    const requests = await this.repository.findMany()
    return requests ?? []
  }
}
