import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Men() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl tracking-[0.15em] font-serif font-light mb-8"
          >
            Barneir Men
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#1A1A1A]/70 leading-relaxed max-w-3xl"
          >
            Strategic wardrobing that communicates authority before you speak. Power dressing for the modern executive who commands respect through refined elegance.
          </motion.p>
        </div>
      </section>

      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[3/4]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709701576151-6bf8dda9d5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzQ2OTc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Executive Men's Styling"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl tracking-[0.2em] font-serif font-light mb-8">
              Executive Presence
            </h2>
            <div className="space-y-6 text-[#1A1A1A]/70">
              <p>
                Our men's wardrobing service transforms your appearance into a strategic asset. We don't just dress you — we position you for authority, influence, and respect.
              </p>
              <p>
                From boardrooms to galas, every piece is intentionally selected to amplify your presence and communicate your value without a word.
              </p>
            </div>

            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl tracking-[0.2em] font-serif font-light text-center mb-16">
            Our Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Executive Essentials',
                price: '$5,000',
                features: ['Initial Style Consultation', '10 Core Wardrobe Pieces', 'Personal Shopping Session', 'Styling Guide']
              },
              {
                name: 'Authority Builder',
                price: '$15,000',
                features: ['Comprehensive Wardrobe Audit', '25+ Strategic Pieces', 'Quarterly Styling Sessions', 'Event Preparation', 'Long-term Image Strategy']
              },
              {
                name: 'Legacy Wardrobe',
                price: 'Custom',
                features: ['Full Wardrobe Transformation', 'Unlimited Consultations', 'Personal Stylist Access', 'Travel Wardrobing', 'Multi-Year Partnership']
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-2xl tracking-[0.15em] font-serif mb-2">{pkg.name}</h3>
                <p className="text-3xl text-[#C9A961] mb-8">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-[#1A1A1A]/70 flex items-start">
                      <span className="text-[#C9A961] mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center py-3 border border-[#1A1A1A] text-[#1A1A1A] tracking-[0.2em] uppercase text-xs hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  Select Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
