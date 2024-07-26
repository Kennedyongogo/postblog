import Navbar from "./Navbar";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import About from "./About";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
    </div>
    </Router>
  );
}

export default App;
