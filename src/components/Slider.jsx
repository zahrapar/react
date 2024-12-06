import React from 'react'
import iphoneLeft from '../assets/images/iPhone 12 Pro left.svg'
import iphone from '../assets/images/iPhone 12 Pro.svg'
import iphoneRight from '../assets/images/iPhone 12 Pro right.svg'

const Slider = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
    <div className="container space-y-3">
      <h2 className="h1">How Does It Work?</h2>

      <div className="carousel">
        <div className="carousel-item">
          <img src={iphoneLeft} alt="iPhone 12 Pro left" />
        </div>
        <div className="carousel-item">
          <img src={iphone} alt="iPhone 12 Pro" />
        </div>
        <div className="carousel-item">
          <img src={iphoneRight} alt="iPhone 12 Pro right" />
        </div>
      </div>
    </div>
    <div className="text">
      <h3 className="h4">Latest transaction history</h3>
      <p>
        Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu
        sociis tristique quisque hac in consectetur condimentum.
      </p>
    </div>
  </section>
  )
}

export default Slider
