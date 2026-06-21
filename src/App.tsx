import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import MethodologySection from './sections/MethodologySection'
import SectorsSection from './sections/SectorsSection'
import WhyUsSection from './sections/WhyUsSection'
import RoadmapSection from './sections/RoadmapSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import WhatsAppButton from './sections/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <SectorsSection />
      <WhyUsSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
