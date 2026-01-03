import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl tracking-[0.2em] font-serif">
          BARNEIR
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link 
            to="/" 
            className="tracking-[0.15em] uppercase text-sm hover:opacity-60 transition-opacity duration-300"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="tracking-[0.15em] uppercase text-sm hover:opacity-60 transition-opacity duration-300"
          >
            Collection
          </Link>
          <Link 
            to="/about" 
            className="tracking-[0.15em] uppercase text-sm hover:opacity-60 transition-opacity duration-300"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-black/5"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.15em] uppercase text-sm hover:opacity-60 transition-opacity duration-300"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.15em] uppercase text-sm hover:opacity-60 transition-opacity duration-300"
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="tracking-[0.15em] uppercase text-sm hover:opacity-60 transition-opacity duration-300"
            >
              About
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}