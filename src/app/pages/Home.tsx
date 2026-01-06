import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronDown, Users, Briefcase, Star, Heart } from 'lucide-react';

export function Home() {
  const [activeTab, setActiveTab] = useState('men-women');

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762843353098-4b314068442e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3MzU3NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Authority"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] font-serif font-light mb-6">
            Where Authority<br />Meets Elegance
          </h1>
          <p className="text-lg md:text-xl tracking-[0.3em] mb-12 font-light text-[#F5F3EF]/80">
            Transforming outfits into silent influence
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500 font-medium"
          >
            Begin Your Transformation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#F5F3EF] to-[#E8E4DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl lg:text-6xl tracking-[0.2em] font-serif font-light mb-8">
                Barneir.
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-[#1A1A1A]/70">
                We are a premium wardrobe authority and personal branding company transforming high-profile individuals through strategic styling and image consulting.
              </p>
              <p className="text-lg leading-relaxed text-[#1A1A1A]/70">
                At Barneir, we don't just dress you — we elevate your presence, refine your influence, and craft a visual identity that commands respect before you speak a word.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709701576151-6bf8dda9d5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzQ2OTc3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Executive Styling"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Three Verticals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 text-center hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Briefcase size={40} className="text-[#C9A961]" />
              </div>
              <h3 className="text-2xl tracking-[0.15em] font-serif mb-4">Barneir Men</h3>
              <p className="text-sm leading-relaxed mb-6 text-[#1A1A1A]/60">
                Power dressing for the modern executive. Strategic wardrobing that communicates authority and confidence.
              </p>
              <Link to="/men" className="text-xs tracking-[0.2em] uppercase text-[#C9A961] hover:text-[#1A1A1A] transition-colors">
                Explore →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-10 text-center hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Star size={40} className="text-[#C9A961]" />
              </div>
              <h3 className="text-2xl tracking-[0.15em] font-serif mb-4">Barneir Women</h3>
              <p className="text-sm leading-relaxed mb-6 text-[#1A1A1A]/60">
                Elegant power and refined femininity. Wardrobes that command rooms and inspire confidence.
              </p>
              <Link to="/women" className="text-xs tracking-[0.2em] uppercase text-[#C9A961] hover:text-[#1A1A1A] transition-colors">
                Explore →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 text-center hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart size={40} className="text-[#C9A961]" />
              </div>
              <h3 className="text-2xl tracking-[0.15em] font-serif mb-4">Barneir Kids</h3>
              <p className="text-sm leading-relaxed mb-6 text-[#1A1A1A]/60">
                Raising powerful, confident leaders. Building self-esteem through intentional style from an early age.
              </p>
              <Link to="/kids" className="text-xs tracking-[0.2em] uppercase text-[#C9A961] hover:text-[#1A1A1A] transition-colors">
                Explore →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE PHILOSOPHY */}
      <section className="relative py-48 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzM1MDQyMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Philosophy"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/75" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-[0.1em] leading-relaxed mb-8">
            "We transform outfits into silent authority, influence and presence — bringing luxury, intention and calm power to every piece."
          </blockquote>
          <div className="w-24 h-px bg-[#C9A961] mx-auto mt-12"></div>
        </motion.div>
      </section>

      {/* 4. OUR AUDIENCE - Continuing in next part... */}
      <section className="py-32 px-6 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl tracking-[0.2em] font-serif font-light text-center mb-20"
          >
            For Those Who Lead
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Entrepreneurs & Founders',
                desc: 'Building empires with authority',
                icon: Briefcase
              },
              {
                title: 'Corporate Leaders',
                desc: 'Commanding boardrooms with presence',
                icon: Users
              },
              {
                title: 'Public Figures',
                desc: 'Influencing with refined elegance',
                icon: Star
              },
              {
                title: 'High-Net-Worth Families',
                desc: 'Generational style and legacy',
                icon: Heart
              }
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-8 hover:bg-[#1A1A1A] transition-all duration-500 cursor-pointer"
              >
                <audience.icon className="w-12 h-12 mb-6 text-[#C9A961] group-hover:text-[#C9A961] transition-colors" />
                <h3 className="text-xl tracking-[0.1em] font-serif mb-3 group-hover:text-white transition-colors">
                  {audience.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/60 group-hover:text-white/70 transition-colors">
                  {audience.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections 5-10 will continue in the next message due to length... */}
      {/* For now, adding a CTA to contact */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl tracking-[0.2em] font-serif font-light text-white mb-8">
            Ready to Transform Your Authority?
          </h2>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Let us craft a wardrobe strategy designed exclusively for your vision
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500"
          >
            Begin Your Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
