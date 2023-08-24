import './styles.css'
import SearchIcon from '@mui/icons-material/Search'

export const ListUsers = () => {
  return (
    <div>
      <div className="searchUsers">
        <div id="containerSearch">
          <i>
            <SearchIcon style={{ color: '#C4C4C4', marginTop: '0.1rem' }} />
          </i>
          <input type="text" id="searchUser" placeholder="Pesquisar" />
        </div>
      </div>
    </div>
  )
}
