import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  { image: '/images/chikitin.jpeg', text: 'Mi viaje a Iquitos y a la Isla de los Monos fue una inmersión completa en la esencia selvática del Amazonas. Desde el momento en que llegamos, el bullicio de la ciudad dio paso a la serenidad de la naturaleza. En la Isla de los Monos, me encontré rodeado de una increíble diversidad de fauna, pero lo más memorable fue el tiempo que pasé interactuando con los monos. Verlos moverse libremente entre los árboles y observar sus comportamientos naturales fue una experiencia profundamente enriquecedora. Los guías locales compartieron historias fascinantes sobre la vida en la selva y las tradiciones de la región, haciendo que cada momento fuera educativo y mágico. La belleza de la isla y la calidez de sus habitantes hicieron que mi visita fuera verdaderamente inolvidable. Si buscas una conexión auténtica con la naturaleza y una experiencia fuera de lo común, este destino es perfecto.' },
  { image: '/images/monis.jpeg', text: 'Explorar el Amazonas, específicamente el Río de los Monos, fue como adentrarse en un sueño tropical. Navegar por el río, rodeado de exuberante vegetación y el canto de los pájaros exóticos, me hizo sentir como si estuviera en otro mundo. La travesía en bote nos permitió descubrir rincones ocultos de la selva, donde los monos juegan y se deslizan entre las copas de los árboles. La tranquilidad del agua y la inmensidad de la selva te envuelven en un abrazo cálido y relajante. Durante nuestro recorrido, aprendimos sobre la importancia ecológica de este ecosistema y los esfuerzos para su conservación. La experiencia fue un testimonio de la vitalidad y la magia del Amazonas, y me dejó con una profunda admiración por su belleza y biodiversidad.' },
  { image: '/images/moni.jpeg', text: 'Sobrevolar las Líneas de Nazca fue uno de los momentos más asombrosos de mi vida. Desde el aire, la Figura de los Monos emerge en toda su magnificencia, una obra de arte ancestral que desafía la comprensión. El vuelo sobre las líneas nos permitió apreciar la precisión y el ingenio de estas figuras en su contexto geográfico, y la visión de los monos en el desierto fue una experiencia realmente reveladora. Mientras nos desplazábamos por el cielo, me invadió una sensación de asombro y respeto por la civilización que creó estos misteriosos geoglifos. Cada línea, cada figura, cuenta una historia que ha perdurado por siglos, y el vuelo fue una forma sublime de conectar con la historia antigua de Perú. Si eres un amante de la arqueología y la historia, esta experiencia es un viaje imprescindible.' },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <button onClick={prevTestimonial}>&lt;</button>
      <div className="testimonial">
        <img src={testimonials[currentTestimonial].image} alt="Cliente" />
        <div className="testimonial-content">
          <h3>Testimonio de</h3>
          <h2>NUESTROS CLIENTES</h2>
          <p>{testimonials[currentTestimonial].text}</p>
        </div>
      </div>
      <button onClick={nextTestimonial}>&gt;</button>
    </div>
  );
};

export default Testimonials;
