import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c8a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    event: "Wedding Reception, Canmore",
    text: "Mountain Mixology transformed our wedding reception into something magical. The signature cocktails were absolutely stunning, and the service was flawless. Our guests are still talking about the drinks!"
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    event: "Corporate Gala, Calgary",
    text: "Professional, creative, and absolutely delicious. The team created custom cocktails for our corporate gala that perfectly matched our brand. Exceptional attention to detail."
  },
  {
    name: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    event: "Private Party, Banff",
    text: "The cocktail class was incredible! Perfect for our bachelorette party. The mixologists were so knowledgeable and fun. We learned so much and had the best time."
  },
  {
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    event: "Lodge Event, Kananaskis",
    text: "Mountain Mixology brought sophistication to our mountain lodge event. The presentation was beautiful, and every cocktail was crafted to perfection. Highly recommend!"
  },
  {
    name: "Lisa Wang",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    event: "Anniversary Celebration, Canmore",
    text: "From planning to execution, everything was seamless. The team understood our vision perfectly and delivered beyond our expectations. The cocktails were works of art!"
  },
  {
    name: "James Mitchell",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    event: "Corporate Retreat, Jasper",
    text: "Outstanding service and creativity. They created a menu that perfectly complemented our mountain venue. Professional staff and exceptional cocktails made our event unforgettable."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest dark:text-mountain-gold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-charcoal dark:text-white">
            Hear from couples, event planners, and hosts who've experienced our premium cocktail service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card hover-lift h-full">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={review.image}
                      alt={`${review.name} client testimonial`}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-charcoal dark:text-white">{review.name}</h4>
                      <div className="text-mountain-gold text-sm flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-lg italic mb-4 leading-relaxed text-charcoal dark:text-white">
                    "{review.text}"
                  </blockquote>
                  <div className="text-sm text-charcoal/70 dark:text-white/70">{review.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
