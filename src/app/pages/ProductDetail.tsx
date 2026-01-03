import { motion } from 'motion/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const productData = {
  name: 'Minimal Blazer',
  price: 'Ksh 8900',
  description: 'A timeless piece crafted from the finest Italian wool. This minimal blazer embodies understated elegance with its clean lines and impeccable tailoring. Perfect for both formal occasions and refined everyday wear.',
  composition: '100% Virgin Wool',
  care: 'Dry clean only',
  madeIn: 'Kenya',
  images: [
    'https://images.unsplash.com/photo-1613728455120-d00493b5e77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzY3NDQwOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjbG90aGluZyUyMGRldGFpbCUyMHRleHR1cmV8ZW58MXx8fHwxNzY3NDQwOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1616057732603-0439d9ace394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMGZhYnJpYyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY3NDQxMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ],
};

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] mb-4 overflow-hidden bg-neutral-100">
              <ImageWithFallback
                src={productData.images[currentImageIndex]}
                alt={productData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square overflow-hidden bg-neutral-100 ${
                    currentImageIndex === index ? 'ring-2 ring-black' : 'opacity-60 hover:opacity-100'
                  } transition-all`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pt-8"
          >
            <h1 className="text-4xl tracking-[0.15em] font-serif mb-4">{productData.name}</h1>
            <p className="text-2xl tracking-wide mb-8 opacity-70">{productData.price}</p>

            <div className="mb-8 pb-8 border-b border-neutral-200">
              <p className="text-base tracking-wide leading-relaxed opacity-70">
                {productData.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <p className="text-sm tracking-[0.15em] uppercase mb-4">Select Size</p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border tracking-wider transition-all ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-neutral-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-black text-white tracking-[0.2em] uppercase text-sm mb-8 hover:bg-neutral-800 transition-colors"
            >
              Add to Cart
            </motion.button>

            {/* Product Details */}
            <div className="space-y-4 text-sm tracking-wide">
              <div className="flex justify-between py-3 border-b border-neutral-200">
                <span className="opacity-60">Composition</span>
                <span>{productData.composition}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-neutral-200">
                <span className="opacity-60">Care</span>
                <span>{productData.care}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-neutral-200">
                <span className="opacity-60">Made in</span>
                <span>{productData.madeIn}</span>
              </div>
            </div>

            {/* Quality Message */}
            <div className="mt-12 p-6 bg-neutral-50">
              <p className="text-sm tracking-wide leading-relaxed opacity-70">
                Each piece is crafted with meticulous attention to detail, ensuring not only exceptional 
                appearance but extraordinary comfort. A testament to timeless elegance and modern luxury.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
