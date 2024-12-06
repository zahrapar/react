// import React from 'react';
import React, { useState, useEffect } from 'react';

import chevronIcon from '../assets/images/Group 5.svg';
import chevronUpIcon from '../assets/images/Group 6.svg';
import phoneIcon from '../assets/images/phone.svg';
import messageIcon from '../assets/images/message.svg';
import AccordionItem from './AccordionItem';

const FAQ = () => {

  const [accordions , setAccordions] = useState([])



  const fetchFaq = async () => {

      const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
      const data = await res.json();
      setAccordions(data);
    
  }

  useEffect(() => {
    fetchFaq();
  }, []); 

  return (
    <div className="container">
      <section className="faq-container">
        <div className="faq-section">
          <div>
            <h2 className="h1">Any questions? Check out the FAQs</h2>
            <p>
              Still have unanswered questions and need to get
              <br />
              in touch?
            </p>
          </div>

          <div className="faq-content">

            {/* <div className="faq">
              <div className="panel">
                <span>Is any of my personal information stored in the App?</span>
                <img src={chevronIcon} alt="Chevron icon" />
              </div>
            </div>

            <div className="faq">
              <div className="panel">
                <span>What formats can I download my transaction history in?</span>
                <img src={chevronIcon} alt="Chevron icon" />
              </div>
            </div>

            <div className="faq">
              <div className="panel">
                <span>Can I schedule future transfers?</span>
                <img src={chevronUpIcon} alt="Chevron icon" className="icon-upp" />
              </div>
              <div className="faq-text">
                <p>
                  Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                  cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
                  fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim,
                  arcu purus gravida adipiscing euismod.
                </p>
              </div>
            </div>

            <div className="faq">
              <div className="panel">
                <span>When can I use Banking App services?</span>
                <img src={chevronIcon} alt="Chevron icon" />
              </div>
            </div>

            <div className="faq">
              <div className="panel">
                <span>Can I create my own password that is easy for me to remember?</span>
                <img src={chevronIcon} alt="Chevron icon" />
              </div>
            </div>

            <div className="faq">
              <div className="panel">
                <span>What happens if I forget or lose my password?</span>
                <img src={chevronIcon} alt="Chevron icon" />
              </div>
            </div>*/}
       


          {
             accordions.map((item) => (
               <AccordionItem key={item.id} item={item} />  ))
          }
        
        </div> 
         

          <div className="any-questions">
            <div className="card">
              <div className="text">
                <img src={phoneIcon} alt="Phone" />
                <p>Still have questions?</p>
                <a href="#" className="links">
                  Contact us <span>→</span>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="text">
                <img src={messageIcon} alt="Message" />
                <p>Don't like phone calls?</p>
                <a href="#" className="links">
                  Contact us <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
