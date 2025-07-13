
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Film strip divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cinematic-white to-transparent"></div>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <motion.img 
            src="/placeholder.svg" 
            alt="Visual Storyteller" 
            className="w-full max-w-lg rounded-sm shadow-[var(--shadow-cinematic)] filter grayscale hover:grayscale-0 transition-all duration-700 hover-cinematic"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          {/* Cinematic frame overlay */}
          <div className="absolute inset-0 border border-cinematic-white/20 rounded-sm pointer-events-none"></div>
        </div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-cinematic font-bold mb-6 text-film-title">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-8"></div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-cinematic-gray-light mb-8 leading-relaxed font-modern font-light tracking-wide"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            With over 8 years of experience in video production and post-production, I specialize in creating compelling visual stories that engage and inspire. From commercial work to documentaries, I bring technical expertise and creative vision to every project.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 gap-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center group hover-cinematic">
              <motion.div 
                className="text-4xl font-cinematic font-bold text-primary mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                200+
              </motion.div>
              <div className="text-cinematic-gray font-modern text-sm uppercase tracking-widest">Projects Completed</div>
            </div>
            
            <div className="text-center group hover-cinematic">
              <motion.div 
                className="text-4xl font-cinematic font-bold text-primary mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                8+
              </motion.div>
              <div className="text-cinematic-gray font-modern text-sm uppercase tracking-widest">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
