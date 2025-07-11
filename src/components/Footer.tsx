
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          © 2024 Alex Chen. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-amber-500 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
