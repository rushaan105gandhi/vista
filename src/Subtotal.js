import React, { useState } from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='Subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
        <small className='subtotal__gift'>
            <input type="checkbox"/> Add gift to this item
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'Rs '}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal