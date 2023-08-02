import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyDetails: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({isLoading: false, currencyDetails: formatedData})
  }

  render() {
    const {currencyDetails, isLoading} = this.state
    return (
      <div className="bg">
        <h1>CryptocurrencyTracker</h1>
        <img
          className="big-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="card">
          <div className="card-bar">
            <p>Coin type</p>
            <div className="usd-euro-align">
              <p className="usd">USD</p>
              <p>EURO</p>
            </div>
          </div>
          {isLoading === true ? (
            <Loader />
          ) : (
            <ul>
              {currencyDetails.map(each => (
                <CryptocurrencyItem cryptoDetails={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
