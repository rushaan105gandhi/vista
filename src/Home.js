import React from 'react';
import visclave625 from './visclave625.png';
import vRedM from './vRedM.png';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product';

function Home() {

  return (
    <div className='home'>
      <div className='home__container'>
        { <img className='home__image' src={visclave625} alt='visclave' /> }
        <div className='home__row'>
          <Product title='Red M Dry Syrup' price={24.9} image={vRedM} />
          <Product />
          
        </div>

        <div className='home__row'>
          <Product />
          <Product />
          <Product />
        </div>

        <div className='home__row'>
          <Product />
        </div>

      </div>
    </div>
  )
}

export default Home