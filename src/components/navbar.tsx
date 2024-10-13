import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Using useNavigate hook for navigation
  const location = useLocation();

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation
  const handleNavigation = (path:any) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <>
      <nav className="bg-black bg-opacity-70 pt-10">
        <div className="max-w-screen-xl flex flex-wrap items-center lg:justify-center justify-end mx-auto">
          {/* <img src="Logo.png" className="h-16" alt="Logo" /> */}

          <button
            onClick={handleToggle}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 justify-center items-center lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/" ? "text-blue-500" : "text-white"
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/About-Us")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/About-Us" ? "text-blue-500" : "text-white"
                  }`}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/Solutions")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/Solutions" ? "text-blue-500" : "text-white"
                  }`}
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/Product")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/Product" ? "text-blue-500" : "text-white"
                  }`}
                >
                  Product
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/Services")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/Services" ? "text-blue-500" : "text-white"
                  }`}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/Workshops")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/Workshops" ? "text-blue-500" : "text-white"
                  }`}
                >
                  Workshops
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/News")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/News" ? "text-blue-500" : "text-white"
                  }`}
                >
                  News
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/Contact-Us")}
                  className={`block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ${
                    location.pathname === "/Contact-Us" ? "text-blue-500" : "text-white"
                  }`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
