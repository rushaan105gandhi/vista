import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Checkout from './Checkout';
import { Login } from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once, when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if (authUser) {
        //user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user us logged-out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const showHeader = location.pathname !== "/login";

  return (
    <div className="app">
      {showHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Login /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
