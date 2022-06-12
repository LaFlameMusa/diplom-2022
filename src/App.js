import React from 'react';
import './App.css'
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Products from './components/pages/Products.js';
import Services from './components/pages/Services.js';
import SignUp from './components/pages/SignUp.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Products" element={<Products/>}></Route>
          <Route exact path="/Services" element={<Services/>}></Route>
          <Route exact path="/SignUp" element={<SignUp/>}></Route>
          <Route exact path="/SignUp" element={<SignUp/>}></Route>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
