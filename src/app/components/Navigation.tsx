import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#1A1A1A] ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl lg:text-3xl tracking-[0.3em] font-serif text-[#C9A961]">
          BARNEIR
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link 
            to="/about" 
            className="tracking-[0.2em] uppercase text-xs text-white hover:text-[#C9A961] transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/gallery" 
            className="tracking-[0.2em] uppercase text-xs text-white hover:text-[#C9A961] transition-colors duration-300 relative group"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/men" 
            className="tracking-[0.2em] uppercase text-xs text-white hover:text-[#C9A961] transition-colors duration-300 relative group"
          >
            Barneir Men
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/women" 
            className="tracking-[0.2em] uppercase text-xs text-white hover:text-[#C9A961] transition-colors duration-300 relative group"
          >
            Barneir Women
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/kids" 
            className="tracking-[0.2em] uppercase text-xs text-white hover:text-[#C9A961] transition-colors duration-300 relative group"
          >
            Barneir Kids
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/events" 
            className="tracking-[0.2em] uppercase text-xs text-white hover:text-[#C9A961] transition-colors duration-300 relative group"
          >
            Events
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-2.5 border border-[#C9A961] text-[#C9A961] tracking-[0.2em] uppercase text-xs hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-[#1A1A1A] z-40 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8 text-center">
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.2em] uppercase text-sm text-white hover:text-[#C9A961] transition-colors"
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.2em] uppercase text-sm text-white hover:text-[#C9A961] transition-colors"
            >
              Gallery
            </Link>
            <Link 
              to="/men" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.2em] uppercase text-sm text-white hover:text-[#C9A961] transition-colors"
            >
              Barneir Men
            </Link>
            <Link 
              to="/women" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.2em] uppercase text-sm text-white hover:text-[#C9A961] transition-colors"
            >
              Barneir Women
            </Link>
            <Link 
              to="/kids" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.2em] uppercase text-sm text-white hover:text-[#C9A961] transition-colors"
            >
              Barneir Kids
            </Link>
            <Link 
              to="/events" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.2em] uppercase text-sm text-white hover:text-[#C9A961] transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 border border-[#C9A961] text-[#C9A961] tracking-[0.2em] uppercase text-sm mt-4"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}