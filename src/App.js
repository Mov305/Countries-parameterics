import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Countries from './components/Countries';
import fetchCountries from './redux/countries/api';
import About from './components/About';
import Country from './components/country';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div id="App">
      <div className=" bg-[#FB5092] dark:bg-gray-900">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Countries />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Country/:name" element={<Country />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
