import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className="pt-32"> {/* Ajusta el padding top para que no se cubra */}
      <ContactInfo />
      <div className="container mx-auto mt-4 text-center"> {/* Reduce el margin-top */}
      <h1 className="text-4xl  text-primary mb-2">Fill the form below to</h1>
        <h1 className="text-4xl font-extrabold text-primary mb-2">Get in touch with us</h1>
        <p className="text-secondary mb-4">We are here to answer your questions. If you have any questions please leave us a message. We will contact with you as soon as possible.</p>
      </div>
      <div className="container mx-auto mt-4"> {/* Reduce el margin-top */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
