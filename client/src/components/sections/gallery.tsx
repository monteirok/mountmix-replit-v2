import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Elegant wedding bar setup with mountain view",
    category: "weddings"
  },
  {
    src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Professional mixologist preparing signature cocktails",
    category: "cocktails"
  },
  {
    src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Corporate gala with premium cocktail service",
    category: "corporate"
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Artfully crafted cocktails with garnish presentation",
    category: "cocktails"
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Mountain lodge wedding reception with cocktail bar",
    category: "weddings",
    span: "col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Interactive cocktail making class with participants",
    category: "private"
  },
  {
    src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Premium spirits display and professional bar setup",
    category: "cocktails"
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Outdoor mountain wedding with cocktail service",
    category: "weddings"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Stunning Canmore mountain landscape event backdrop",
    category: "weddings"
  }
];

const categories = [
  { id: "all", name: "All Events" },
  { id: "weddings", name: "Weddings" },
  { id: "corporate", name: "Corporate" },
  { id: "private", name: "Private Parties" },
  { id: "cocktails", name: "Cocktails" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest dark:text-mountain-gold mb-6">
            Event Gallery
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-charcoal dark:text-white">
            Explore our portfolio of memorable events, stunning cocktail presentations,
            and the beautiful mountain venues we've had the pleasure to serve.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-mountain-gold text-white"
                  : "bg-charcoal/20 dark:bg-white/20 text-charcoal dark:text-white hover:bg-mountain-gold hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl hover-lift ${image.span || ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Search className="text-white text-2xl" size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg mb-6 text-charcoal dark:text-white">Want to see your event featured in our gallery?</p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-mountain-gold hover:bg-copper text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift"
          >
            Plan Your Event
          </button>
        </motion.div>
      </div>
    </section>
  );
}
