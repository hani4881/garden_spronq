import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GardenMap from './pages/GardenMap';
import BookOnline from './pages/BookOnline';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/GardenMap' element={<GardenMap />} />
          <Route path='/BookOnline' element={<BookOnline/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
