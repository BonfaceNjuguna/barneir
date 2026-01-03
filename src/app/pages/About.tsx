import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl tracking-[0.2em] font-serif mb-8"
          >
            About Barneir
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl tracking-wide opacity-70"
          >
            Reconnecting individuals to elegance, luxury, and comfort
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759793500315-e64644e6954c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHN0dWRpbyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NzQ0MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Barneir Studio"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl tracking-[0.2em] font-serif mb-6">Our Mission</h2>
              <p className="text-lg tracking-wide leading-relaxed opacity-70">
                Barneir is more than a clothing line—it's a philosophy. We believe that true luxury 
                lies in the intersection of elegance, comfort, and timeless design.
              </p>
            </div>
            <div>
              <p className="text-lg tracking-wide leading-relaxed opacity-70">
                Every piece we create is designed to help you step into your essence, 
                reconnecting you with the confidence that comes from wearing something truly exceptional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 mb-32 bg-neutral-50 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl tracking-[0.2em] font-serif mb-16 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl tracking-[0.15em] font-serif mb-4">Elegance</h3>
              <p className="tracking-wide leading-relaxed opacity-70">
                Refined design that transcends trends and speaks to timeless sophistication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl tracking-[0.15em] font-serif mb-4">Luxury</h3>
              <p className="tracking-wide leading-relaxed opacity-70">
                Premium materials and exceptional craftsmanship in every detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl tracking-[0.15em] font-serif mb-4">Comfort</h3>
              <p className="tracking-wide leading-relaxed opacity-70">
                Designs that feel as extraordinary as they look, embracing the body with care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-3xl md:text-4xl tracking-[0.1em] font-serif leading-relaxed mb-8">
            "Fashion is not about impressing others. It's about expressing your essence 
            with quiet confidence and timeless grace."
          </blockquote>
          <p className="tracking-[0.2em] uppercase text-sm opacity-60">— Barneir Philosophy</p>
        </motion.div>
      </section>

      {/* Craftsmanship */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl tracking-[0.2em] font-serif mb-6">Craftsmanship</h2>
              <p className="text-lg tracking-wide leading-relaxed opacity-70">
                Our commitment to excellence begins with the selection of the finest materials 
                from around the world and extends through every stage of creation.
              </p>
            </div>
            <div>
              <p className="text-lg tracking-wide leading-relaxed opacity-70">
                Each piece is carefully constructed by master artisans who bring decades 
                of expertise to their craft, ensuring that every garment meets our exacting standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1616057732603-0439d9ace394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMGZhYnJpYyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY3NDQxMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fabric Detail"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
