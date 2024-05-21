import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Checkout from './Checkout';
import { Login } from './Login';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Header /> 
//         <Routes>
//           <Route path="/login" element={<Login />} />
//             {/* <h1>Login Page</h1> */}
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
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
