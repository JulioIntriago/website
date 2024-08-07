import React from 'react';
import image1 from '../img/img2.png'; // Asegúrate de que esta ruta sea correcta

const ConvenienceSection = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center" data-aos="fade-up">
      <div className="md:w-1/2 p-4">
        <h2 className="text-teal-500 text-2xl font-bold mb-4 text-primary font-bold">Convenience</h2>
        <p className="text-lg font-semibold mb-4">
          Another great benefit of home-based ABA therapy is the fact that you don’t have to go anywhere to get the autism therapy your child needs! Our BCBA comes right to your door, eliminating the possible struggles you might have if you had to transition from home to a new environment.
        </p>
        <div className="border-l-4 border-green-500 pl-4 text-lg">
  <p>
    Your child’s ABA therapy appointments are scheduled to meet your needs. And because you stay right where you are, the rest of your family’s schedule remains uninterrupted.
  </p>
</div>

      </div>
      <div className="md:w-1/2 p-4">
        <img src={image1} alt="Child with therapist" className="rounded-lg shadow-lg w-full" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default ConvenienceSection;
