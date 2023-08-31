import {
  pacientes,
  procedimentos,
  profissional,
  profissionalAtende,
  tipoSolicitacao,
} from './data/dataNew'
import { prismaClient } from './prisma/prismaClient'

export async function updateDB() {
  try {
    await pacientes.forEach(async (item) => {
      if (item) {
        const data = {
          id: item.id,
          birthDate: new Date(
            new Date(item.dataNasc).getTime() + 3 * 60 * 60 * 1000,
          ).toISOString(),
          cpf: item.CPF.replace(/\D/g, ''),
          name: item.nome,
          status: item.status === 'ativo' ? true : false,
        }

        await prismaClient.patiente.create({
          data,
        })
      }

      return
    })

    await profissional.forEach(async (item) => {
      if (item) {
        const data = {
          id: item.id,
          name: item.nome,
          status: item.status === 'ativo' ? true : false,
        }
        await prismaClient.professional.create({
          data,
        })
      }
      return
    })

    await tipoSolicitacao.forEach(async (item) => {
      if (item) {
        const data = {
          id: item.id,
          description: item.descricao,
          status: item.status === 'ativo' ? true : false,
        }
        await prismaClient.requestType.create({
          data,
        })
      }
      return
    })

    await procedimentos.forEach(async (item) => {
      if (item) {
        const data = {
          id: item.id,
          description: item.descricao,
          requestTypeId: item.tipo_id,
          status: item.status === 'ativo' ? true : false,
        }
        await prismaClient.procedure.create({
          data,
        })
      }
      return
    })

    await profissionalAtende.forEach(async (item) => {
      if (item) {
        const data = {
          id: item.id,
          procedureId: item.procedimento_id,
          professionalId: item.profissional_id,
        }
        await prismaClient.attendant.create({
          data,
        })
      }
      return
    })
  } catch (error) {
    console.log(error)
  }
  return
}
