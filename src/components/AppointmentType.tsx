import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface ServiceType {
  id: string;
  title: string;
  duration: string;
  image: string;
  description: string;
}

interface ServiceTypesProps {
  services: ServiceType[];
  selectedService: ServiceType;
  onServiceSelect: (service: ServiceType) => void;
}

const ServiceTypes: React.FC<ServiceTypesProps> = ({ services, selectedService, onServiceSelect }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service Type</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <motion.button
            key={service.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onServiceSelect(service)}
            className={`relative overflow-hidden rounded-xl text-left transition-all ${
              selectedService.id === service.id
                ? 'ring-2 ring-purple-600'
                : 'hover:shadow-lg'
            }`}
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                <div className="flex items-center text-white/80">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypes;