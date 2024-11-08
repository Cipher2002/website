import { motion } from 'framer-motion';
import { 
  Book, Shield, UserCheck, CreditCard, MapPin, 
  WrenchIcon, Lock, Scale, RefreshCw 
} from 'lucide-react';
import { ImportantNotice } from './ImportantNotice';
import { TermsCard } from './TermsCard';

const terms = [
  {
    icon: Book,
    title: '1. Introduction',
    content: 'These Terms and Conditions govern your use of the Vastushodhan website and services. By accessing or using our website, you agree to comply with these terms.'
  },
  {
    icon: Shield,
    title: '2. Services Offered',
    content: 'Vastushodhan provides Vastu consultancy services, including residential and commercial Vastu analysis, consultation, and recommendations.'
  },
  {
    icon: UserCheck,
    title: '3. Client Responsibilities',
    content: 'Clients must provide accurate information, including site maps, details about surroundings, and relevant property history. All information must be complete and truthful.'
  },
  {
    icon: CreditCard,
    title: '4. Fees and Payment',
    content: 'Service fees will be quoted during the proposal phase and must be paid in full before receiving reports or recommendations.'
  },
  {
    icon: MapPin,
    title: '5. No On-Site Visits',
    content: 'Vastushodhan operates entirely remotely. We do not conduct on-site or in-person consultations. All services are delivered digitally.'
  },
  {
    icon: WrenchIcon,
    title: '6. Implementation',
    content: 'While we provide detailed recommendations, clients are responsible for implementing any suggested remedies or modifications.'
  },
  {
    icon: Lock,
    title: '7. Confidentiality',
    content: 'We protect your privacy. All information shared with Vastushodhan remains confidential and is used solely for providing our services.'
  },
  {
    icon: Scale,
    title: '8. Limitation of Liability',
    content: 'Our liability is limited to the amount paid for services. We are not liable for indirect or consequential damages.'
  },
  {
    icon: RefreshCw,
    title: '9. Changes to Terms',
    content: 'We may update these terms at any time. Continued use of our services after changes constitutes acceptance of updated terms.'
  }
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cornsilk to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pakistan-green mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-pakistan-green max-w-3xl mx-auto">
            Please review our terms carefully before using our services
          </p>
        </motion.div>

        <ImportantNotice />

        <div className="grid md:grid-cols-2 gap-8">
          {terms.map((term, index) => (
            <TermsCard
              key={term.title}
              {...term}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;