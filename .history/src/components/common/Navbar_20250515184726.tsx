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
          <img src={FoodieLand} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 font-semibold items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About us</NavLink>
        </div>

        {/* Social Icons (Desktop only) */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="https://www.facebook.com/">
            <svg width="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005..."></path>
            </svg>
          </a>
          <a href="https://www.twitter.com/">
            <svg width="24" viewBox="0 0 30 30" fill="currentColor">
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84..."></path>
            </svg>
          </a>
          <a href="https://www.instagram.com">
            <svg width="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8z..."></path>
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
          <NavLink to="/" className="block w-full py-1" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/recipes" className="block w-full py-1" onClick={() => setIsOpen(false)}>Recipes</NavLink>
          <NavLink to="/blog" className="block w-full py-1" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" className="block w-full py-1" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/about" className="block w-full py-1" onClick={() => setIsOpen(false)}>About us</NavLink>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/">
              <svg width="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682..." />
              </svg>
            </a>
            <a href="https://www.twitter.com/">
              <svg width="24" viewBox="0 0 30 30" fill="currentColor">
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064..." />
              </svg>
            </a>
            <a href="https://www.instagram.com">
              <svg width="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243..." />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
