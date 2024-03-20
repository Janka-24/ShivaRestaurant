import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './composants/Home/Home'
import Services from './composants/Services/Services'
import Profile from './composants/Profile/profile'
import NavBar from './composants/NavBar/NavBar';
import Restaurant from './composants/Restaurants/Restaurants'
import Menu from './composants/Restaurants/Menu'
import Marketing from './composants/Services/Marketing/Marketing';
import Dev from './composants/Services/Dev/dev';
import Footer from './composants/NavBar/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurants' element={<Restaurant />} />
        <Route path='/menu' element={<Menu />} />
        {/* <Route path='/services/marketing' element={<Marketing />} />
          <Route path='/services/dev' element={<Dev />} /> */}

      </Routes>
      <Footer />
    </>
  );
}

export default App;
