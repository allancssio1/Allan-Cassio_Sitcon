import { Request, Response } from 'express'
import { PrismaProfessionalRepository } from '../repositories/prisma/prismaProfessionalRepository'
import { FindProfessionals } from '../useCases/findProfessionals'

export async function listProfessional(request: Request, response: Response) {
  const repository = new PrismaProfessionalRepository()
  const professionalsUseCase = new FindProfessionals(repository)

  const professionals = await professionalsUseCase.execute()
  return response.status(201).json({ professionals })
}
