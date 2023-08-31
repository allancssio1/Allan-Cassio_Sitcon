import './styles.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../server/api'
import { IFormData, Patiente, Prefessional } from './interfaces'
import { maskCPF } from '../../utils/maskCPF'

export const FormUser = () => {
  const [patiente, setPatiente] = useState<Patiente>()
  const [professionals, setProfessionals] = useState<Prefessional[]>()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormData>()

  useEffect(() => {
    getDataPatiente()
    getProfessionalList()
    getRequestTypeList()
    getProcedures()
  }, [])

  const getDataPatiente = async () => {
    const { data } = await api.get('/patiente/1')
    const { patiente } = data

    const date = new Intl.DateTimeFormat('pt-br').format(
      new Date(patiente.birthDate),
    )

    setPatiente({ ...patiente, birthDate: date, cpf: maskCPF(patiente.cpf) })
  }

  const getProfessionalList = async () => {
    const { data } = await api.get('/professionals')
    const { professionals } = data
    setProfessionals(professionals)
  }

  const getRequestTypeList = async () => {}

  const getProcedures = async () => {}

  const submit = (data: IFormData) => {
    data = {
      ...data,
      ...patiente,
    }
    console.log(data)
  }

  return (
    <section>
      <button className="buttonForm buttonBack">voltar</button>
      <form onSubmit={handleSubmit(submit)}>
        <div className="rowForm">
          <div className="item">
            <label htmlFor="name">Nome do paciente</label>
            <div className="containerInput m-r">
              <input
                value={patiente?.name}
                type="text"
                id="name"
                disabled
                {...register('name')}
              />
            </div>
          </div>
          <div className="item">
            <label htmlFor="birthDate">Data de nascimento</label>
            <div className="containerInput m-r">
              <input
                value={patiente?.birthDate}
                type="text"
                id="birthDate"
                disabled
                {...register('birthDate')}
              />
            </div>
          </div>
          <div className="item">
            <label htmlFor="cpf">CPF</label>
            <div className="containerInput">
              <input
                value={patiente?.cpf}
                type="text"
                id="cpf"
                disabled
                {...register('cpf')}
              />
            </div>
          </div>
        </div>
        {(errors.procedures ||
          errors.hour ||
          errors.date ||
          errors.professional) && (
          <span>
            Atenção! Os Campos com * devem ser preechidos obrigatóriamente.
          </span>
        )}
        <div className="rowForm">
          <div className="item">
            <label htmlFor="professional">
              Profissional <span className="inportant">&#10035;</span>
            </label>
            <div className="containerInput">
              <select
                id="professional"
                {...register('professional', {
                  required: true,
                })}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {professionals &&
                  professionals.length > 0 &&
                  professionals.map((professional) => {
                    return (
                      <option key={professional.id} value={professional.id}>
                        {professional.name}
                      </option>
                    )
                  })}
              </select>
            </div>
          </div>
        </div>
        <div className="rowForm">
          <div className="item">
            <label htmlFor="requestType">
              Tipo de solicitação <span className="inportant">&#10035;</span>
            </label>
            <div className="containerInput  m-r">
              <select
                id="requestType"
                {...register('requestType', {
                  required: true,
                })}
              >
                <option value="">Selecione</option>
                <option value="1">Opção 1</option>
                <option value="1">Opção 2</option>
                <option value="1">Opção 3</option>
                <option value="1">Opção 4</option>
                <option value="1">Opção 5</option>
              </select>
            </div>
          </div>
          <div className="item">
            <label htmlFor="procedures">
              Procedimentos<span className="inportant">&#10035;</span>
            </label>
            <div className="containerInput">
              <select
                id="procedures"
                {...register('procedures', {
                  required: true,
                })}
              >
                <option value="">Selecione</option>
                <option value="1">Opção 1</option>
                <option value="1">Opção 2</option>
                <option value="1">Opção 3</option>
                <option value="1">Opção 4</option>
                <option value="1">Opção 5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="rowForm">
          <div className="item">
            <label htmlFor="date">
              Data <span className="inportant">&#10035;</span>
            </label>
            <div className="containerInput  m-r">
              <input
                type="date"
                id="date"
                {...register('date', {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="item">
            <label htmlFor="hour">
              Hora <span className="inportant">&#10035;</span>
            </label>
            <div className="containerInput">
              <input
                type="time"
                id="hour"
                {...register('hour', {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        <button className="buttonConfirm" type="submit">
          Salvar
        </button>
      </form>
    </section>
  )
}
