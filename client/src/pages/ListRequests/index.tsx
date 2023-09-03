import './styles.css'
import { api } from '../../server/api'
import { useEffect, useState } from 'react'
import { Request } from '../Register/interfaces'
import { maskCPF } from '../../utils/maskCPF'
import moment from 'moment-timezone'
import { useNavigate } from 'react-router-dom'
import { Paginate } from '../../components/Pagionation'

export const ListRequests = () => {
  const navigate = useNavigate()

  const [requests, setRequests] = useState<Request[]>()
  const [requestsDefault, setRequestsDefault] = useState<Request[]>()
  const [pagesNumbers, setPagesNumbers] = useState<number>(1)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    getRequestsList()
  }, [])

  const getRequestsList = async () => {
    const { data } = await api.get('/requests')
    const { requests } = data

    setPagesNumbers(Math.ceil(requests.length / 10))
    setRequests(requests.slice((page - 1) * 10, 10))
    setRequestsDefault(requests)
  }

  useEffect(() => {
    const listFiltred = requestsDefault?.slice((page - 1) * 10)
    setRequests(listFiltred)
  }, [page])

  const back = () => {
    if (page > 1) setPage(page - 1)
  }

  const next = () => {
    if (page < pagesNumbers) setPage(page + 1)
  }

  return (
    <div>
      <div className="searchUsers">
        <button
          className="buttonForm buttonBack"
          onClick={() => {
            navigate('/')
          }}
        >
          voltar
        </button>
        <section className="tableUsers">
          <div className="headerTable itemsTable">
            <div className="itemTable">Paciente</div>
            <div className="itemTable">CPF</div>
            <div className="itemTable">Proficional</div>
            <div className="itemTable">Data e hora</div>
          </div>
          <div className="contentTable">
            {requests &&
              requests.length > 0 &&
              requests.map((request, index) => {
                const newDate = moment(
                  new Date(
                    new Date(request.date).getTime() + 3 * 60 * 60 * 1000,
                  ).toISOString(),
                ).format('DD/MM/YYYY')

                return (
                  <div
                    className={`itemsTable ${
                      index % 2 === 1 ? 'colorOne' : 'colorTwo'
                    }`}
                    key={`${index}`}
                  >
                    <div className="itemTable">{request.patiente_id.name}</div>
                    <div className="itemTable">
                      {maskCPF(request.patiente_id.cpf)}
                    </div>
                    <div className="itemTable">
                      {request.professional_id.name}
                    </div>
                    <div className="itemTable">
                      {`${newDate} ${request.hour}`}
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
      </div>
      <Paginate
        pages={pagesNumbers}
        next={next}
        back={back}
        currtenPage={page}
        setPage={setPage}
      />
    </div>
  )
}
