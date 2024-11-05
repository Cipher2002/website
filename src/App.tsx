import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VastuInfo from './components/VastuInfo';
import WhatsAppIcon from "./components/WhatsAppIcon"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/+918368532837", "_blank")
  }

  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-b from-dark-moss-green to-pakistan-green">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="sticky top-0">
        <Hero />
      </main>
      <main className='relative z-20'>
        <About />
        <VastuInfo />
      </main>
      <WhatsAppIcon
        onClick={handleWhatsApp}
        className="fixed bottom-4 right-4 w-12 h-12 transition-transform transform hover:scale-110 hover:opacity-80 z-50"
      />
    </div>
  );
}

export default App;