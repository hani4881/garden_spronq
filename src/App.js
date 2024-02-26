import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GardenMap from './pages/GardenMap';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/GardenMap' element={<GardenMap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
