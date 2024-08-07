import React, { useEffect } from 'react';

const ContactBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const contactBar = document.getElementById('contact-bar');
      if (window.scrollY > 50) {
        contactBar.style.top = '-50px';
      } else {
        contactBar.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="contact-bar" className="contact-header">
      {/* Tu contenido de la barra de contacto aquí */}
      <p>Redes y Dirección</p>
    </div>
  );
};

export default ContactBar;
