
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
          © 2025 Alex Chen. All rights reserved.
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <motion.a 
            href="https://www.instagram.com/joetheboy_" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 sm:p-0"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a 
            href="https://x.com/joetheboy_" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 sm:p-0"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
