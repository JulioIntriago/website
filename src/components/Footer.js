import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-yellow-300">ABOUT</h3>
          <ul>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-yellow-300">INFO</h3>
          <ul>
            <li><a href="#" className="hover:underline">ABA Therapy Services</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-yellow-300">OUR LOCATIONS</h3>
          <ul>
            <li><a href="#" className="hover:underline">West Palm Beach</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-yellow-300">SUBSCRIBE</h3>
          <form action="#" className="flex">
            <input type="email" placeholder="Enter email address" className="p-2 rounded-l-full border-none" />
            <button type="submit" className="bg-orange-400 text-white p-2 rounded-r-full"><i className="bi bi-envelope"></i></button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <div className="flex space-x-5">
          <a href="https://www.facebook.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-facebook"></i></a>
          <a href="https://twitter.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-twitter"></i></a>
          <a href="https://www.linkedin.com/tuperfil" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-linkedin"></i></a>
        </div>
        <p className="text-center mt-4 md:mt-0 md:flex-1">© 2024 BETTER BEHAVIOR SERVICES</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
