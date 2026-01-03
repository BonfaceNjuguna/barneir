import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Minimal Blazer',
    price: 'Ksh 8900',
    image: 'https://images.unsplash.com/photo-1613728455120-d00493b5e77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzY3NDQwOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Silk Evening Dress',
    price: 'Ksh 1,240',
    image: 'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzMyNzEwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Cashmere Coat',
    price: 'Ksh 1,560',
    image: 'https://images.unsplash.com/photo-1762843353098-4b314068442e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3MzU3NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Linen Trousers',
    price: 'Ksh 6200',
    image: 'https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjbG90aGluZyUyMGRldGFpbCUyMHRleHR1cmV8ZW58MXx8fHwxNzY3NDQwOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Wool Sweater',
    price: 'Ksh 4800',
    image: 'https://images.unsplash.com/photo-1616057732603-0439d9ace394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMGZhYnJpYyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY3NDQxMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Tailored Shirt',
    price: 'Ksh 3900',
    image: 'https://images.unsplash.com/photo-1759793500315-e64644e6954c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHN0dWRpbyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NzQ0MTAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Shop() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] md:tracking-[0.2em] font-serif mb-4 md:mb-6">Collection</h1>
          <p className="text-base md:text-lg tracking-wide opacity-60">
            Timeless pieces for the modern wardrobe
          </p>
        </motion.div>

        {/* Filter (minimal design) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 md:mb-16 flex gap-4 md:gap-8 text-xs md:text-sm tracking-wider overflow-x-auto pb-2"
        >
          <button className="uppercase opacity-100 border-b border-black pb-1">All</button>
          <button className="uppercase opacity-40 hover:opacity-70 transition-opacity">Outerwear</button>
          <button className="uppercase opacity-40 hover:opacity-70 transition-opacity">Dresses</button>
          <button className="uppercase opacity-40 hover:opacity-70 transition-opacity">Essentials</button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-neutral-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: hoveredId === product.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/10 flex items-end justify-center pb-8"
                  >
                    <span className="text-white tracking-[0.2em] uppercase text-sm border border-white px-8 py-3">
                      View Details
                    </span>
                  </motion.div>
                </div>
                <h3 className="text-lg tracking-[0.1em] mb-2">{product.name}</h3>
                <p className="text-sm tracking-wide opacity-60">{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
