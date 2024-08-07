import React from 'react';

const PairingSection = () => {
  return (
    <section className="pairing-section py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 p-4">
          <img
            src="/img/img20.PNG" // Ajusta la ruta de la imagen según tu estructura
            alt="Pairing"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-primary mb-4">PAIRING</h2>
          <p className="text-secondary mb-4">
            Pairing is an essential aspect of our school-based ABA therapy, as it helps build a positive and trusting relationship between the child and ABA therapist. Through the process of pairing, your child’s therapist strives to establish themselves as a reliable and enjoyable presence at school. This involves engaging in conversation and activities that the child finds reinforcing. Pairing not only enhances your child’s engagement and cooperation, but also lays the foundation for effective teaching and intervention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PairingSection;
