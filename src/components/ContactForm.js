import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: '',
    city: '',
    state: '',
    postalCode: '',
    childName: '',
    childSex: '',
    childDob: '',
    relationship: '',
    autismDiagnosis: '',
    autismAssessment: '',
    otherDiagnosis: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'radio' ? (checked ? value : prevState[name]) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Manejar la respuesta en caso de éxito
        alert('Form submitted successfully!');
      } else {
        // Manejar errores
        alert('Failed to submit the form.');
      }
    } catch (error) {
      // Manejar errores de red
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Information</h2>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          type="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="phone"
          type="text"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <h3 className="text-lg font-bold mb-2">Preferred contact method</h3>
      <div className="mb-4">
        <label>
          <input
            type="radio"
            name="contactMethod"
            value="phone"
            className="mr-2"
            checked={formData.contactMethod === 'phone'}
            onChange={handleChange}
          />
          Phone
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="contactMethod"
            value="email"
            className="mr-2"
            checked={formData.contactMethod === 'email'}
            onChange={handleChange}
          />
          Email
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="contactMethod"
            value="sms"
            className="mr-2"
            checked={formData.contactMethod === 'sms'}
            onChange={handleChange}
          />
          SMS (Text Message)
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="contactMethod"
            value="whatsapp"
            className="mr-2"
            checked={formData.contactMethod === 'whatsapp'}
            onChange={handleChange}
          />
          WhatsApp
        </label>
      </div>
      <h2 className="text-xl font-bold mb-4">Your Location</h2>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="city"
          type="text"
          placeholder="City*"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="state"
          type="text"
          placeholder="State*"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="postalCode"
          type="text"
          placeholder="Postal Code*"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Child Information</h2>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="childName"
          type="text"
          placeholder="Child's Name"
          value={formData.childName}
          onChange={handleChange}
          required
        />
      </div>
      <h3 className="text-lg font-bold mb-2">Child's Sex</h3>
      <div className="mb-4">
        <label>
          <input
            type="radio"
            name="childSex"
            value="male"
            className="mr-2"
            checked={formData.childSex === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="childSex"
            value="female"
            className="mr-2"
            checked={formData.childSex === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="childDob"
          type="text"
          placeholder="Child's Date of Birth"
          value={formData.childDob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="relationship"
          type="text"
          placeholder="What is your relationship to the child?*"
          value={formData.relationship}
          onChange={handleChange}
          required
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Autism Assessment</h2>
      <h3 className="text-lg font-bold mb-2">Does your child have an autism diagnosis?</h3>
      <div className="mb-4">
        <label>
          <input
            type="radio"
            name="autismDiagnosis"
            value="yes"
            className="mr-2"
            checked={formData.autismDiagnosis === 'yes'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="autismDiagnosis"
            value="no"
            className="mr-2"
            checked={formData.autismDiagnosis === 'no'}
            onChange={handleChange}
          />
          No
        </label>
      </div>
      <h3 className="text-lg font-bold mb-2">Is your child in need of an autism assessment?</h3>
      <div className="mb-4">
        <label>
          <input
            type="radio"
            name="autismAssessment"
            value="yes"
            className="mr-2"
            checked={formData.autismAssessment === 'yes'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="ml-4">
          <input
            type="radio"
            name="autismAssessment"
            value="no"
            className="mr-2"
            checked={formData.autismAssessment === 'no'}
            onChange={handleChange}
          />
          No
        </label>
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="otherDiagnosis"
          type="text"
          placeholder="Does your child have any other diagnosis?"
          value={formData.otherDiagnosis}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
