import React from 'react';
import image from '../img/img20.PNG'; // Asegúrate de que esta ruta sea correcta

const PairingSection = () => {
  return (
    <section className="pairing-section py-8 px-4 shadow-lg mt-8" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img
            src={image}
            alt="Pairing Image"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold text-primary mb-4">PAIRING</h2>
          <p className="text-dark mb-8">
            Pairing is an essential aspect of our school-based ABA therapy, as it helps build a positive and trusting relationship between the child and ABA therapist. Through the process of pairing, your child’s therapist strives to establish themselves as a reliable and enjoyable presence at school. This involves engaging in conversation and activities that the child finds reinforcing. Pairing not only enhances your child’s engagement and cooperation, but also lays the foundation for effective teaching and intervention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PairingSection;
