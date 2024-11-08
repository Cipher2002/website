import { motion } from 'framer-motion';
import { Home, Building2, Building, Search, Users, MessageSquare, Compass, Search as SearchIcon, ClipboardCheck, PhoneCall, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {ServiceCard } from './ServiceCard'

const Services = () => {

  const services = [
    {
      id: 1,
      title: 'Residential Vastu',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Commercial Vastu',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Office Premises Vastu',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'New Property Vastu',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    },
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Initial Consultation',
      description: 'We begin with a site discussion to understand your specific requirements and provide a service quote.',
    },
    {
      icon: MessageSquare,
      title: 'Information Gathering',
      description: 'You provide a 2D map, surroundings details, and relevant property history.',
    },
    {
      icon: Compass,
      title: 'Direction Analysis',
      description: 'We evaluate property orientation and zoning for optimal energy flow.',
    },
    {
      icon: SearchIcon,
      title: 'Vastu Analysis',
      description: 'Our team conducts a thorough analysis with preliminary findings.',
    },
    {
      icon: ClipboardCheck,
      title: 'Detailed Report',
      description: 'We provide specific remedies for any Vastu imbalances identified.',
    },
    {
      icon: PhoneCall,
      title: 'Follow-Up Support',
      description: 'Ongoing support to ensure effective implementation of recommendations.',
    },
  ];

  const navigate = useNavigate();

  const handleServiceSelect = (id: number) => {
    localStorage.setItem('selectedServiceType', JSON.stringify(id));
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cornsilk to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pakistan-green mb-6">Our Services</h1>
          <p className="text-xl text-pakistan-green max-w-3xl mx-auto">
            Comprehensive Vastu solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>

        {/* Our Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pakistan-green mb-6">Our Process</h2>
          <p className="text-xl text-pakistan-green max-w-3xl mx-auto">
            A comprehensive approach to Vastu consultancy designed to meet your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-earth-yellow p-6 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="w-12 h-12 bg-cornsilk rounded-full flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-6 h-6 text-dark-moss-green" />
              </div>
              <h3 className="text-xl font-bold text-cornsilk mb-3 text-center">{step.title}</h3>
              <p className="text-cornsilk text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <button
            onClick={() => navigate('/terms')}
            className="flex items-center space-x-2 px-6 py-3 bg-earth-yellow text-cornsilk rounded-full 
                     hover:bg-tigers-eye hover:text-white transition-colors duration-300 font-medium"
          >
            <FileText className="w-5 h-5" />
            <span>View Terms and Conditions</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;