import React from 'react';
import image1 from '../img/img01.png'; // Asegúrate de que esta ruta sea correcta

const ConvenienceSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-teal-500 text-2xl font-bold mb-4">Convenience</h2>
      <p className="text-lg font-semibold mb-4">
        Another great benefit of home-based ABA therapy is the fact that you don’t have to go anywhere to get the autism therapy your child needs! Our BCBA comes right to your door, eliminating the possible struggles you might have if you had to transition from home to a new environment.
      </p>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <img src={image1} alt="Child with therapist" className="md:w-1/2 md:mr-4 mb-4 md:mb-0" />
      </div>
      <div className="border-l-4 border-teal-500 pl-4 text-lg">
        <p>
          Your child’s ABA therapy appointments are scheduled to meet your needs. And because you stay right where you are, the rest of your family’s schedule remains uninterrupted.
        </p>
      </div>
    </div>
  );
};

export default ConvenienceSection;
