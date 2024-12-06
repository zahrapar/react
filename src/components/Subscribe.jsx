import React from 'react'
import notificationIcon from '../assets/images/notification.svg';
import emailIcon from '../assets/images/email.svg';

const Subscribe = () => {
  return (
    <section className="subscribe" >
    <div className="subscribe-container ">
        <div className="sub-content">
            <div className="bellicon">
            <img src={notificationIcon} alt="bell" />
            </div>
            <h2>Subscribe to our newsletter to stay  <br /> informed about latest updates</h2>
            <form className="form">
                <div className="form-email">
                    <span className="email-icon">
                        <img src={emailIcon} alt="Email Icon" />
                    </span>
                    <input type="email" placeholder=" email" />
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
</section>
  )
}

export default Subscribe
