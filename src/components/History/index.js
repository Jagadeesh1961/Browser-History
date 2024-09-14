import {Component} from 'react'

import './index.css'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({
      historyList: updatedHistoryList,
    })
  }

  onChangeUserInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, historyList} = this.state

    const filteredResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="input-type"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeUserInput}
            />
          </div>
        </div>

        {filteredResults.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <div className="bottom-container">
            <ul className="ul-container">
              {filteredResults.map(eachItem => (
                <HistoryItem
                  history={eachItem}
                  key={eachItem.id}
                  onDeleteHistory={this.onDeleteHistory}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default History
