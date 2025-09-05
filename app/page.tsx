import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Directions from "./components/Directions"
import Trainers from "./components/Trainers"
import Services from "./components/Services"
import Schedule from "./components/Schedule"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SEOOptimized from "./components/SEOOptimized"

export default function Home() {
  return (
    <>
      <SEOOptimized />
      <Header />
      <main>
        <Hero />
        <About />
        <Directions />
        <Trainers />
        <Services />
        <Schedule />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
