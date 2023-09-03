import './styles.css'
import { api } from '../../server/api'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import { Patiente } from '../Register/interfaces'
import { maskCPF } from '../../utils/maskCPF'
import { useNavigate } from 'react-router-dom'
import { Paginate } from '../../components/Pagionation'

export const ListUsers = () => {
  const navegator = useNavigate()

  const [patientesList, setPatientesList] = useState<Patiente[]>()
  const [patientesListDefault, setPatientesListDefault] = useState<Patiente[]>()
  const [search, setSearch] = useState<string>('')
  const [pagesNumbers, setPagesNumbers] = useState<number>(1)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    getPatienteList()
  }, [])

  useEffect(() => {
    const listFiltred: Patiente[] | [] =
      patientesListDefault && patientesListDefault.length >= 0
        ? patientesListDefault.filter(
            (patiente) =>
              (patiente &&
                patiente.cpf &&
                patiente.cpf.replace(/\D/g, '').includes(search)) ||
              (patiente.name &&
                patiente.name.toLocaleLowerCase().includes(search)),
          )
        : []
    setPatientesList(search ? listFiltred : patientesListDefault)
  }, [search])

  useEffect(() => {
    const listFiltred = patientesListDefault?.slice((page - 1) * 10)
    setPatientesList(listFiltred)
  }, [page])

  const back = () => {
    if (page > 1) setPage(page - 1)
  }

  const next = () => {
    if (page < pagesNumbers) setPage(page + 1)
  }

  const getPatienteList = async () => {
    const { data } = await api.get('/patiente/list')
    const { patientes } = data

    setPagesNumbers(Math.ceil(patientes.length / 10))

    setPatientesList(patientes.slice((page - 1) * 10, 10))
    setPatientesListDefault(patientes)
  }

  return (
    <div className="content">
      <div className="searchUsers">
        <div id="containerSearch">
          <i>
            <SearchIcon style={{ color: '#C4C4C4', marginTop: '0.1rem' }} />
          </i>
          <input
            type="text"
            id="searchUser"
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <section className="tableUsers">
          <div className="headerTable itemsTable">
            <div className="itemTable">Paciente</div>
            <div className="itemTable">Nascimento</div>
            <div className="itemTable">CPF</div>
            <div className="itemTable">Ação</div>
          </div>
          <div className="contentTable">
            {patientesList &&
              patientesList.length > 0 &&
              patientesList.map((patiente, index) => {
                return (
                  <div
                    className={`itemsTable ${
                      index % 2 === 1 ? 'colorOne' : 'colorTwo'
                    }`}
                    key={`${patiente.id}`}
                  >
                    <div className="itemTable">{patiente.name}</div>
                    <div className="itemTable">
                      {new Intl.DateTimeFormat('pt-br').format(
                        new Date(patiente.birthDate),
                      )}
                    </div>
                    <div className="itemTable">{maskCPF(patiente.cpf)}</div>
                    <div className="itemTable">
                      <button
                        className="buttonAction"
                        onClick={() => navegator(`/register/${patiente.id}`)}
                      >
                        Prosseguir
                      </button>
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
