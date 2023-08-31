import { PrismaProfessionalRepository } from '../repositories/prisma/prismaProfessionalRepository'

export class FindProfessionals {
  constructor(private repository: PrismaProfessionalRepository) {}

  async execute() {
    const professionals = await this.repository.findMany()
    return professionals ?? []
  }
}
