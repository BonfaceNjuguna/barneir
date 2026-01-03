import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762843353098-4b314068442e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3MzU3NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-8xl tracking-[0.3em] font-serif mb-8">
            BARNEIR
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.2em] mb-12 font-light">
            Step in your essence.
          </p>
          <Link
            to="/shop"
            className="inline-block px-12 py-4 border border-white tracking-[0.2em] uppercase text-sm hover:bg-white hover:text-black transition-all duration-500"
          >
            Explore Collection
          </Link>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-[0.2em] font-serif mb-8">
              Modern Elegance
            </h2>
            <p className="text-lg tracking-wide leading-relaxed opacity-70">
              Barneir is a luxury clothing line reconnecting every individual to elegance, luxury, and comfort. 
              We embody modern sophistication, minimalism, and timeless refinement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl tracking-[0.2em] font-serif mb-16 text-center"
          >
            Featured Collection
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link to="/shop">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1613728455120-d00493b5e77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzY3NDQwOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Signature Pieces"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl tracking-[0.15em] mb-2">Signature Pieces</h3>
                <p className="text-sm tracking-wide opacity-60">Timeless essentials</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <Link to="/shop">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzMyNzEwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Evening Collection"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl tracking-[0.15em] mb-2">Evening Collection</h3>
                <p className="text-sm tracking-wide opacity-60">Refined elegance</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlight */}
      <section className="py-32 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjbG90aGluZyUyMGRldGFpbCUyMHRleHR1cmV8ZW58MXx8fHwxNzY3NDQwOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fabric Detail"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl tracking-[0.2em] font-serif mb-8">
              Craftsmanship
            </h2>
            <p className="text-lg tracking-wide leading-relaxed opacity-70 mb-6">
              Every piece is crafted with meticulous attention to detail, using only the finest fabrics and materials.
            </p>
            <p className="text-lg tracking-wide leading-relaxed opacity-70">
              Our commitment to quality ensures that each garment not only looks exceptional but feels extraordinary.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
