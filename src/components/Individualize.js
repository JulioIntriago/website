// src/components/Individualize.js

import React from 'react';
import '../styles.css'; // Asegúrate de que este archivo CSS existe y contiene los estilos necesarios
import image from '../img/atention.PNG'; // Ajusta la ruta de la imagen

const Individualize = () => {
    return (
        <section className="individualize-section py-8 px-4" data-aos="fade-up">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full md:w-1/2 px-4 flex items-center justify-center">
                    <img
                        src={image}
                        alt="Individualized Attention"
                        className="rounded shadow-lg max-w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Individualized Attention</h2>
                    <p className="mb-4">
                        Within the school setting, ABA therapists offer targeted support to enhance academic performance,
                        develop social skills, and address problem behaviors. They work closely with your child, tailoring
                        instruction to their unique learning style and abilities, ensuring that academic progress is met.
                    </p>
                    <p>
                        Additionally, therapists focus on promoting social skills by facilitating interactions with peers,
                        teaching appropriate social cues and norms, and fostering friendships. Lastly, ABA therapists
                        address problem behaviors, like tantrums, by utilizing evidence-based strategies to identify the
                        underlying causes and implement effective coping skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Individualize;
