import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1C2C3E] text-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-3xl tracking-[0.3em] font-serif text-[#C9A961] mb-4">
              BARNEIR
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Where authority meets elegance. Transforming outfits into silent influence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="tracking-[0.2em] uppercase text-xs mb-6 text-white/80">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                Services
              </Link>
              <Link to="/events" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                Events
              </Link>
              <Link to="/contact" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Verticals */}
          <div>
            <h4 className="tracking-[0.2em] uppercase text-xs mb-6 text-white/80">Our Verticals</h4>
            <div className="space-y-3">
              <Link to="/men" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                Barneir Men
              </Link>
              <Link to="/women" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                Barneir Women
              </Link>
              <Link to="/kids" className="block text-sm text-white/60 hover:text-[#C9A961] transition-colors">
                Barneir Kids
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="tracking-[0.2em] uppercase text-xs mb-6 text-white/80">Join the Authority</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C9A961] transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 border border-[#C9A961] text-[#C9A961] tracking-[0.2em] uppercase text-xs hover:bg-[#C9A961] hover:text-[#1C2C3E] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#C9A961] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#C9A961] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#C9A961] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-xs tracking-wider text-white/40">
            © 2026 Barneir. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
