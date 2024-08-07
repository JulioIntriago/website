import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="benefits-section py-8 px-4" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary" data-aos="fade-up">Benefits of Home-Based ABA Therapy</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2 p-4" data-aos="fade-right">
            <img
              src="/img/img2.png" // Ajusta la ruta de la imagen según tu estructura
              alt="Familiar Environment"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4 text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-secondary mb-4">Familiar Environment</h3>
            <p className="text-secondary mb-4">
              Perhaps the most valuable part of home-based ABA therapy is how comfortable your child will be with autism treatment right from the get-go. While we ensure your child is perfectly comfortable and secure in our center, there’s nothing like being in the comfort of your own home.
            </p>
            <p className="text-secondary mb-4">
              Because your child is in their natural environment at home, their BCBA can observe their behavior and get a good feel for how their typical day goes. And because your child gets to meet with their therapist or our team members in a comfortable and safe space, they may be more apt to cooperate quickly.
            </p>
            <p className="text-secondary mb-4">
              Home-based ABA therapy also eliminates distraction and any need to adapt to a new space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
