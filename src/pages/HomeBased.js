import React from 'react';
import '../styles.css';
import ContactForm from '../components/ContactForm';
import WhatWeDoSection from '../components/WhatWeDoSection';
import DisordersSection from '../components/DisordersSection';
import BenefitsSection from '../components/BenefitsSection';
import ConvenienceSection from '../components/ConvenienceSection';
import PairingSection from '../components/PairingSection';
import Individualize from '../components/Individualize';
import SkillAcquisition from '../components/SkillAcquisition';
import NaturalEnvironmentTeaching from '../components/NaturalEnvironmentTeaching';
import Footer from '../components/Footer'; // Asegúrate de importar el Footer

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
          src="/img/video.mp4"
        ></video>
        <div className="overlay-text absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          {/* Puedes agregar aquí cualquier texto superpuesto al video */}
        </div>
      </section>

      <BenefitsSection />
      <ConvenienceSection />
      <PairingSection />
      <Individualize />
      <SkillAcquisition />
      <NaturalEnvironmentTeaching />

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
      <Footer /> {/* Añadir el Footer aquí */}

    </main>
  );
};

export default HomeBased;
