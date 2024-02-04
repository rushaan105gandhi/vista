import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="app">
      <Routes>
          <Route path="/checkout">
            <Header />
            <h1>I am a checkout</h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
