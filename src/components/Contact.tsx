
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

export const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
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
  );
};
