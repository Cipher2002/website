import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  onSelect: (id: number) => void;
  id: number;
}

export const ServiceCard = ({ title, icon: Icon, image, onSelect, id }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group overflow-hidden rounded-2xl shadow-xl"
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
        
        <div className="absolute top-4 left-4 bg-cornsilk p-3 rounded-full shadow-lg">
          <Icon className="w-6 h-6 text-dark-moss-green" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white mb-4 text-center px-4">{title}</h3>
          <button
            onClick={() => onSelect(id)}
            className="px-6 py-3 bg-cornsilk text-dark-moss-green rounded-full font-medium 
                     hover:bg-tigers-eye hover:text-white transition-colors duration-300
                     transform translate-y-0 hover:-translate-y-1"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </motion.div>
  );
};