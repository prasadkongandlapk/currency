import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li>
      <div className="align">
        <img className="img-logo" src={currencyLogo} alt="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="align">
        <p className="p">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
