import React, { useState } from 'react'
import logo from './vista.png';
import {Link, useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const signIn = e => {
  //   e.preventDefault();
  //   //firebase sign in
  // }

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        console.log(userCredential);
        navigate('/'); // Redirect to home or another page
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message));
  };


  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src={logo}></img>
        </Link>
        <div className='login__container'>
          <h1>Sign-In</h1>
          <form>
            <h5>Email</h5>
            {/* Entering Email */}
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
            {/* Entering Password */}
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
            {/* Sign In Button */}
            <button className='login__signinButton' type='submit' onClick={signIn}>Sign-In</button>
          </form>
          <p>
            T & C
          </p>
          <button className='login__signupButton' onClick={register}>
            Register
          </button>
        </div>
    </div>
  )
}

export {Login}
