
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

export const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Inquiry from ${contactForm.name}`);
      const body = encodeURIComponent(
        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
      );
      const mailtoLink = `mailto:alijosephvictor@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Your default email app should open with the message pre-filled.",
      });
      
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <Mail className="mr-3 sm:mr-4 text-amber-500 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base break-all">alijosephvictor@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 sm:mr-4 text-amber-500 flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base">+234 813 655 7795</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black w-full sm:w-auto"
            >
              <Download className="mr-2" size={16} />
              Download Rate Card
            </Button>
          </motion.div>
          
          <motion.form
            onSubmit={handleContactSubmit}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
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
                className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-12"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-12"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 min-h-[120px] resize-none"
                required
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold h-12"
            >
              {isSubmitting ? 'Opening Email...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
