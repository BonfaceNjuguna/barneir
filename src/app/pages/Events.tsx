import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Events() {
  const upcomingEvents = [
    {
      title: 'The Authority Edit',
      subtitle: 'Executive Presence Masterclass',
      date: 'March 15, 2026',
      time: '6:00 PM - 9:00 PM',
      location: 'Private Residence, Nairobi',
      capacity: '12 Seats',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      description: 'An intimate evening exploring the intersection of personal branding and executive wardrobing. Learn how strategic styling accelerates professional influence.',
      category: 'Masterclass'
    },
    {
      title: 'Power & Presence',
      subtitle: 'Luxury Networking Soirée',
      date: 'April 22, 2026',
      time: '7:00 PM - 10:00 PM',
      location: 'The Hemingways Collection',
      capacity: '25 Seats',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      description: 'Connect with like-minded leaders in an atmosphere of refined elegance. Curated conversations, champagne, and the art of sophisticated networking.',
      category: 'Networking'
    },
    {
      title: 'Image Acceleration Summit',
      subtitle: 'Full-Day Transformation Experience',
      date: 'June 8, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Villa Rosa Kempinski',
      capacity: '30 Seats',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
      description: 'A comprehensive deep-dive into personal branding, color theory, wardrobe architecture, and the psychology of first impressions for high-achieving professionals.',
      category: 'Summit'
    }
  ];

  const pastEvents = [
    {
      title: 'The Legacy Wardrobe Workshop',
      date: 'December 2025',
      attendees: '18',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800'
    },
    {
      title: 'Executive Excellence Retreat',
      date: 'September 2025',
      attendees: '22',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800'
    },
    {
      title: 'The Authority Circle',
      date: 'June 2025',
      attendees: '15',
      image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800'
    },
    {
      title: 'Presence & Power Gala',
      date: 'March 2025',
      attendees: '40',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl tracking-[0.15em] font-serif font-light mb-8"
          >
            Barneir Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#1A1A1A]/70 leading-relaxed max-w-3xl mx-auto mb-4"
          >
            Quarterly luxury networking and branding masterclasses positioned as image acceleration experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[#1A1A1A]/60 leading-relaxed max-w-2xl mx-auto"
          >
            Where high-achieving professionals gather to refine their presence, expand their influence, and master the art of strategic personal branding.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-[0.2em] font-serif font-light mb-16 text-center"
          >
            Upcoming Experiences
          </motion.h2>

          <div className="space-y-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block px-4 py-1 border border-[#C9A961] text-[#C9A961] text-xs tracking-[0.2em] uppercase mb-4">
                    {event.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl tracking-[0.1em] font-serif font-light mb-2">
                    {event.title}
                  </h3>
                  <p className="text-lg text-[#1A1A1A]/60 mb-6 tracking-wide">
                    {event.subtitle}
                  </p>
                  <p className="text-[#1A1A1A]/70 leading-relaxed mb-8">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-[#1A1A1A]/70">
                      <Calendar size={18} className="text-[#C9A961]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#1A1A1A]/70">
                      <Clock size={18} className="text-[#C9A961]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#1A1A1A]/70">
                      <MapPin size={18} className="text-[#C9A961]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#1A1A1A]/70">
                      <Users size={18} className="text-[#C9A961]" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block px-10 py-4 border-2 border-[#C9A961] text-[#C9A961] tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500"
                  >
                    Reserve Your Seat
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="px-6 py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-[0.2em] font-serif font-light mb-4 text-center text-white"
          >
            Past Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-center mb-16 max-w-2xl mx-auto"
          >
            A glimpse into the transformative gatherings that have shaped the Barneir community
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[3/4]">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-[#C9A961] text-xs tracking-[0.2em] uppercase mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-white text-lg font-serif tracking-wide mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {event.attendees} attendees
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Philosophy */}
      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-serif font-light mb-8">
              More Than Events
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 leading-relaxed mb-6">
              Barneir Events are carefully curated experiences designed to accelerate your image, expand your network, and deepen your understanding of strategic personal branding.
            </p>
            <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-12">
              Each gathering is limited in capacity to ensure intimate dialogue, personalized attention, and meaningful connections with fellow leaders who value refinement and excellence.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-[#C9A961] text-[#1A1A1A] tracking-[0.25em] uppercase text-sm hover:bg-[#1A1A1A] hover:text-white border-2 border-[#C9A961] transition-all duration-500"
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-[#F5F3EF] border border-[#1A1A1A]/10 p-12 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl tracking-[0.15em] font-serif font-light mb-4">
              Stay Informed
            </h3>
            <p className="text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
              Receive exclusive invitations to upcoming events, early-bird access, and curated insights on image mastery.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 border border-[#1A1A1A]/20 focus:outline-none focus:border-[#C9A961] bg-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#1A1A1A] text-white tracking-[0.2em] uppercase text-xs hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
