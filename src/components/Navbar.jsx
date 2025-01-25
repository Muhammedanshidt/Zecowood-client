// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/Logo PNG.png"
// import ICON from "../assets/ICON PNG.png"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="sticky top-0 z-50 p-3 bg-accent">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
//         <div className="flex justify-between items-center h-16 p-4 ">
//           {/* Logo */}
//           <div className="flex-shrink-0 mr-20 rounded-2xl"
//           onClick={() => navigate("/")}> 
//               <img src={Logo} className="h-10"/>
//               {/* <img src={ICON} className="h-10 sm:hidden"/> */}
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex justify-around  w-full font-medium text-primary">
//             <Link
//               to="/about"
//               className=""
//             >
//               About Us
//             </Link>
//             <Link
//               to="/products"
//               className=""
//             >
//               Products
//             </Link>
//             <Link
//               to="/sustainability"
//               className=""
//             >
//               Sustainability
//             </Link>
//             <Link
//               to="/contact"
//               className=""
//             >
//               Consevation
//             </Link>
//             <Link
//               to="/contact"
//               className=""
//             >
//               wildlife
//             </Link>



//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <Link
//             to="/about"
//             onClick={() => setIsOpen(false)}
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/products"
//             onClick={() => setIsOpen(false)}
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Products
//           </Link>
//           <Link
//             to="/sustainability"
//             onClick={() => setIsOpen(false)}
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Sustainability
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/Logo PNG.png";
import Landing from "./Landing";
import AboutUs from "./AboutUs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="sticky top-0 z-50 p-3 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex justify-between items-center h-16 p-4">
            {/* Logo */}
            <div className="flex-shrink-0 mr-20 rounded-2xl cursor-pointer">
              <ScrollLink to="home" smooth={true} duration={500}>
                <img src={Logo} className="h-10" alt="Logo" />
              </ScrollLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-around w-full font-medium text-primary">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-secondary"
              >
                About Us
              </ScrollLink>
              <ScrollLink
                to="products"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-secondary"
              >
                Products
              </ScrollLink>
              <ScrollLink
                to="sustainability"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-secondary"
              >
                Sustainability
              </ScrollLink>
              <ScrollLink
                to="conservation"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-secondary"
              >
                Conservation
              </ScrollLink>
              <ScrollLink
                to="wildlife"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-secondary"
              >
                Wildlife
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Products
            </ScrollLink>
            <ScrollLink
              to="sustainability"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Sustainability
            </ScrollLink>
            <ScrollLink
              to="conservation"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Conservation
            </ScrollLink>
            <ScrollLink
              to="wildlife"
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Wildlife
            </ScrollLink>
          </div>
        )}
      </nav>
      <div id="home" className="h-screen my-20 flex items-baseline justify-center">
      <Landing/>
      </div>
      <div id="about" className="h-screen">
       <AboutUs/>
      </div>
      <div id="products" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
      </div>
      <div id="sustainability" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Sustainability</h1>
      </div>
      <div id="conservation" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Conservation</h1>
      </div>
      <div id="wildlife" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Wildlife</h1>
      </div>

    </div>
  );
}
