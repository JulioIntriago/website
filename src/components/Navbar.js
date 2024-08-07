import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/img7.PNG'; // Asegúrate de que esta ruta es correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactHeader = document.querySelector('.contact-header');
      const contactHeaderHeight = contactHeader.offsetHeight;
      const navbar = document.getElementById('navbar');
      if (window.scrollY > contactHeaderHeight) {
        contactHeader.classList.add('hidden-header');
        navbar.style.top = '0';
        setShowNavbar(true);
      } else {
        contactHeader.classList.remove('hidden-header');
        navbar.style.top = `${contactHeaderHeight}px`;
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="contact-header bg-teal-500 text-white p-2">
        <div className="container mx-auto flex justify-between items-center text-sm md:text-base">
          <div className="flex items-center">
            <span className="mr-4">Follow Us</span>
            <a href="https://www.facebook.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-sm md:text-base"><i className="bi bi-telephone-fill"></i> Call us on: (786) 259-3044</span>
          </div>
        </div>
      </header>
      <nav
        id="navbar"
        className={`bg-white shadow-lg fixed w-full z-10 transition-top duration-300 ${showNavbar ? 'top-0' : 'top-[-70px]'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <Link to="/" className="flex items-center">
            <img width="40" height="40" src={logo} className="custom-logo" alt="BETTER BEHAVIOR SERVICES" decoding="async" />
            <div className="ml-4 text-lg font-bold text-primary">
              <span className="block">BETTER BEHAVIOR</span>
              <span className="block">SERVICES LLC</span>
            </div>
          </Link>
          <button
            className="text-gray-500 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          <div className={`flex-1 lg:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6 text-sm md:text-base">
              <li><Link to="/home-based" className="text-dark hover:text-teal-500 hover:underline">HOME BASED</Link></li>
              <li><Link to="/school-based" className="text-dark hover:text-teal-500 hover:underline">SCHOOL BASED</Link></li>
              <li><Link to="/parent-training" className="text-dark hover:text-teal-500 hover:underline">PARENT TRAINING</Link></li>
              <li><Link to="/our-process" className="text-dark hover:text-teal-500 hover:underline">OUR PROCESS</Link></li>
              <li><Link to="/contact" className="text-dark hover:text-teal-500 hover:underline">CONTACT</Link></li>
            </ul>
            <Link to="/contact" className="ml-4 px-4 py-2 bg-teal-500 text-white rounded-full flex items-center hover:bg-teal-600 transition duration-300 text-sm md:text-base">
              <i className="bi bi-check-circle-fill mr-2"></i>
              FREE CONSULTATION
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
