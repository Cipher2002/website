import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h2>
      <div className="space-y-6">
        {terms.map((term, index) => (
          <motion.div
            key={term.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{index + 1}. {term.title}</h3>
            <p className="text-gray-600">{term.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;