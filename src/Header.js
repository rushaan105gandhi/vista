import React from 'react'
import logo from './vista.png';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './Header.css'
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/"> 
        <img className='header__logo' src= {logo} alt='headerLogo'/>
        </Link>

        <div className='header__search'>
            <input className='header__searchInput' type = 'text'/>
            <SearchSharpIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <Link to={!user && "/login"}>
                <div className='header__option' onClick={handleAuthentication}>
                    <span className='header__optionLineOne'>Hello Doctors</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Invoices</span>
            </div>
            <Link to="/checkout">
            <div className='header__optionBasket'>
                <AddShoppingCartSharpIcon fontSize="large" />
                <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>

  )
}

export default Header
