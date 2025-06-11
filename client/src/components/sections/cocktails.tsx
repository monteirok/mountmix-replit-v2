import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Palette, Award } from "lucide-react";

const cocktails = [
  {
    name: "Rocky Mountain Old Fashioned",
    description: "Premium Canadian whiskey, maple syrup, angostura bitters, with a smoked cedar garnish",
    price: "$16",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Alpine Gin Garden",
    description: "Craft gin, elderflower liqueur, fresh herbs, cucumber, and mountain spring water",
    price: "$14",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Sunset Peak Margarita",
    description: "Premium tequila, fresh lime, agave nectar, blood orange, with Himalayan salt rim",
    price: "$15",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Glacier Fizz",
    description: "Prosecco, wild berry liqueur, fresh mint, lemon twist, with crystallized sugar rim",
    price: "$13",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Summit Punch",
    description: "Aged rum, passion fruit, pineapple, lime, with toasted coconut and mountain honey",
    price: "$15",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Winter's Edge Martini",
    description: "Premium vodka, white chocolate liqueur, vanilla, with candied ginger garnish",
    price: "$16",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Campfire Sour",
    description: "Bourbon, amaretto, lemon juice, egg white, with mesquite smoke and charred orange",
    price: "$17",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Mountain Spring Mocktail",
    description: "Fresh herb infusion, elderflower, cucumber, lime, sparkling water with mountain minerals",
    price: "$8",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Locally sourced herbs, fruits, and premium spirits"
  },
  {
    icon: Palette,
    title: "Custom Creations",
    description: "Personalized cocktails designed for your event"
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized mixology techniques and presentation"
  }
];

export default function Cocktails() {
  return (
    <section id="cocktails" className="py-20 bg-forest text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our Signature Cocktails
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Crafted with premium spirits, fresh ingredients, and mountain-inspired flair.
            Each cocktail tells a story of the Canadian Rockies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect rounded-2xl hover-lift group h-full">
                <CardContent className="p-6">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-white">
                    {cocktail.name}
                  </h3>
                  <p className="text-sm opacity-80 mb-3 text-white">
                    {cocktail.description}
                  </p>
                  <div className="text-mountain-gold font-semibold">
                    {cocktail.price}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-mountain-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-mountain-gold text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
