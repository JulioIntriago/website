import React from 'react';
import '../styles.css'; // Asegúrate de que esta ruta sea correcta
import ContactForm from '../components/ContactForm'; // Asegúrate de que esta ruta sea correcta
import WhatWeDoSection from '../components/WhatWeDoSection'; // Asegúrate de que esta ruta sea correcta
import DisordersSection from '../components/DisordersSection'; // Asegúrate de que esta ruta sea correcta
import BenefitsSection from '../components/BenefitsSection'; // Asegúrate de que esta ruta sea correcta
import ConvenienceSection from '../components/ConvenienceSection'; // Asegúrate de que esta ruta sea correcta

const HomeBased = () => {
  return (
    <main className="pt-16">
      <section className="video-container relative h-screen">
        <video
          className="background-video-hosted absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          src="/img/video.mp4" // Ruta al video en la carpeta img
        ></video>
        <div className="overlay-text absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          {/* Puedes agregar aquí cualquier texto superpuesto al video */}
        </div>
      </section>

      <BenefitsSection />
      <ConvenienceSection />
      <WhatWeDoSection />
      <DisordersSection />

      <section className="contact-form-section py-8 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Please fill out the necessary form and a member of our Intake Team will contact you.
            <br />
            Thank you.
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default HomeBased;
