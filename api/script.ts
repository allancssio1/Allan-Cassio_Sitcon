import {
  pacientes,
  procedimentos,
  profissional,
  profissionalAtende,
  tipoSolicitacao,
} from './data/dataNew'
import { prismaClient } from './prisma/prismaClient'

export async function updateDB() {
  await pacientes.forEach(async (item) => {
    if (item) {
      await prismaClient.patiente.create({
        data: {
          id: item.id,
          birthDate: new Date(
            new Date(item.dataNasc).getTime() + 3 * 60 * 60 * 1000,
          ).toISOString(),
          cpf: item.CPF.replace(/\D/g, ''),
          name: item.nome,
          status: item.status === 'ativo',
        },
      })
    }

    return
  })

  await profissional.forEach(async (item) => {
    if (item) {
      await prismaClient.professional.create({
        data: {
          name: item.nome,
          id: item.id,
          status: item.status === 'ativo',
        },
      })
    }
    return
  })

  await tipoSolicitacao.forEach(async (item) => {
    if (item) {
      await prismaClient.requestType.create({
        data: {
          id: item.id,
          description: item.descricao,
          status: item.status === 'ativo',
        },
      })
    }
    return
  })

  await procedimentos.forEach(async (item) => {
    if (item) {
      await prismaClient.procedure.create({
        data: {
          id: item.id,
          description: item.descricao,
          requestTypeId: item.tipo_id,
          status: item.status === 'ativo',
        },
      })
    }
    return
  })

  await profissionalAtende.forEach(async (item) => {
    if (item) {
      await prismaClient.attendant.create({
        data: {
          procedureId: item.procedimento_id,
          id: item.id,
          professionalId: item.profissional_id,
        },
      })
    }
    return
  })

  return
}
