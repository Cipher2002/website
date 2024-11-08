import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative h-[600px]">
            <div className="absolute inset-0 z-0 bg-dark-moss-green">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
              alt="Peaceful home interior"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cornsilk"
          >
            <h1 className="text-4xl text-cornsilk md:text-6xl font-bold mb-6">
              Transform Your Space with Vastu Wisdom
            </h1>
            <p className="text-lg text-cornsilk md:text-xl mb-8">
              Discover the ancient science of architecture and design for harmony and prosperity
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cornsilk text-pakistan-green px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow hover:bg-earth-yellow"
              onClick={() => navigate('/booking')}
            >
              Book a Consultation
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-80">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
