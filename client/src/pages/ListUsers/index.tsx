import './styles.css'
import { api } from '../../server/api'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'
import { Patiente } from '../Register/interfaces'
import { maskCPF } from '../../utils/maskCPF'
import { useNavigate } from 'react-router-dom'
// import { Paginate } from '../../components/Pagionation'

export const ListUsers = () => {
  const navegator = useNavigate()

  const [patientesList, setPatientesList] = useState<Patiente[]>()

  useEffect(() => {
    getPatienteList()
  }, [])

  const getPatienteList = async () => {
    const { data } = await api.get('/patiente/list')
    const { patientes } = data

    setPatientesList(patientes)
  }

  return (
    <div>
      <div className="searchUsers">
        <div id="containerSearch">
          <i>
            <SearchIcon style={{ color: '#C4C4C4', marginTop: '0.1rem' }} />
          </i>
          <input type="text" id="searchUser" placeholder="Pesquisar" />
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
      {/* <Paginate /> */}
    </div>
  )
}
