import React from 'react';
import "./Checkout.css";
import vNp from "./vNp.png"
function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left' >
            <img className='checkout__banner' src={vNp} alt='banner'/>
            <div>
                <h2 className='checkout__title'>Your Shopping basket</h2>
                {/* basketitem */}
                {/* basketitem */}
                {/* basketitem */}
                {/* basketitem */}
            </div>
        </div>

        <div className='checkout__right'>
            <h2>Subtotal component</h2>
        </div>
    </div>
  )
}

export default Checkout