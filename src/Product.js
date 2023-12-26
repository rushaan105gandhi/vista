import React, { useState } from 'react';
import "./Product.css";
import StarRatings from 'react-star-ratings';
import vRedM from './vRedM.png'

function Product() {

  const [rating, setRating] = useState(3);
  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>Red-M Dry Syrup</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>24.9</strong>
        </p>
        <div className='product__rating'>
          <StarRatings
            rating={rating}
            starRatedColor="orange"
            starEmptyColor="gray"
            starDimension="20px"
            starSpacing="2px"
            changeRating={handleRatingChange}
            numberOfStars={5}
          />
        </div>
      </div>
      <img src={vRedM} alt='RedM'></img>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product;