import './index.css'

const HistoryItem = props => {
  const {history, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="timeAccessed">{timeAccessed}</p>
      <div className="logo-title-container">
        <img className="logo" src={logoUrl} alt="domain logo" />
        <div className="title-domain-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          onClick={deleteHistory}
          className="button"
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
