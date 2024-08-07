import React from 'react';

const Home = () => {
  return (
    <main className="pt-16">
      <section className="video-container relative h-screen">
        {/* Contenedor del video con fondo */}
        <video
          className="background-video-hosted absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          src="/img/video.mp4" // Ruta al video en la carpeta img
        ></video>
        <div className="overlay-text absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">#1 ABA Therapy</h1>
          <h2 className="text-3xl">Provider in Florida</h2>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-container relative">
          <img
            src="https://abahometherapy.com/wp-content/uploads/2024/05/ABA-Therapy-bg.webp"
            alt="Promo Image"
            className="promo-image w-full h-full object-cover"
          />
          <div className="promo-overlay absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50">
            <div className="promo-content">
              <h2 className="promo-title text-4xl font-bold mb-4">In ABA therapy</h2>
              <p className="promo-text mb-4">
                We go beyond addressing questions and deterring behaviors. Our focus is to understand the origins of these behaviors at their core. By gaining genuine insight, we provide effective interventions for lasting progress.
              </p>
              <div className="promo-buttons flex space-x-4">
                <a href="#" className="btn btn-custom rounded-full px-4 py-2 flex items-center transition duration-300">
                  <i className="bi bi-check-circle-fill mr-2"></i> START ABA THERAPY
                </a>
                <a href="#" className="btn btn-custom rounded-full px-4 py-2 flex items-center transition duration-300">
                  <i className="bi bi-play-btn-fill mr-2"></i> PLAY VIDEO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
