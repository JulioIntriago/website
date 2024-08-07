import React from 'react';
import { Link } from 'react-router-dom';

const IntakeFormSection = () => {
  return (
    <section className="intake-form-section py-8 px-4 bg-red-500 text-white text-center shadow-lg rounded-lg mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <i className="fas fa-file-alt text-6xl mb-4"></i> {/* Icono de formulario */}
          <p className="text-xl mb-4">
            Please fill out the necessary form and a member of our Intake Team will contact you.
          </p>
          <p className="text-xl mb-4">Thank you.</p>
          <Link to="/contact" className="btn btn-custom rounded-full px-4 py-2 flex items-center transition duration-300 bg-white text-red-500 hover:bg-gray-200">
            Intake Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntakeFormSection;
