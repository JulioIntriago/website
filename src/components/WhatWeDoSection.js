import React from 'react';
import image1 from '../img/img16.PNG'; // Asegúrate de que esta ruta sea correcta
import image2 from '../img/img12.PNG'; // Asegúrate de que esta ruta sea correcta

const WhatWeDoSection = () => {
  return (
    <section className="what-we-do-section py-8 px-4 shadow-lg mt-8" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">What we do</h2>
        <p className="text-secondary mb-8">
          ABA Therapy uses evidenced-based practice techniques in order to effectively manage and significantly improve overall behaviors.
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="image-container h-64">
              <img
                src={image1}
                alt="What is AUTISM?"
                className="w-full h-full object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">What is AUTISM?</h3>
            <p className="text-secondary">
              A neurodevelopmental disorder that generally appears before the age of three.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="image-container h-64">
              <img
                src={image2}
                alt="What is ADHD?"
                className="w-full h-full object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">What is ADHD?</h3>
            <p className="text-secondary">
              Attention-deficit hyperactivity disorder (ADHD) is one of the most common childhood disorders in the US.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
