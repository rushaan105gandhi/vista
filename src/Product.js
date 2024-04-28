import React, { useState } from 'react';
import "./Product.css";
import StarRatings from 'react-star-ratings';
import { useStateValue  } from './StateProvider'

function Product({id, title, image, price}) {
  
  const [{ basket }, dispatch] = useStateValue();

  console.log("Basket: ", basket);

  const [rating, setRating] = useState(3);
  
  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const addToBasket = () => {
    //dispatch the item into the Data Layer
    dispatch({
      type: 'ADD_TO_BASKET', 
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
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
      <button onClick={addToBasket}>Add to Kit</button>
    </div>
  )
}

export default Product;