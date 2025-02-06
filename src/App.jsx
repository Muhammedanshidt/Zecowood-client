// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* <Route path="/about" element={<About />} /> */}
//         <Route path="/products" element={<Products />} />
//         <Route path="/sustainability" element={<Sustainability />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };


// const Products = () => <h1>Products Page</h1>;
// const Sustainability = () => <h1>Sustainability Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
// import Sustainability from "./components/Sustainability";
// import Conservation from "./components/Conservation";
// import Wildlife from "./components/Wildlife";

function App() {
  return (
    <div >
      <Navbar />
      <div id="home" className="h-screen my-20 flex  justify-center">
        <Landing />
      </div>
      <div id="about" className="h-screen">
        <AboutUs />
      </div>
      <div id="products" className="h-screen">
        <Products />
      </div>
      {/* <div id="sustainability" className="h-screen">
        <Sustainability />
      </div>
      <div id="conservation" className="h-screen">
        <Conservation />
      </div>
      <div id="wildlife" className="h-screen">
        <Wildlife />
      </div> */}
    </div>
  );
}

export default App;
