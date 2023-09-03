import './styles.css'

interface PropsPaginate {
  pages: number
  currtenPage: number
  back: () => void
  next: () => void
  setPage: (value: number) => void
}

export const Paginate = ({
  pages,
  currtenPage,
  setPage,
  back,
  next,
}: PropsPaginate) => {
  return (
    <section className="pagination">
      <button className="buutonNavegate" onClick={back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            d="M10.4257 15.1835C10.8162 15.574 10.8162 16.2072 10.4257 16.5977L9.73054 17.2929C9.34002 17.6834 8.70685 17.6834 8.31633 17.2929L0.730543 9.70711C0.340019 9.31658 0.34002 8.68342 0.730544 8.29289L8.31633 0.707106C8.70686 0.316582 9.34002 0.316583 9.73054 0.707107L10.4257 1.40227C10.8162 1.79279 10.8162 2.42596 10.4257 2.81648L4.94929 8.29289C4.55877 8.68342 4.55877 9.31658 4.94929 9.70711L10.4257 15.1835Z"
            fill="#C4C4C4"
          />
        </svg>
      </button>

      {Array.from({ length: pages })
        .map((_, index) => index + 1)
        .map((page) => (
          <button
            type="button"
            className={`${page === currtenPage ? 'active' : ''}`}
            placeholder={`${page}`}
            onClick={() => setPage(Number(page))}
          >
            {page}
          </button>
        ))}

      <button className="buutonNavegate" onClick={next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            d="M0.707107 2.81648C0.316583 2.42596 0.316583 1.79279 0.707107 1.40227L1.40227 0.707106C1.79279 0.316582 2.42596 0.316583 2.81648 0.707107L10.4023 8.29289C10.7928 8.68342 10.7928 9.31658 10.4023 9.70711L2.81648 17.2929C2.42596 17.6834 1.79279 17.6834 1.40227 17.2929L0.707106 16.5977C0.316582 16.2072 0.316583 15.574 0.707107 15.1835L6.18352 9.70711C6.57404 9.31658 6.57404 8.68342 6.18352 8.29289L0.707107 2.81648Z"
            fill="#C4C4C4"
          />
        </svg>
      </button>
    </section>
  )
}
