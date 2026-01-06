import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Heart, TrendingUp, Shield } from 'lucide-react';

export function Kids() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl tracking-[0.15em] font-serif font-light mb-8"
          >
            Barneir Kids
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#1A1A1A]/70 leading-relaxed max-w-3xl mx-auto"
          >
            Raising powerful, confident leaders. Building self-esteem and presence through intentional style from an early age.
          </motion.p>
        </div>
      </section>

      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl tracking-[0.2em] font-serif font-light text-center mb-16">
            Power & Confidence Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Install Confidence', desc: 'Building self-assurance through style' },
              { icon: Heart, title: 'Develop Self-Esteem', desc: 'Positive self-image from early years' },
              { icon: TrendingUp, title: 'Nurture Leadership', desc: 'Presence that commands respect' },
              { icon: Shield, title: 'Raise Bold Kids', desc: 'Powerful, self-assured individuals' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 text-center hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-6 text-[#C9A961]" />
                <h3 className="text-xl tracking-[0.1em] font-serif mb-4">{benefit.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl tracking-[0.2em] font-serif font-light mb-8">
            Faces of Barneir Kids
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 mb-12">
            Meet Barclay Davis Mutembei and Brown Nellani Anisa — embodying confidence, leadership, and style from an early age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[3/4] mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759313560181-de61e7235355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBraWRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc0Njk3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Barclay Davis Mutembei"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl tracking-[0.15em] font-serif">Barclay Davis Mutembei</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-[3/4] mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759313560181-de61e7235355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBraWRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc0Njk3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Brown Nellani Anisa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl tracking-[0.15em] font-serif">Brown Nellani Anisa</h3>
            </motion.div>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500"
          >
            Enroll Your Child
          </Link>
        </div>
      </section>
    </div>
  );
}
