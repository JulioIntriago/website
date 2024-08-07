import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatIsBetter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div className="container mx-auto mt-16 p-8 flex flex-wrap justify-between items-center" data-aos="fade-up">
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:justify-start">
        <img src="/img/image1.png" alt="Therapy session 1" className="w-1/2 lg:w-2/3 rounded-lg shadow-md mb-4 lg:mb-0" />
        <img src="/img/image2.png" alt="Therapy session 2" className="w-1/2 lg:w-1/3 rounded-lg shadow-md ml-4" />
      </div>
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0 text-center lg:text-left" data-aos="fade-left">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">What is BETTER?</h2>
        <p className="text-gray-700 mb-4">
          Applied Behavior Analysis (ABA) is an evidence-based approach for creating significant positive behavior change. Through the use of the scientific method, ABA therapy...
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default WhatIsBetter;
