import React from 'react';
import '../styles.css'; // Asegúrate de que esta ruta sea correcta
import ContactForm from '../components/ContactForm';
import WhatWeDoSection from '../components/WhatWeDoSection';
import DisordersSection from '../components/DisordersSection';
import PairingSection from '../components/PairingSection';
import Footer from '../components/Footer'; // Asegúrate de importar el Footer

const SchoolBased = () => {
  return (
    <main className="pt-16">
     
      <section className="school-based-aba py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">School Based ABA Therapy</h2>
          <div className="flex flex-wrap justify-center items-start">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-green-200 p-6 rounded-lg shadow-md">
                <p className="text-base text-gray-700">
                  ABA therapy in the school setting works through collaboration between ABA therapists, parents, teachers, and guidance counselors. Your child’s ABA therapist will work with you to understand the child’s unique needs, goals, and preferences. Using this information, your child’s ABA therapist will implement effective ABA techniques through the use of positive reinforcement during your child’s school day.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-green-200 p-6 rounded-lg shadow-md">
                <p className="text-base text-gray-700">
                  Therapists will also partner with teachers and other school staff to ensure a holistic approach to support inside the classroom and other school settings, like recess and lunch. By sharing insight and strategies, ABA therapists foster a cohesive team environment that helps in the generalization of skills throughout your child’s academic career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PairingSection />
      <br></br>
      <p className="text-4xl font-bold text-primary mb-2 text-center">Please fill out the necessary form and a member of our Intake Team will contact you.
      Thank you.</p>
      <ContactForm />
      <Footer /> {/* Añadir el Footer aquí */}

    </main>
  );
};

export default SchoolBased;
