import { motion } from 'framer-motion';
import { Clock3, Users, CheckCircle2, Calendar, FileText, MessageSquare, Clock } from 'lucide-react';

const consultationSteps = [
  {
    icon: Calendar,
    title: "Schedule",
    description: "Choose your preferred date and time",
    color: "bg-blue-500"
  },
  {
    icon: MessageSquare,
    title: "Consult",
    description: "Meet with our Vastu expert virtually",
    color: "bg-green-500"
  },
  {
    icon: FileText,
    title: "Receive",
    description: "Get your detailed Vastu analysis report",
    color: "bg-purple-500"
  }
];

const BookingHero = () => {
  return (
    <div className="relative py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <div className="flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-1">
                <Clock3 className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-600 font-medium">1 hour consultation</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Begin Your Journey to
              <span className="block text-purple-600">Harmonious Living</span>
            </h1>
            <p className="text-xl text-gray-600">
              Schedule your personalized Vastu consultation and transform your space into a sanctuary of positive energy and success.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {consultationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {index < consultationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80"
                alt="Vastu Consultation"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Expert Consultation</h3>
                        <p className="text-white/80 text-sm">Professional Vastu guidance</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-white/80">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Detailed 1 hour session</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Comprehensive report included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-sm font-medium">Instant Booking</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingHero;