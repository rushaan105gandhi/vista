import React from 'react';
import visclave625 from './visclave625.png';
import vRedM from './vRedM.png';
import visZee from './visZee.jpg';
import visZyme from './visZyme.jpg';
import visGel from './visGel.jpg';
import visDec from './visDec.jpg';
import xKofvKof from './xKofvKof.jpg';
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
          <Product id={1} title='Red M Dry Syrup' price={24.9} image={vRedM} />
          <Product id={2} title='Viszee 500 Tablets' price={29.9} image={visZee}/>
          
        </div>

        <div className='home__row'>
          <Product id={3} title='Viszyme Syrup' price={59.9} image={visZyme} />
          <Product id={4} title='Visgel-MPS' price={48.9} image={visGel} />
          <Product id={5} title='visDec' price={54.9} image={visDec} />
        </div>

        <div className='home__row'>
          <Product id={6} title='xKofvKof' price={99.9} image={xKofvKof} />
        </div>

      </div>
    </div>
  )
}

export default Home