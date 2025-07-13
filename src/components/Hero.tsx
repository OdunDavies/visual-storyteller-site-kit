
import { motion } from 'framer-motion';
import { Play, Award, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-strip-border">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter grayscale animate-film-grain"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1e8ff&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-black/90 via-cinematic-black/60 to-cinematic-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-foreground px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-cinematic font-bold mb-6 sm:mb-8 leading-[0.85] text-film-title text-cinematic-shadow">
            Visual <span className="text-primary block sm:inline">Storyteller</span>
          </h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-cinematic-gray-light max-w-4xl mx-auto leading-relaxed px-2 font-modern font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Crafting cinematic experiences through the lens of creativity.<br />
            From concept to final cut, I bring your vision to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="btn-cinematic text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto group relative overflow-hidden animate-glow-pulse"
              onClick={() => scrollToSection('portfolio')}
            >
              <Play className="mr-3 group-hover:animate-shutter transition-all duration-300" size={22} />
              View Demo Reel
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cinematic-white text-cinematic-white hover:bg-cinematic-white hover:text-cinematic-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto transition-all duration-500 hover:shadow-2xl"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Cinematic Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <motion.div 
              className="text-center group hover-cinematic"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="film-reel w-12 h-12 flex items-center justify-center">
                  <Video className="text-primary animate-film-roll" size={32} />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-cinematic font-bold text-primary mb-2">200+</div>
              <div className="text-sm sm:text-base text-cinematic-gray font-modern uppercase tracking-wider">Projects Completed</div>
            </motion.div>

            <motion.div 
              className="text-center group hover-cinematic"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <div className="flex justify-center mb-4">
                <div className="film-reel w-12 h-12 flex items-center justify-center">
                  <Users className="text-primary" size={32} />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-cinematic font-bold text-primary mb-2">50+</div>
              <div className="text-sm sm:text-base text-cinematic-gray font-modern uppercase tracking-wider">Happy Clients</div>
            </motion.div>

            <motion.div 
              className="text-center group hover-cinematic"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <div className="flex justify-center mb-4">
                <div className="film-reel w-12 h-12 flex items-center justify-center">
                  <Award className="text-primary" size={32} />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-cinematic font-bold text-primary mb-2">8+</div>
              <div className="text-sm sm:text-base text-cinematic-gray font-modern uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic film strip effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cinematic-white to-transparent opacity-20"></div>
    </section>
  );
};
