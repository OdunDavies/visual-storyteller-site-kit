
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto bg-background">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.img 
            src="/jtb.jpg" 
            alt="Joseph Victor" 
            className="w-full max-w-lg rounded-lg shadow-lg border border-border grayscale hover:grayscale-0 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-6 leading-relaxed"
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
                className="text-3xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                200+
              </motion.div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                8+
              </motion.div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
