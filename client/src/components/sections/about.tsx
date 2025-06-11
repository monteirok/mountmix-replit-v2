import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest dark:text-mountain-gold mb-6">
              Crafting Memorable Moments
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-charcoal dark:text-white">
              Founded in the breathtaking mountain town of Canmore, Mountain Mixology brings together
              the artistry of craft cocktails with the stunning backdrop of the Canadian Rockies.
              Our passion for premium ingredients and innovative techniques creates unforgettable
              beverage experiences for your most important celebrations.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-charcoal dark:text-white">
              From intimate gatherings to grand celebrations, we believe every event deserves
              exceptional service and extraordinary drinks. Our team of skilled mixologists
              combines traditional techniques with modern innovation to deliver cocktails
              that are as beautiful as they are delicious.
            </p>

            <div className="grid grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-button p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-mountain-gold mb-2">200+</div>
                <div className="text-sm uppercase tracking-wider text-charcoal dark:text-white">Events Catered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-button p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-mountain-gold mb-2">5</div>
                <div className="text-sm uppercase tracking-wider text-charcoal dark:text-white">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass-button p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-mountain-gold mb-2">50+</div>
                <div className="text-sm uppercase tracking-wider text-charcoal dark:text-white">Signature Cocktails</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-4"
          >
            <img
              src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional mixologist crafting premium cocktails"
              className="rounded-xl shadow-2xl hover-lift w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
