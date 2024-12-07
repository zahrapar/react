import './assets/css/main.css'
import AppFeatures from './components/AppFeatures'
import Brands from './components/Brands'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ';  
import Subscribe from './components/Subscribe'



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
        <Footer />
      </main>



    </div>
  )
}

export default App
