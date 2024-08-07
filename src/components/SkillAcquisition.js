// src/components/SkillAcquisition.js

import React from 'react';
import '../styles.css'; // Asegúrate de que este archivo CSS existe y contiene los estilos necesarios
import image from '../img/skillindividualize.PNG'; // Ajusta la ruta de la imagen

const SkillAcquisition = () => {
    return (
        <section className="skill-acquisition-section py-8 px-4" data-aos="fade-up">
            <div className="container mx-auto text-center">
                <div className="w-full px-4">
                    <h2 className="text-2xl font-bold mb-4">Skill Acquisition</h2>
                    <p className="mb-4">
                        ABA therapists utilize a range of ABA strategies in the classroom to support skill acquisition within the school setting. These techniques may include Discrete Trial Training (DTT), which breaks down skills into smaller, manageable steps and uses repetition and reinforcement to promote learning.
                    </p>
                    <p>
                        Therapists also use naturalistic teaching strategies, such as pivotal response teaching (PRT), which focuses on overall development of communication, social skills, and independence over individual behaviors. Finally, ABA therapists may utilize positive reinforcement strategies, like token economy, to increase motivation for positive behaviors like cleaning up and working quietly.
                    </p>
                </div>
                <div className="w-full px-4 mt-8">
                    <img
                        src={image}
                        alt="Skill Acquisition"
                        className="rounded shadow-lg max-w-full h-auto mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillAcquisition;
