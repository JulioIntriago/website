import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo2024.svg'; // Asegúrate de que esta ruta es correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const contactHeader = document.querySelector('.contact-header');
      const headerHeight = contactHeader.offsetHeight;

      if (window.scrollY > headerHeight) {
        contactHeader.style.top = `-${headerHeight}px`;
        navbar.style.top = '0';
      } else {
        contactHeader.style.top = '0';
        navbar.style.top = `${headerHeight}px`;
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
        <div className="container mx-auto flex justify-between items-center">
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
            <span className="mr-4"><i className="bi bi-telephone-fill"></i> Call us on: (786) 259-3044</span>
          </div>
        </div>
      </header>
      <nav id="navbar" className="bg-white shadow w-full z-10 transition-top duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img width="80" height="80" src={logo} className="custom-logo" alt="BETTER BEHAVIOR SERVICES" decoding="async" />
          </Link>
          <button
            className="text-gray-500 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          <div className={`flex-1 justify-center lg:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li><Link to="/home-based" className="text-dark hover:text-teal-500">HOME BASED</Link></li>
              <li><Link to="/school-based" className="text-dark hover:text-teal-500">SCHOOL BASED</Link></li>
              <li><Link to="/parent-training" className="text-dark hover:text-teal-500">PARENT TRAINING</Link></li>
              <li><Link to="/our-process" className="text-dark hover:text-teal-500">OUR PROCESS</Link></li>
              <li><Link to="/contact" className="text-dark hover:text-teal-500">CONTACT</Link></li>
            </ul>
            <Link to="/contact" className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-full flex items-center hover:bg-teal-500 transition duration-300">
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
