import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export const ImportantNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8"
    >
      <div className="flex items-start">
        <AlertTriangle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-red-700 mb-2">Important Notice</h3>
          <p className="text-red-700 font-bold mb-4">
            Vastushodhan operates as a REMOTE-ONLY consultation service.
          </p>
          <div className="space-y-2 text-red-600">
            <p className="font-bold">We DO NOT provide:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="font-bold">On-site or in-person visits</li>
              <li>Physical implementation of remedies</li>
              <li>Direct construction or modification services</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};