import React, { useState } from 'react';
import chevronUpIcon from '../assets/images/Group 6.svg';
import chevronIcon from '../assets/images/Group 5.svg';

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <div className="panel" onClick={toggleAccordion}>
        <span style={{ textDecoration: isOpen ? 'underline' : 'none', fontWeight: 'bold' }}>
          {item.title}
        </span>
        <img src={isOpen ? chevronUpIcon : chevronIcon} alt="Chevron icon" className="icon-upp" />
      </div>

      {isOpen && (
        <div className="faq-text">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;





// import React, { useState } from 'react';
// import chevronUpIcon from '../assets/images/Group 6.svg';
// import chevronIcon from '../assets/images/Group 5.svg';

// const AccordionItem = ({ item }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen); 
//   };

//   return (
//     <div className="faq">
//       <div className={`panel ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
//         {/* <span >{item.title}</span> */}
//         <span style={{ textDecoration: 'none', fontWeight: 'bold' }}></span>
//         {/* <img src={chevronUpIcon} alt="Chevron icon" className="icon-upp" /> */}
//         {/* <i className="item-icon fa-solid fa-chevron-down"></i> */}
//         <i className={` btn-circlee item-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
//       </div>

//       {isOpen && (
//         <div className="faq-text">
//           <p>{item.content}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccordionItem;
