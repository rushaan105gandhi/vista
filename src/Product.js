import React, { useState } from 'react';
import "./Product.css";
import StarRatings from 'react-star-ratings';

function Product({id, title, image, price}) {

  const [rating, setRating] = useState(3);
  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>₹</small>
          <strong>{price}</strong>
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
      <img src={image} alt='RedM'></img>
      <button>Add to Kit</button>
    </div>
  )
}

export default Product;