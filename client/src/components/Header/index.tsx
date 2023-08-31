import './styles.css'

export const Header = () => {
  return (
    <header>
      <button
        className="clinical-request__button"
        onClick={() => (window.location.pathname = '/')}
      >
        Solicitação Clínica
      </button>
      <button
        className="request-list__button"
        onClick={() => (window.location.pathname = '/list/request')}
      >
        Lista de Solicitação
      </button>
    </header>
  )
}
