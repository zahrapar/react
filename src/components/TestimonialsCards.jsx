
import React from 'react';
import StarRating from './StarRating';

import Quote from '../assets/images/quotes.svg';

const TestimonialsCards = ({ item }) => {
  return (
    <div className="testi-card">
      <div className="quote">
      <img src={Quote} alt="" />
      </div>
      <div className="rating">
        {/* <img src={item.ratingImage} alt="Rating Stars" /> */}

        <StarRating starRating={item.starRating}/>
      </div>
      <p className="testimonial-text">{item.comment}</p>
      <div className="authors">
        <img src={item.avatarUrl} alt={item.author} />
        <div>
          <h5 className="name">{item.author}</h5>
          <p className="job">{item.jobRole}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;


// import React from 'react'

// const TestimonialsCard = ({ item }) => {
//     return (
//       <div className="testi-card">
//         <div className="quote">
//           <img src={item.quoteImage} alt="Quote Icon" />
//         </div>
//         <div className="rating">
//           <img src={item.ratingImage} alt="Rating Stars" />
//         </div>
//         <p className="testimonial-text">{item.text}</p>
//         <div className="authors">
//           <img src={item.authorImage} alt={item.authorName} />
//           <div>
//             <h5 className="name">{item.authorName}</h5>
//             <p className="job">{item.authorJob}</p>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default TestimonialsCards
