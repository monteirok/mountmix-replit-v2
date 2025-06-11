import { motion } from "framer-motion";
import { 
  Wine, 
  Users, 
  Home, 
  GraduationCap, 
  Mountain, 
  Utensils,
  Check
} from "lucide-react";

const services = [
  {
    icon: Wine,
    title: "Wedding Cocktail Service",
    description: "Signature cocktail menus, professional bartending, and elegant presentation for your special day in the mountains.",
    features: [
      "Custom cocktail menu design",
      "Professional bartending staff",
      "Premium glassware & setup"
    ]
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Sophisticated cocktail experiences for conferences, galas, and corporate celebrations with professional service.",
    features: [
      "Scalable service options",
      "Brand-customized cocktails",
      "Event coordination support"
    ]
  },
  {
    icon: Home,
    title: "Private Parties",
    description: "Intimate cocktail experiences for birthdays, anniversaries, and special celebrations in your home or venue.",
    features: [
      "Personalized menu consultation",
      "Mobile bar setup",
      "Flexible service packages"
    ]
  },
  // {
  //   icon: GraduationCap,
  //   title: "Cocktail Classes",
  //   description: "Interactive mixology workshops for team building, bachelor parties, and cocktail enthusiasts.",
  //   features: [
  //     "Hands-on learning experience",
  //     "Take-home recipe cards",
  //     "All ingredients provided"
  //   ]
  // },
  {
    icon: Mountain,
    title: "Destination Events",
    description: "Specialized cocktail catering for mountain lodges, ski chalets, and outdoor celebrations.",
    features: [
      "Weather-adapted service",
      "Portable bar solutions",
      "Mountain-themed cocktails"
    ]
  },
  {
    icon: Utensils,
    title: "Full Bar Service",
    description: "Complete beverage service including wine, beer, and premium spirits alongside our signature cocktails.",
    features: [
      "Curated wine selection",
      "Local craft beer options",
      "Premium spirit collection"
    ]
  }
];

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-20 bg-ice-blue/20 dark:bg-ice-blue/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest dark:text-mountain-gold mb-6">
            Premium Catering Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-charcoal dark:text-white">
            From intimate cocktail parties to grand celebrations, we provide comprehensive
            beverage services tailored to your vision and venue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card hover-lift h-full">
                <div className="p-8">
                  <div className="w-16 h-16 glass-button rounded-full flex items-center justify-center mb-6">
                    <service.icon className="text-mountain-gold text-2xl" size={32} />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold mb-4 text-charcoal dark:text-white">{service.title}</h3>
                  <p className="mb-6 leading-relaxed text-charcoal dark:text-white">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-charcoal dark:text-white">
                        <Check className="text-mountain-gold mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-charcoal dark:text-white">Ready to Plan Your Event?</h3>
            <p className="text-lg mb-6 text-charcoal dark:text-white">Let's discuss how we can make your celebration extraordinary.</p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-mountain-gold hover:bg-copper text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-lift shadow-lg"
            >
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
