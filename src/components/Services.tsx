import { motion } from 'framer-motion';
import { Video, Zap, Briefcase, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PaymentModal } from '@/components/PaymentModal';
import { useState } from 'react';

export const Services = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const services = [
    {
      icon: <Video className="text-primary" size={32} />,
      title: "Basic Video Package",
      price: "₦200,000",
      description: "A high-quality, 1-minute promotional video tailored for social media or product highlights.",
      features: [
        "Concept planning & direction",
        "Up to 2 hours of on-location filming",
        "Cinematic editing (music, transitions, color grading)",
        "Final delivery in HD, optimized for social platforms"
      ]
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Viral Content Bundle",
      price: "Starting at ₦500,000",
      description: "Designed for brands looking to create multiple short-form, trend-driven videos with high engagement potential.",
      features: [
        "3 to 5 short-form videos (30–60 seconds each)",
        "Creative ideation and scripting",
        "Full shoot + professional post-production",
        "Format optimization for TikTok, Instagram Reels, and YouTube Shorts"
      ]
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: "Full Production / Campaign Package",
      price: "₦500,000 to ₦1,000,000+",
      description: "Ideal for larger projects, branded campaigns, or corporate storytelling requiring a more comprehensive production process.",
      features: [
        "Full creative development",
        "Multi-location and multi-day filming (as needed)",
        "Professional crew (camera, lighting, audio)",
        "Drone footage, motion graphics, and voiceover (where applicable)",
        "Final deliverables in multiple formats for web, broadcast, and social use"
      ]
    }
  ];

  const handleGetStarted = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">My Services & Rates</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Professional video production services tailored to bring your vision to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full flex flex-col shadow-sm">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex items-center mb-4 sm:mb-6">
                      {service.icon}
                      <div className="ml-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-primary font-semibold text-lg sm:text-xl">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="text-primary mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={() => handleGetStarted(service.title)}
                      className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-600 text-primary-foreground font-semibold mt-auto"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        packageName={selectedPackage}
      />
    </>
  );
};
