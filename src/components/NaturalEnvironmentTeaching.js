// src/components/NaturalEnvironmentTeaching.js

import React from 'react';
import '../styles.css'; // Asegúrate de que este archivo CSS existe y contiene los estilos necesarios
import image from '../img/Naturals.PNG'; // Ajusta la ruta de la imagen

const NaturalEnvironmentTeaching = () => {
    return (
        <section className="natural-environment-teaching-section py-8 px-4" data-aos="fade-up">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Natural Environment Teaching</h2>
                    <p className="mb-4">
                        Your child will follow a designated treatment plan based on the natural school environment, encompassing skills like asking appropriate questions and sitting at a table or desk. Your child’s ABA therapist will adapt their strategies and techniques based on the specific challenges and goals of the child they are supporting. This flexibility allows therapists to address immediate concerns, reinforce positive behaviors, and promote skill acquisition in real-time.
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <img
                        src={image}
                        alt="Natural Environment Teaching"
                        className="rounded shadow-lg max-w-full h-auto mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default NaturalEnvironmentTeaching;
