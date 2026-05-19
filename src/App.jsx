import About from './components/About'
import Careers from './components/Careers'
import ClientsCarousel from './components/ClientsCarousel'
import ClientPortal from './components/ClientPortal'
import Contact from './components/Contact'
import Differentials from './components/Differentials'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LocationMap from './components/LocationMap'
import MidCta from './components/MidCta'
import MissionVisionValues from './components/MissionVisionValues'
import ProcessTimeline from './components/ProcessTimeline'
import Services from './components/Services'
import Stats from './components/Stats'
// import StructureGallery from './components/StructureGallery'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <MissionVisionValues />
        <Services />
        <Differentials />
        {/* <StructureGallery /> */}
        <ProcessTimeline />
        <MidCta />
        <ClientPortal />
        <ClientsCarousel />
        <Testimonials />
        <LocationMap />
        <Contact />
        <Careers />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
