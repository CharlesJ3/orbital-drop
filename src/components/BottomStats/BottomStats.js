import React from 'react'
import './BottomStats.scss'

function BottomStats(currency) {
  return (
    <div className="bottomStats">
      <span>Research Points: {currency.currencyOne}</span>
      <span>Talent Points: {currency.currencyTwo}</span>
      <span>Prestige Points: {currency.currencyThree}</span>
    </div>
  )
}

export default BottomStats
