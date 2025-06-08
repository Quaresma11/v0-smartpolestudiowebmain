import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Trainers from "./components/Trainers"
import Gallery from "./components/Gallery"
import Schedule from "./components/Schedule"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Gallery />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  )
}
