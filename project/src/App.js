import './App.css';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from './pages/CheckOut';

function App() {

  return (

    <Router>
    <div>

      <Routes>

      <Route path='/' exact element={<Header/>} />

      <Route path='/checkout'  element={<CheckOut/>} />


      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
