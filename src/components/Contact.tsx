
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the edge function to send email and save to database
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send message');
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. Joseph will get back to you soon.",
      });
      
      setContactForm({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error sending message",
        description: error.message || "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Film strip divider */}
        <div className="film-strip h-2 mb-16"></div>
        
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-foreground"
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
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <Mail className="mr-3 sm:mr-4 text-foreground flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base break-all text-muted-foreground">alijosephvictor@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 sm:mr-4 text-foreground flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base text-muted-foreground">+234 813 655 7795</span>
              </div>
            </div>
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
                className="bg-background border-border text-foreground placeholder-muted-foreground h-12 focus:border-foreground transition-colors"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="bg-background border-border text-foreground placeholder-muted-foreground h-12 focus:border-foreground transition-colors"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="bg-background border-border text-foreground placeholder-muted-foreground min-h-[120px] resize-none focus:border-foreground transition-colors"
                required
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full border border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold h-12 transition-all duration-300"
              variant="outline"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
