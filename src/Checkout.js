import React, { useState } from 'react';
import "./Checkout.css";
import Subtotal  from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left' >
            {/* <img className='checkout__banner' src={vNp} alt='banner'/> */}
            <div>
                <h2 className='checkout__title'>Your Shopping basket</h2>
                {basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
                {/* basketitem */}
                {/* basketitem */}
                {/* basketitem */}
                {/* basketitem */}
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
