import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Books from './components/Books';
import About from './components/About';
import Categories from './components/Categories';

const App = () => (
  <div id="App">
    <div className=" bg-slate-50 dark:bg-gray-900">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/" element={<Books />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  </div>
);

export default App;
