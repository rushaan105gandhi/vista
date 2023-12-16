import React from 'react'
import logo from './vista.png';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src= {logo} alt='headerLogo'/>

        <div className='header__search'>
            <input className='header__searchInput' type = 'text'/>
            <SearchSharpIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Doctors</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <div className='header__optionBasket'>
                <AddShoppingCartSharpIcon fontSize="large" />
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </div>
    </div>

  )
}

export default Header
