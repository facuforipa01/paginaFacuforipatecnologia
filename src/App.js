import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './componentes/footer';
import Sidebar from './componentes/sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar sidebartext=" Bienvenidx a facuforipatecnologia" />
        <Routes>
          <Route path='/about' Component={About} >
          </Route>
          <Route path='/' Component={Inicio} >
          </Route>
          <Route path='/products' Component={Products} >
          </Route>
          <Route path='/contact' Component={Contact} >
          </Route>
        </Routes>
        <Footer footertext="facuforipatecnologia Inc" />
      </Router>
    </>
  );
}

export default App;
