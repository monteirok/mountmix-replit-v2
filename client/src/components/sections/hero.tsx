import { motion } from "framer-motion";
import { Wine, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white dark:text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
        >
          Elevated Cocktails,<br />
          <span className="text-mountain-gold">Mountain Views</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Premium craft cocktail catering in the heart of the Canadian Rockies.
          Transform your event with our signature mixology experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-mountain-gold hover:bg-copper text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift shadow-lg"
          >
            Book Your Event
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="glass-button text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            View Services
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 hidden lg:block"
      >
        <div className="glass-card p-6">
          <Wine className="text-mountain-gold text-2xl" size={32} />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 right-20 hidden lg:block"
      >
        <div className="glass-card p-6">
          <Sparkles className="text-mountain-gold text-2xl" size={32} />
        </div>
      </motion.div>
    </section>
  );
}
