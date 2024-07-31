import Navbar from "./Navbar";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import CarDetails from "./carDetails";
import Basket from "./Basket";
function App() {
  const [basket, setBasket] = useState([])
  const addToBasket = (service) => {setBasket ([...basket, service])}
  const clearBasket = () => {setBasket ([])}
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services addToBasket={addToBasket} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/car/:carId" element={<CarDetails />} />
        </Routes> 
        <Basket basket = {basket} clearBasket={clearBasket} />
    </div>
    </Router>
  );
}

export default App;
