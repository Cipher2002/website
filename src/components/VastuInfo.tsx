import { motion } from 'framer-motion';
import { 
  Wind, 
  Droplets, 
  Flame, 
  Mountain, 
  Globe,
  Sparkles,
  Heart,
  TrendingUp
} from 'lucide-react';

const VastuInfo = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const elements = [
    { name: 'Earth (Prithvi)', icon: Mountain, color: 'bg-amber-100', iconColor: 'text-amber-600', description: 'Stability and grounding' },
    { name: 'Water (Jal)', icon: Droplets, color: 'bg-blue-100', iconColor: 'text-blue-600', description: 'Flow and abundance' },
    { name: 'Fire (Agni)', icon: Flame, color: 'bg-red-100', iconColor: 'text-red-600', description: 'Energy and transformation' },
    { name: 'Air (Vayu)', icon: Wind, color: 'bg-gray-100', iconColor: 'text-gray-600', description: 'Circulation of energy' },
    { name: 'Space (Akasha)', icon: Globe, color: 'bg-purple-100', iconColor: 'text-purple-600', description: 'Connection of elements' }
  ];  

  const benefits = [
    { title: 'Positive Energy Flow', icon: Sparkles, description: 'Enhance productivity and harmony' },
    { title: 'Health and Well-Being', icon: Heart, description: 'Reduce stress and promote health' },
    { title: 'Success and Prosperity', icon: TrendingUp, description: 'Attract opportunities and growth' }
  ];

  return (
    <section id='vastuinfo' className="py-20 bg-gradient-to-b from-earth-yellow to-tigers-eye">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pakistan-green mb-6">
            Discover the Power of Vastu Shastra
          </h2>
          <p className="text-lg text-pakistan-green max-w-3xl mx-auto">
            At Vastushodhan, we delve into the ancient wisdom of Vastu Shastra, a holistic science that harmonizes the energies of your environment.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="bg-cornsilk rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <benefit.icon className="w-12 h-12 text-tigers-eye mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-pakistan-green">{benefit.title}</h3>
              <p className="text-dark-moss-green">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Five Elements */}
        <motion.div {...fadeInUp} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-pakistan-green">Elements of Vastu</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {elements.map((element) => (
              <motion.div
                key={element.name}
                className={`${element.color} rounded-lg p-6 text-center shadow-xl`}
                whileHover={{ scale: 1.05 }}
              >
                <element.icon className={`w-12 h-12 mx-auto mb-4 ${element.iconColor}`} />
                <h4 className="font-semibold mb-2 text-pakistan-green">{element.name}</h4>
                <p className="text-sm text-dark-moss-green">{element.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div {...fadeInUp} className="text-center">
          <p className="text-lg text-pakistan-green-600 mb-8 max-w-3xl mx-auto">
            At Vastushodhan, we are dedicated to helping you harness the power of Vastu Shastra to transform your space into a haven of positivity and success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cornsilk text-pakistan-green px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VastuInfo;