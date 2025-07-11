
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Basic Video Package",
      description: "A high-quality, 1-minute promotional video tailored for social media or product highlights.",
      price: "₦200,000",
      features: [
        "Concept planning & direction",
        "Up to 2 hours of on-location filming", 
        "Cinematic editing (music, transitions, color grading)",
        "Final delivery in HD, optimized for social platforms"
      ]
    },
    {
      title: "Viral Content Bundle",
      description: "Designed for brands looking to create multiple short-form, trend-driven videos with high engagement potential.",
      price: "Starting at ₦500,000", 
      features: [
        "3 to 5 short-form videos (30–60 seconds each)",
        "Creative ideation and scripting",
        "Full shoot + professional post-production",
        "Format optimization for TikTok, Instagram Reels, and YouTube Shorts"
      ]
    },
    {
      title: "Full Production / Campaign Package",
      description: "Ideal for larger projects, branded campaigns, or corporate storytelling requiring a more comprehensive production process.",
      price: "₦500,000 to ₦1,000,000+",
      features: [
        "Full creative development",
        "Multi-location and multi-day filming (as needed)",
        "Professional crew (camera, lighting, audio)",
        "Drone footage, motion graphics, and voiceover (where applicable)",
        "Final deliverables in multiple formats for web, broadcast, and social use"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Services & Rates
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveService(index)}
            >
              <Card className="bg-black/50 border-gray-800 hover:border-amber-500/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-3xl font-bold text-amber-500 mb-6">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
