import { Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 md:py-16 mt-16 md:mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl tracking-[0.2em] font-serif mb-6">BARNEIR</h3>
            <p className="text-sm tracking-wide opacity-60">
              Step in your essence.
            </p>
          </div>
          
          <div>
            <h4 className="tracking-[0.15em] uppercase text-sm mb-6">Connect</h4>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-wide hover:opacity-60 transition-opacity duration-300"
            >
              <Facebook size={18} />
              <span>Follow us on Facebook</span>
            </a>
          </div>
          
          <div>
            <h4 className="tracking-[0.15em] uppercase text-sm mb-6">Philosophy</h4>
            <p className="text-sm tracking-wide opacity-60 leading-relaxed">
              Reconnecting every individual to elegance, luxury, and comfort through timeless modern design.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-black/5">
          <p className="text-xs tracking-wider text-center opacity-40">
            © 2026 BARNEIR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
