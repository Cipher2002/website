import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VastuInfo from './components/VastuInfo';
import WhatsAppIcon from "./components/WhatsAppIcon";
import Booking from './components/Booking';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); // Empty dependency array ensures this runs only on initial render

  const handleWhatsApp = () => {
    window.open("https://wa.me/+918368532837", "_blank");
  };

  return (
    <Router basename="/website">
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
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <WhatsAppIcon
          onClick={handleWhatsApp}
          className="fixed bottom-4 right-4 w-12 h-12 transition-transform transform hover:scale-110 hover:opacity-80 z-50"
        />
      </div>
    </Router>
  );
}

export default App;
