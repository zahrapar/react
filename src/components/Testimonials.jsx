import React, { useState } from 'react';
import TestimonialsCards from './TestimonialsCards'; // Importera rätt komponent

import Quote from '../assets/images/quotes.svg';
import StarLeft from '../assets/images/star-left.svg';
import StarRight from '../assets/images/star-right.svg';
import Fannie from '../assets/images/fannie.svg';
import Albert from '../assets/images/albert.svg';

const Testimonials = () => {
  const [testimonialsCards, setTestimonialsCards] = useState([
    {
      quoteImage: Quote,
      ratingImage: StarLeft,
      text: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis...',
      authorImage: Fannie,
      authorName: 'Fannie Summers',
      authorJob: 'Designer',
    },
    {
      quoteImage: Quote,
      ratingImage: StarRight,
      text: 'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin...',
      authorImage: Albert,
      authorName: 'Albert Flores',
      authorJob: 'Developer',
    },
  ]);

  return (
    <section className="testimonials">
      <div className="testimonial-container">
        <div className="testi-content">
          <span className="title">Clients are Loving Our App</span>
          <div className="testi-cards">
            {testimonialsCards.map((item, index) => (<TestimonialsCards key={index} item={item} />  ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
