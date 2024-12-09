import React from 'react'
import './assets/css/main.css'
import AppFeatures from './components/AppFeatures'
import Brands from './components/Brands'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Brands />
        <AppFeatures />
        <Slider />
        <Features />
        <Testimonial />
        <FAQ />
        <Subscribe />
      
      </main>
      <Footer />

    </div>
  )
}

export default App
