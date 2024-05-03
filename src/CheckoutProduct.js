import React from 'react'
import './CheckoutProduct.css'
import { useState } from 'react'
import { useStateValue } from './StateProvider'
import { type } from '@testing-library/user-event/dist/type';
// import { Button } from '@mui/material'

function CheckoutProduct({ id, image, title, price }) {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <div className='checkout__product'>
      <img className='checkoutProduct__image' src={image} />      
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'><small>Rs. </small><strong>{price}</strong></p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
