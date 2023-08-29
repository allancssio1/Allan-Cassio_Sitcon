const pacientes = [
  {
    id: 1,
    nome: 'Augusto Fernandes',
    dataNasc: '2000-08-10',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 2,
    nome: 'Maria Silva Oliveira',
    dataNasc: '2000-08-10',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 3,
    nome: 'Alfonse Smikchuz',
    dataNasc: '2002-10-02',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 4,
    nome: 'Nagela Perreira',
    dataNasc: '1997-05-16',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 5,
    nome: 'Gustavo Hernanes',
    dataNasc: '2001-07-10',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 6,
    nome: 'João Paulo Ferreira',
    dataNasc: '1995-06-26',
    CPF: '210.298.293-09',
    status: 'inativo',
  },
  {
    id: 7,
    nome: 'Julio Costa Martins',
    dataNasc: '1980-11-23',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 8,
    nome: 'Helena Marques',
    dataNasc: '2000-01-11',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 9,
    nome: 'Zira Silva',
    dataNasc: '2003-02-14',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 10,
    nome: 'João Bicalho',
    dataNasc: '1993-03-12',
    CPF: '210.298.293-09',
    status: 'inativo',
  },
  {
    id: 11,
    nome: 'Paulina Araujo',
    dataNasc: '2002-08-10',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
  {
    id: 12,
    nome: 'Carolina Rosa Silva',
    dataNasc: '2001-12-24',
    CPF: '210.298.293-09',
    status: 'ativo',
  },
]

const profissional = [
  {
    id: 1,
    nome: 'Orlando Nobrega',
    status: 'ativo',
  },
  {
    id: 2,
    nome: 'Rafaela Tenorio',
    status: 'ativo',
  },
  {
    id: 3,
    nome: 'João Paulo Nobrega',
    status: 'ativo',
  },
]

const tipoSolicitacao = [
  {
    id: 1,
    descricao: 'Consulta',
    status: 'ativo',
  },
  {
    id: 1,
    descricao: 'Exames Laboratoriais',
    status: 'ativo',
  },
]

const procedimentos = [
  {
    id: 1,
    descricao: 'Consulta Pediátrica',
    tipo_id: 1,
    status: 'ativo',
  },
  {
    id: 2,
    descricao: 'Consulta Clínico Geral',
    tipo_id: 1,
    status: 'ativo',
  },
  {
    id: 3,
    descricao: 'Hemograma',
    tipo_id: 2,
    status: 'ativo',
  },
  {
    id: 4,
    descricao: 'Glicemia',
    tipo_id: 2,
    status: 'ativo',
  },
  {
    id: 5,
    descricao: 'Triglicerídeos',
    tipo_id: 2,
    status: 'ativo',
  },
  {
    id: 5,
    descricao: 'Triglicerídeos',
    tipo_id: 2,
    status: 'ativo',
  },
]

const profissionalAtende = [
  {
    id: 1,
    procedimento_id: 1,
    profissional_id: 2,
    status: 'ativo',
  },
  {
    id: 2,
    procedimento_id: 2,
    profissional_id: 2,
    status: 'ativo',
  },
  {
    id: 3,
    procedimento_id: 2,
    profissional_id: 3,
    status: 'ativo',
  },
  {
    id: 4,
    procedimento_id: 1,
    profissional_id: 3,
    status: 'inativo',
  },
  {
    id: 5,
    procedimento_id: 3,
    profissional_id: 1,
    status: 'ativo',
  },
  {
    id: 6,
    procedimento_id: 4,
    profissional_id: 1,
    status: 'ativo',
  },
  {
    id: 7,
    procedimento_id: 5,
    profissional_id: 1,
    status: 'ativo',
  },
  {
    id: 8,
    procedimento_id: 6,
    profissional_id: 1,
    status: 'ativo',
  },
]
