import React from 'react';
import image from '../img/image.png'; // Asegúrate de que esta ruta sea correcta

const IndividualizedAttentionSection = () => {
  return (
    <section className="individualized-attention-section py-8 px-4 shadow-lg mt-8" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img
            src={image}
            alt="Individualized Attention"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold text-primary mb-4">Individualized Attention</h2>
          <p className="text-secondary mb-8">
            Within the school setting, ABA therapists offer targeted support to enhance academic performance, develop social skills, and address problem behaviors. They work closely with your child, tailoring instruction to their unique learning style and abilities, ensuring that academic progress is met.
          </p>
          <p className="text-secondary">
            Additionally, therapists focus on promoting social skills by facilitating interactions with peers, teaching appropriate social cues and norms, and fostering friendships. Lastly, ABA therapists address problem behaviors, like tantrums, by utilizing evidence-based strategies to identify the underlying causes and implement effective coping skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndividualizedAttentionSection;
