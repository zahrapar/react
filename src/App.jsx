import './assets/css/main.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

function App() {
  

  return (


    <div className="wrapper">

      <Header />
   
      <main>
        <Hero />
         <Testimonials />
      </main>

      <Footer />

    </div>
  )
}

export default App
