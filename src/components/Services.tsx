import { motion } from 'framer-motion';
import { Home, Building2, Building, Search, Users, MessageSquare, Compass, Search as SearchIcon, ClipboardCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      id: 1,
      title: 'Residential Vastu',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      description: 'Transform your home into a sanctuary of peace and positivity. Our residential Vastu consultations focus on optimizing the layout and design of your living spaces to enhance family harmony, health, and overall happiness.',
    },
    {
      id: 2,
      title: 'Commercial Vastu',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80',
      description: 'Ensure your retail space attracts customers and encourages sales. We offer Vastu consultations specifically for shops and delivery areas, guiding you in creating an inviting and energetically balanced environment that promotes business growth.',
    },
    {
      id: 3,
      title: 'Office Premises Vastu',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      description: 'Enhance productivity and collaboration in your workplace. Our office Vastu services cater to private businesses, semi-government, and government offices, helping you create a conducive atmosphere that fosters success and teamwork.',
    },
    {
      id: 4,
      title: 'New Property Vastu',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
      description: 'Thinking of purchasing a new property? Our pre-purchase Vastu consultation helps you assess potential properties to ensure they align with Vastu principles, allowing you to make informed decisions that support your goals and well-being.',
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

  const terms = [
    {
      title: 'Introduction',
      content: 'These Terms and Conditions govern your use of the Vastushodhan website and services. By accessing or using our website, you agree to comply with these terms. If you do not agree, please refrain from using our services.'
    },
    {
      title: 'Services Offered',
      content: 'Vastushodhan provides Vastu consultancy services, including but not limited to residential and commercial Vastu analysis, consultation, and recommendations.'
    },
    {
      title: 'Client Responsibilities',
      content: 'To facilitate effective consultations, clients must provide accurate information, including site maps, details about the surroundings, and any relevant history of the premises. Clients are responsible for ensuring that all provided information is complete and truthful.'
    },
    {
      title: 'Fees and Payment',
      content: 'Fees for our services will be quoted during the proposal phase and must be paid in full prior to receiving any reports or recommendations. Payments can be made through the methods specified on our website.'
    },
    {
      title: 'No On-Site Visits',
      content: 'Vastushodhan does not offer on-site or in-person consultations. All services are conducted remotely, and clients must be prepared to provide necessary documentation electronically.'
    },
    {
      title: 'Implementation of Remedies',
      content: 'Clients are responsible for implementing any recommendations or remedies provided by Vastushodhan. We do not undertake the implementation of these suggestions.'
    },
    {
      title: 'Confidentiality',
      content: 'We respect your privacy and are committed to protecting your personal information. Any information shared with Vastushodhan will be kept confidential and used solely for the purpose of providing our services.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Vastushodhan shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or the reliance on our recommendations. Our liability is limited to the amount paid for the services rendered.'
    },
    {
      title: 'Changes to Terms',
      content: 'Vastushodhan reserves the right to modify these Terms and Conditions at any time. Changes will be posted on our website, and your continued use of our services constitutes acceptance of the updated terms.'
    }
  ];

  const handleServiceClick = (service: any) => {
    localStorage.setItem('selectedServiceType', JSON.stringify(service));
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-earth-yellow rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-cornsilk opacity-10"></div>
                <div className="absolute top-4 left-4 bg-cornsilk p-3 rounded-full shadow-lg">
                  <service.icon className="w-6 h-6 text-dark-moss-green" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cornsilk mb-4">{service.title}</h3>
                <p className="text-cornsilk mb-6">{service.description}</p>
                <Link
                  to="/booking"
                  onClick={() => handleServiceClick(service.id)}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-dark-moss-green bg-cornsilk hover:bg-tigers-eye hover:text-cornsilk transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
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

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-earth-yellow rounded-2xl p-8 mb-32 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-cornsilk mb-6">Important Information</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-cornsilk mb-2">What We Don't Do</h4>
              <ul className="list-disc list-inside text-cornsilk space-y-2">
                <li>On-Site/In-Person Visits: Currently, we do not conduct on-site or in-person visits.</li>
                <li>Implementation of Suggested Remedies: While we provide recommendations, we do not handle the implementation.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cornsilk mb-2">Client Requirements</h4>
              <ul className="list-disc list-inside text-cornsilk space-y-2">
                <li>Accurate information including site maps and surroundings details</li>
                <li>All documentation must be provided electronically</li>
                <li>Payment must be completed before receiving reports</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Terms and Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-earth-yellow rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-cornsilk mb-8">Terms and Conditions</h2>
          <div className="space-y-6">
            {terms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-cornsilk mb-2">{index + 1}. {term.title}</h3>
                <p className="text-cornsilk">{term.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;