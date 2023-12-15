import React from 'react'
import logo from './vista.png';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src= {logo} />

        <div className='header__search'>
            <input className='header__searchInput' type = 'text'/>
            {/*Logo*/}
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Doctors</span>
                <span className='header__optionLineTwo'>SignIn</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
        </div>
    </div>

  )
}

export default Header
