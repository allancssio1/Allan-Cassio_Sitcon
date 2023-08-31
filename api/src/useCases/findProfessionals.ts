import { PrismaProfessionalRepository } from '../repositories/prisma/prismaProfessionalRepository'

export class FindProfessionals {
  constructor(private repository: PrismaProfessionalRepository) {}

  async execute() {
    const professionals = await this.repository.findMany()
    const newArray = professionals.map((professional) => {
      const newAttendent = professional.Attendant.map((attendant) => {
        return {
          ...attendant,
          procedure_id: null,
          ...attendant.procedure_id,
        }
      })

      return { ...professional, Attendant: null, procedures: newAttendent }
    })
    return newArray ?? []
  }
}
