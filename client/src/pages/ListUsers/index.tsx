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
        <section className="tableUsers">
          <div className="headerTable itemsTable">
            <div className="itemTable">Paciente</div>
            <div className="itemTable">Nascimento</div>
            <div className="itemTable">CPF</div>
            <div className="itemTable">Ação</div>
          </div>
          <div className="contentTable ">
            <div className="itemsTable colorOne">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorTwo">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorOne">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorTwo">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorOne">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorTwo">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorOne">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorTwo">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorOne">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
            <div className="itemsTable colorTwo">
              <div className="itemTable">ALlan Cássio</div>
              <div className="itemTable">26/01/1991</div>
              <div className="itemTable">044.997.303-41</div>
              <div className="itemTable">
                <button className="buttonAction">Prosseguir</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
