import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Gut-2 Sachet</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>199.99</strong>
        </p>
      </div>
    </div>
  )
}

export default Product;