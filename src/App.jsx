import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};


const Products = () => <h1>Products Page</h1>;
const Sustainability = () => <h1>Sustainability Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

export default App;
