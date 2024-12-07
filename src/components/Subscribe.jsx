import React, { useState } from 'react';
import notificationIcon from '../assets/images/notification.svg';
import emailIcon from '../assets/images/email.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');


  const validateEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (value.length < 2) {
      return 'Email must be at least 2 characters long.';
    }
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email (e.g.username@example.com).';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const validationError = validateEmail(value);
    setError(validationError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }
    alert('Subscribed successfully!');
    setEmail('');
    setError('');
  };

  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="sub-content">
          <div className="bellicon">
            <img src={notificationIcon} alt="bell" />
          </div>
          <h2>
            Subscribe to our newsletter to stay <br /> informed about latest updates
          </h2>
          <form className="form" onSubmit={handleSubmit}>
          
            {error && (
              <p
                style={{
                  color: 'red',
                  
                  marginBottom: '5px',
                  fontSize: '12px',
                  
                 
                }}
              >
                {error}
              </p>
            )}
            <div className="form-email">
              <span className="email-icon">
                <img src={emailIcon} alt="Email Icon" />
              </span>
              <input
                type="email"
                value={email}
                placeholder="Your email"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
