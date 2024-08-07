import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-200 p-6 shadow-md"> {/* Remueve mt-16 */}
      <div className="flex flex-wrap justify-around items-center">
        <div className="text-center m-4">
          <div className="mb-2">
            <i className="fas fa-phone-alt text-blue-500 text-4xl"></i>
          </div>
          <h3 className="font-bold">Phone</h3>
          <p>800-248-1021</p>
        </div>
        <div className="text-center m-4">
          <div className="mb-2">
            <i className="fas fa-envelope text-blue-500 text-4xl"></i>
          </div>
          <h3 className="font-bold">Email</h3>
          <p>info@abahometherapy.com</p>
        </div>
        <div className="text-center m-4">
          <div className="mb-2">
            <i className="fas fa-sms text-blue-500 text-4xl"></i>
          </div>
          <h3 className="font-bold">Text</h3>
          <p>800-248-1021</p>
        </div>
        <div className="text-center m-4">
          <div className="mb-2">
            <i className="fas fa-calendar-alt text-blue-500 text-4xl"></i>
          </div>
          <h3 className="font-bold">Schedule Appointment</h3>
        </div>
        <div className="text-center m-4">
          <div className="mb-2">
            <i className="fas fa-comments text-blue-500 text-4xl"></i>
          </div>
          <h3 className="font-bold">Live Chat</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
