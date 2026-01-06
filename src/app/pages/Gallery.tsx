import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Gallery() {
  const showcaseItems = [
    {
      category: 'Corporate Leadership',
      client: 'CEO, Fortune 500',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Executive transformation for boardroom authority'
    },
    {
      category: 'Media Presence',
      client: 'Television Anchor',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'On-camera elegance and credibility'
    },
    {
      category: 'Entrepreneurial Power',
      client: 'Tech Founder',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Innovative leadership through strategic style'
    },
    {
      category: 'Political Influence',
      client: 'Government Official',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Commanding presence for public service'
    },
    {
      category: 'Creative Excellence',
      client: 'Award-Winning Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Artistic vision meets executive polish'
    },
    {
      category: 'Next Generation',
      client: 'Young Entrepreneur Family',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Building legacy through refined presentation'
    },
    {
      category: 'Global Leadership',
      client: 'International Executive',
      image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Cross-cultural authority and sophistication'
    },
    {
      category: 'Financial Power',
      client: 'Investment Leader',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Trusted presence in high-stakes negotiations'
    },
    {
      category: 'Academic Authority',
      client: 'University President',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      description: 'Intellectual elegance and institutional gravitas'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl tracking-[0.15em] font-serif font-light mb-8"
          >
            Client Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#1A1A1A]/70 leading-relaxed max-w-3xl mx-auto"
          >
            Transformations that speak louder than words. Each client represents a partnership in crafting authority, presence, and lasting influence.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-[#C9A961] tracking-[0.2em] uppercase text-xs mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-serif tracking-wider mb-2">
                    {item.client}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Info (always visible) */}
                <div className="p-6 bg-white">
                  <p className="text-[#C9A961] tracking-[0.2em] uppercase text-xs mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-[#1A1A1A] text-lg font-serif tracking-wide">
                    {item.client}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-serif font-light mb-6">
              Your Transformation Awaits
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join the ranks of leaders who command respect through refined presence and strategic wardrobing.
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500"
            >
              Begin Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
