import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const team = [
    { name: 'Babra Mbula Kavwali', title: 'Founder & Brand Visionary' },
    { name: 'Elvis Emuria', title: 'Chief Growth & Marketing Officer' },
    { name: 'Barclay Davis Mutembei', title: 'Face of Barneir Kids' },
    { name: 'Brown Nellani Anisa', title: 'Face of Barneir Kids' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] font-serif font-light mb-8"
          >
            About Barneir
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#1A1A1A]/70 leading-relaxed"
          >
            Where silent authority, elegant power, and intentional luxury converge to transform how leaders present themselves to the world.
          </motion.p>
        </div>
      </section>

      {/* Vision & Authority */}
      <section className="px-6 mb-32 bg-[#1A1A1A] py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white mb-20"
          >
            <h2 className="text-4xl lg:text-5xl tracking-[0.2em] font-serif font-light mb-8">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-white/80">
              Barneir is not just a styling company — we are building a multi-generational authority brand. 
              Our vision extends beyond wardrobes to create lasting legacy through the power of intentional presentation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Premium', desc: 'Uncompromising quality in every detail' },
              { title: 'Exclusive', desc: 'Bespoke service for discerning leaders' },
              { title: 'Strategic', desc: 'Wardrobes aligned with your vision' },
              { title: 'Authority-Driven', desc: 'Commanding presence in every room' }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-px bg-[#C9A961] mx-auto mb-6"></div>
                <h3 className="text-2xl tracking-[0.15em] font-serif mb-4 text-[#C9A961]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/70">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXJkcm9iZSUyMHN0eWxpbmd8ZW58MXx8fHwxNzY3NDY5NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our Mission"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl tracking-[0.2em] font-serif font-light mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-[#1A1A1A]/70 leading-relaxed">
              <p>
                We exist to transform how high-profile individuals present themselves — not through fleeting trends, 
                but through timeless, strategic wardrobing that amplifies their inherent authority.
              </p>
              <p>
                Every garment, every ensemble, every consultation is designed to communicate one thing: 
                you are a force to be reckoned with.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 mb-32 bg-gradient-to-b from-[#F5F3EF] to-[#E8E4DE] py-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl tracking-[0.2em] font-serif font-light text-center mb-20"
          >
            Meet the Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-[#D4C5B9]/30">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1758518727888-ffa196002e59' : '1709701576151-6bf8dda9d5f3'}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzM1MDQyMHww&ixlib=rb-4.1.0&q=80&w=1080`}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl tracking-[0.1em] font-serif mb-2">{member.name}</h3>
                <p className="text-sm text-[#1A1A1A]/60 tracking-wide">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] font-serif font-light leading-relaxed mb-8">
            "Authority is not demanded.<br />It is silently commanded."
          </blockquote>
          <div className="w-24 h-px bg-[#C9A961] mx-auto mt-12"></div>
        </motion.div>
      </section>
    </div>
  );
}
