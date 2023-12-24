import React from 'react';
import visclave625 from './visclave625.png';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={visclave625} alt='visclave'></img>
      </div>
    </div>
  )
}

export default Home