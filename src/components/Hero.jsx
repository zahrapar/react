import React from 'react'
import appstore from '../assets/images/appstore.svg'
import googleplay from '../assets/images/googleplay.svg'
import iphonemybudgetdesktop from '../assets/images/iphonemybudgetdesktop.svg'
import iphoneyourcardsdesktop from '../assets/images/iphoneyourcardsdesktop.svg'

const Hero = () => {
  return (
    <section id="hero">
    <div className="container">
        <div className="headline">
            <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
            <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons">
                <a className="btn-download-app" href="#"><img src={appstore} /></a>
                <a className="btn-download-app" href="#"><img src={googleplay} /></a>
            </div>

            <a href="#" className="discover-more">
                <span className="btn-circle">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
                <span>Discover more</span>
            </a>
        </div>
        <div className="images">
            <img className="img-back" src={iphonemybudgetdesktop} />
            <img className="img-front" src={iphoneyourcardsdesktop} />
        </div>
    </div>
</section>
  )
}

export default Hero
