import React from 'react';
import visclave625 from './visclave625.png';
import vGut from './vGut.png';
import vNp from './vNp.png';
import './Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const properties = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
 };

function Home() {
  const images = [
    visclave625,
    vGut,
    vNp,
  ];

  return (
    <div className='home'>
      <div className='home__container'>
        <Slider {...properties}>
          {images.map((image, index) => (
            <div key={index} className='slide-image-container'>
              <img className='home__image' src={image} alt='images' />
            </div>
          ))}
        </Slider> 
        {/* <img className='home__image' src={visclave625} alt='visclave' /> */}
        <div className='home__row'>
          {/* Product Component */}
          {/* Product Component */}
        </div>

        <div className='home__row'>
          {/* Product Component */}
          {/* Product Component */}
          {/* Product Component */}
        </div>

        <div className='home__row'>
          {/* Product Component */}
          {/* Product Component */}
          {/* Product Component */}
        </div>

      </div>
    </div>
  )
}

export default Home