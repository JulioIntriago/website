import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm'; // Asegúrate de que esta ruta sea correcta
import WhatWeDoSection from '../components/WhatWeDoSection'; // Asegúrate de que esta ruta sea correcta
import DisordersSection from '../components/DisordersSection'; // Asegúrate de que esta ruta sea correcta

const Home = () => {
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
        
      </section>

      <section className="why-choose-section py-8 px-4" data-aos="fade-up">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/3 p-4" data-aos="fade-right">
            <img
              src="/img/img12.PNG" // Ajusta la ruta a la imagen que has proporcionado
              alt="What is ABA"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-2/3 p-4 text-center lg:text-left" data-aos="fade-left">
            <h2 className="promo-title text-4xl font-bold mb-2 text-secondary">What is ABA?</h2>
            <h3 className="text-3xl font-bold text-primary mb-2">It stands for Applied Behavior Analysis!</h3>
            <p className="text-secondary mb-4">
              Applied Behavior Analysis (ABA) is a therapy based on the science of learning and behavior. ABA helps us understand how behavior works, how the environment can affect behavior and how learning takes place. ABA therapy focuses on applying the understanding of how behavior works to real-life situations. The goal of ABA is to increase behaviors that are helpful and decrease behaviors that are harmful or affect learning and independence.
            </p>
            <a href="#" className="btn btn-custom rounded-full px-3 py-1 text-sm flex justify-center transition duration-300 bg-highlight hover:bg-teal-400 text-white mx-auto">
              Learn more about us
            </a>
          </div>
        </div>
      </section>

      <section className="why-choose-section py-8 px-4" data-aos="fade-up">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/3 p-4" data-aos="fade-right">
            <img
              src="/img/img11.PNG" // Ajusta la ruta a la imagen que has proporcionado
              alt="Why Choose Better Behavior Services LLC"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-2/3 p-4 text-center lg:text-left" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Better Behavior Services LLC</h2>
            <p className="text-secondary mb-4">
              In conjunction with conventional behavioral therapy methodologies, our team places a distinct emphasis on the comprehensive health and well-being of both the child and their family. This established approach enables our esteemed BCBAs, BCaBAs, and RBTs to benefit from the collective support of our diverse array of service departments, alongside other dedicated members of our healthcare team. This collaborative effort culminates in the creation of a tailored strategy and intervention plan, designed with the overarching objective of augmenting the overall quality of life for the child, their family, and others under our care.
            </p>
          </div>
        </div>
      </section>

      <section className="who-we-are-section py-8 px-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-secondary mb-4">
              The core team at Better Behavior Services possesses a cumulative experience exceeding 40 years, dedicated to improving the well-being of our patients, their families, and all those we serve. We have leveraged this extensive expertise to craft a patient-centric care approach aimed at achieving comprehensive health and wellness. Every treatment plan is individually tailored, drawing from meticulous clinical assessments and a track record of successful processes. When you become a patient at Better Behavior Services, you become a part of our extended family, and we are unwavering in our commitment to realizing our mission of elevating the quality of life for all individuals, their families, and the broader community under our care.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="/img/img12.PNG" // Ajusta la ruta a la imagen que has proporcionado
              alt="Who We Are"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <WhatWeDoSection />

      <DisordersSection />

      <section className="contact-form-section py-8 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
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

export default Home;
