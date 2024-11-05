import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, Calendar, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { title: 'HOME', icon: Home, href: '/website/' },
    { title: 'ABOUT US', icon: Users, href: '#about' },
    { title: 'SERVICES', icon: Briefcase, href: '#vastuinfo' },
  ];

  const bookingItem = {
    title: 'BOOK AN APPOINTMENT',
    icon: Calendar,
    href: '/website/booking',
  };

  const location = useLocation();

  const handleNavClick = (href: string | undefined) => {
    setIsMenuOpen(false);

    if (!href) {
      window.location.reload();
    } else if (href.startsWith('#')) {
      if (location.pathname === '/website/booking') {
        window.location.replace('/website/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.location.replace(href);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-pakistan-green shadow-md z-50" role="navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              window.location.replace('/website/');
            }}
          >
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Vastushodhan Logo" className='w-12 h-12' />
            <span className="text-2xl font-semibold text-cornsilk">Vastushodhan</span>
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
            {/* Booking Appointment Link */}
            <button onClick={() => handleNavClick(bookingItem.href)}>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-cornsilk hover:text-pakistan-green hover:bg-earth-yellow rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <bookingItem.icon className="h-4 w-4" />
                <span>{bookingItem.title}</span>
              </motion.button>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cornsilk hover:text-pakistan-green"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
          {/* Booking Appointment Link in Mobile Menu */}
          <button onClick={() => handleNavClick(bookingItem.href)}>
            <button
              className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 w-full text-left"
              onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
            >
              <bookingItem.icon className="h-4 w-4" />
              <span>{bookingItem.title}</span>
            </button>
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
