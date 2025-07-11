
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Star, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [activeService, setActiveService] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const services = [
    {
      title: "Video Editing",
      description: "Professional post-production for commercials, documentaries, and social content",
      price: "$150/hour",
      features: ["Color correction", "Audio sync", "Transitions", "Final delivery"]
    },
    {
      title: "Color Grading",
      description: "Cinematic color correction and grading to enhance your visual story",
      price: "$200/hour", 
      features: ["Color matching", "LUT creation", "Mood enhancement", "HDR support"]
    },
    {
      title: "Motion Graphics",
      description: "Custom animations, titles, and visual effects for dynamic content",
      price: "$250/hour",
      features: ["2D/3D animation", "Logo animation", "Text effects", "Visual compositing"]
    }
  ];

  const portfolio = [
    { id: 1, title: "Brand Commercial", thumbnail: "/placeholder.svg", video: "#" },
    { id: 2, title: "Music Video", thumbnail: "/placeholder.svg", video: "#" },
    { id: 3, title: "Documentary", thumbnail: "/placeholder.svg", video: "#" },
    { id: 4, title: "Event Coverage", thumbnail: "/placeholder.svg", video: "#" },
    { id: 5, title: "Product Demo", thumbnail: "/placeholder.svg", video: "#" },
    { id: 6, title: "Corporate Video", thumbnail: "/placeholder.svg", video: "#" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Creative Agency",
      text: "Exceptional work quality and attention to detail. Our brand video exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Tech Startup",
      text: "Professional, reliable, and incredibly talented. Delivered our product demo on time and on budget.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Music Label", 
      text: "The color grading and editing transformed our music video into something truly special.",
      rating: 5
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black/70 absolute z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        <motion.div 
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ALEX CHEN
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Videographer & Editor
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.img 
              src="/placeholder.svg" 
              alt="Alex Chen" 
              className="w-full max-w-lg rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              With over 8 years of experience in video production and post-production, I specialize in creating compelling visual stories that engage and inspire. From commercial work to documentaries, I bring technical expertise and creative vision to every project.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-amber-500 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  200+
                </motion.div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-amber-500 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  8+
                </motion.div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
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
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          
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
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Play size={48} className="text-white" />
                    </motion.div>
                  </div>
                </div>
                <motion.h3 
                  className="text-xl font-semibold mt-4 text-center"
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Clients Say
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-gray-800 h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} size={20} className="text-amber-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="mr-4 text-amber-500" size={20} />
                  <span>alex@alexchenvideo.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-amber-500" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
              >
                <Download className="mr-2" size={16} />
                Download Rate Card
              </Button>
            </motion.div>
            
            <motion.form
              onSubmit={handleContactSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
