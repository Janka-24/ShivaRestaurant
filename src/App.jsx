import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './composants/Home/Home'
import NavBar from './composants/NavBar/NavBar';
import Restaurant from './composants/Restaurants/Restaurants'
import Map from './composants/Restaurants/Map'
import Menu from './composants/Restaurants/Menu'
import Footer from './composants/NavBar/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurants' element={<Restaurant />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/map' element={<Map />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
