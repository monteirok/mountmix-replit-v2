import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 glass-effect"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button className="text-2xl font-playfair font-bold text-mountain-gold" onClick={() => scrollToSection("hero")}>
              Mountain Mixology
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-charcoal dark:text-white hover:text-mountain-gold dark:hover:text-mountain-gold transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-charcoal dark:text-white hover:text-mountain-gold dark:hover:text-mountain-gold transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("cocktails")}
              className="text-charcoal dark:text-white hover:text-mountain-gold dark:hover:text-mountain-gold transition-colors duration-300"
            >
              Cocktails
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-charcoal dark:text-white hover:text-mountain-gold dark:hover:text-mountain-gold transition-colors duration-300"
            >
              Gallery
            </button>
            <ThemeToggle />
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-mountain-gold text-white px-6 py-2 rounded-full hover:bg-copper transition-all duration-300 hover-lift"
            >
              Book Event
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-forest dark:text-mountain-gold"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-effect mt-4 rounded-lg overflow-hidden bg-white/95 dark:bg-charcoal/95"
            >
              <div className="px-6 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left text-charcoal dark:text-white hover:text-mountain-gold transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-charcoal dark:text-white hover:text-mountain-gold transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-charcoal dark:text-white hover:text-mountain-gold transition-colors duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("cocktails")}
                  className="block w-full text-left text-charcoal dark:text-white hover:text-mountain-gold transition-colors duration-300"
                >
                  Cocktails
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block w-full text-left text-charcoal dark:text-white hover:text-mountain-gold transition-colors duration-300"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block bg-mountain-gold text-white px-6 py-2 rounded-full text-center hover:bg-copper transition-all duration-300"
                >
                  Book Event
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
