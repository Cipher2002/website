import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VastuInfo from './components/VastuInfo';
import WhatsAppIcon from "./components/WhatsAppIcon";
import Booking from './components/Booking';
import Services from './components/Services';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/+918368532837", "_blank");
  };

  return (
    <Router basename="/website/">
      <ScrollToTop />
      <div className="max-w-screen min-h-screen bg-cornsilk">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={
            <>
              <main className="sticky top-0">
                <Hero />
              </main>
              <main className='relative z-20'>
                <About />
                <VastuInfo />
              </main>
            </>
          } />
          <Route path='/services' element={<Services />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <WhatsAppIcon
          onClick={handleWhatsApp}
          className="fixed bottom-4 right-4 w-12 h-12 transition-transform transform hover:scale-110 z-50"
        />
      </div>
    </Router>
  );
}

export default App;
