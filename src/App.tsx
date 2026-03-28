import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import BioenergySection from './components/BioenergySection';
import Statistics from './components/Statistics';
import Companies from './components/Companies';
import News from './components/News';
import Events from './components/Events';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Institutional from './pages/Institutional';
import Bioenergy from './pages/Bioenergy';
import Consecana from './pages/Consecana';
import Ethanol from './pages/Ethanol';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'institutional') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigation} />
        <Institutional />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'bioenergy') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigation} />
        <Bioenergy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'consecana') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigation} />
        <Consecana />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'ethanol') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigation} />
        <Ethanol />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigation} />
      <Hero />
      <About />
      <BioenergySection />
      <Statistics />
      <Companies />
      <News />
      <Events />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
