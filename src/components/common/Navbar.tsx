import { NavLink } from "react-router-dom";
import { useState } from "react";
import FoodieLand from "../../assets/foodieland..png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-gray-200">
      <div className="flex justify-between items-center h-20 w-full px-6 md:px-14">
        {/* Logo */}
        <div className="flex items-center">
          <img src={FoodieLand} alt="Logo" />
        </div>
        <div className="hidden md:flex gap-10 font-semibold items-center">
          <NavLink to="/" className="hover:text-red-500 transition duration-300 hover:scale-105 ">Home</NavLink>
          <NavLink to="/recipes" className="hover:text-red-500 transition duration-300 hover:scale-105">Recipes</NavLink>
          <NavLink to="/blog" className="hover:text-red-500 transition duration-300 hover:scale-105">Blog</NavLink>
          <NavLink to="/contact" className="hover:text-red-500 transition duration-300 hover:scale-105">Contact</NavLink>
          <NavLink to="/about" className="hover:text-red-500 transition duration-300 hover:scale-105">About us</NavLink>
        </div>
       
         
       
        {/* Social Icons */}
        <div className=" hidden md:flex gap-10 items-center text-black">
        <NavLink to="/favourites">❤</NavLink>
          <a href="https://www.facebook.com/" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              viewBox="0 0 24 24"
              className="transition duration-300 hover:scale-105 "
            >
              <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"></path>
            </svg>
          </a>
          <a href="https://www.twitter.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              viewBox="0 0 30 30"
              className="transition duration-300 hover:scale-105 "
            >
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              viewBox="0 0 24 24"
              className="transition duration-300 hover:scale-105 "
            >
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
          </a>
        </div>

        {/* Hamburger menu (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 gap-4 bg-white border-t">
          {/* Nav Links */}
          <NavLink
            to="/"
            className="block w-full py-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className="block w-full py-1"
            onClick={() => setIsOpen(false)}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/blog"
            className="block w-full py-1"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="block w-full py-1"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="block w-full py-1"
            onClick={() => setIsOpen(false)}
          >
            About us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
