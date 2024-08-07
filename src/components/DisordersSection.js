import React from 'react';

const DisordersSection = () => {
  return (
    <section className="disorders-section py-8 px-4 shadow-lg mt-8" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4" data-aos="fade-right">
            <img
              src="/img/imgdisorder.PNG" // Ajusta la ruta a la imagen que has proporcionado
              alt="What is Oppositional Defiant Disorder?"
              className="max-w-xs mx-auto h-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">What is Oppositional Defiant Disorder?</h3>
            <p className="text-secondary">
              ODD is a disorder that is characterized by aggressiveness and a tendency to purposefully bother and irritate others.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4" data-aos="fade-left">
            <img
              src="/img/imgdisorder2.PNG" // Ajusta la ruta a la imagen que has proporcionado
              alt="What is Global Developmental Delay?"
              className="max-w-xs mx-auto h-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">What is Global Developmental Delay?</h3>
            <p className="text-secondary">
              GDD is a term used when a child takes longer to reach certain development milestones than other children their age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisordersSection;
