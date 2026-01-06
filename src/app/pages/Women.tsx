import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Women() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl tracking-[0.15em] font-serif font-light mb-8"
          >
            Barneir Women
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#1A1A1A]/70 leading-relaxed max-w-3xl"
          >
            Elegant power and refined femininity. Wardrobes that command rooms and inspire confidence through intentional luxury.
          </motion.p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[3/4]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzMyNzEwOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Women's Executive Styling"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl tracking-[0.2em] font-serif font-light mb-8">
              Feminine Authority
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 mb-6 leading-relaxed">
              Your wardrobe should reflect the multifaceted leader you are — powerful yet approachable, elegant yet commanding.
            </p>
            <p className="text-lg text-[#1A1A1A]/70 mb-12 leading-relaxed">
              We craft wardrobes that celebrate your femininity while amplifying your authority in every room you enter.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500 text-center"
            >
              Book Consultation
            </Link>
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