import React from 'react';

const HomeBased = () => {
  return (
    <main className="pt-16">
      {/* SVG de la ola para el clip-path */}
      <svg width="0" height="0">
  <defs>
    <clipPath id="wave-small" clipPathUnits="objectBoundingBox">
      <path d="M0,0.8 C0.2,0.9 0.4,0.7 0.5,0.7 C0.6,0.7 0.8,0.9 1,0.8 V1 H0 Z" />
    </clipPath>
  </defs>
</svg>


      {/* Sección de Video con clip-path de ola */}
      <section className="video-container relative h-screen">
        <video 
          className="background-video-hosted absolute w-full h-full object-cover" 
          autoPlay muted playsInline loop 
          src="https://abahometherapy.com/wp-content/uploads/2024/06/file.mp4"
          style={{ clipPath: 'url(#wave-bottom)' }}
        ></video>
        <div className="overlay-text absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">#1 ABA Therapy</h1>
          <h2 className="text-3xl">Provider in Florida</h2>
        </div>
      </section>
    </main>
  );
};

export default HomeBased;
