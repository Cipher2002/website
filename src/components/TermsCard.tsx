import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TermsCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
  index: number;
}

export const TermsCard = ({ title, content, icon: Icon, index }: TermsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="bg-earth-yellow p-4">
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 text-dark-moss-green" />
          <h3 className="text-xl font-bold text-dark-moss-green">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700">{content}</p>
      </div>
    </motion.div>
  );
};