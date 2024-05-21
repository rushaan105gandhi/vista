import React from 'react'
import logo from './vista.png';
import {Link} from "react-router-dom";
import './Login.css'


function Login() {
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src={logo}></img>
        </Link>
    </div>
  )
}

export {Login}
