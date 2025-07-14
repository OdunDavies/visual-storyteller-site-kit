
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Portfolio = () => {
  const portfolio = [
    { id: 1, title: "Brand Commercial", thumbnail: "/placeholder.svg", video: "#" },
    { id: 2, title: "Music Video", thumbnail: "/placeholder.svg", video: "#" },
    { id: 3, title: "Documentary", thumbnail: "/placeholder.svg", video: "#" },
    { id: 4, title: "Event Coverage", thumbnail: "/placeholder.svg", video: "#" },
    { id: 5, title: "Product Demo", thumbnail: "/placeholder.svg", video: "#" },
    { id: 6, title: "Corporate Video", thumbnail: "/placeholder.svg", video: "#" }
  ];

  const handlePortfolioClick = () => {
    window.open('https://drive.google.com/drive/folders/1JcdPh6JQ1VhZ2p8A3RFY4SEiXMalQPtC?usp=sharing', '_blank');
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Film strip divider */}
        <div className="film-strip h-2 mb-16"></div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            onClick={handlePortfolioClick}
            className="elegant-gradient text-white hover:shadow-lg hover:shadow-black/20 font-semibold transition-all duration-300"
            size="lg"
          >
            <ExternalLink className="mr-2" size={20} />
            View Full Portfolio
          </Button>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-foreground transition-colors duration-300">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play size={48} className="text-background" />
                  </motion.div>
                </div>
              </div>
              <motion.h3 
                className="text-xl font-semibold mt-4 text-center text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
