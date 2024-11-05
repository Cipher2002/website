import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { title: 'HOME', icon: Home, href: '#' },
    { title: 'ABOUT US', icon: Users, href: '#about' },
    { title: 'SERVICES', icon: Briefcase, href: '#services' },
    { title: 'BOOK AN APPOINTMENT', icon: Calendar, href: '#book' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-pakistan-green shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-1"
          >
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className='w-12 h-12'/>
            <span className="text-2xl font-semi-bold text-cornsilk">Vastushodhan</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5">
            {navItems.map((item, index) => (
              <motion.button
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-cornsilk hover:text-pakistan-green hover:bg-earth-yellow rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cornsilk hover:text-pakistan-green
              "
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.href)}
              className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 w-full text-left"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;