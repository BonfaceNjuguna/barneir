import { motion } from 'motion/react';
import { useState } from 'react';
import { Shield } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    budget: '',
    vision: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] font-serif font-light mb-6"
          >
            Bespoke Authority.<br />Tailored to You.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed max-w-2xl mx-auto"
          >
            Every leader's journey is unique. Let us craft a wardrobe strategy designed exclusively for your vision.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="peer w-full px-0 py-3 bg-transparent border-b-2 border-[#D4C5B9] text-[#1A1A1A] placeholder-transparent focus:outline-none focus:border-[#C9A961] transition-colors"
                placeholder="Full Name"
              />
              <label className="absolute left-0 -top-5 text-sm text-[#1A1A1A]/60 tracking-wide transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#1A1A1A]/40 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#C9A961]">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full px-0 py-3 bg-transparent border-b-2 border-[#D4C5B9] text-[#1A1A1A] placeholder-transparent focus:outline-none focus:border-[#C9A961] transition-colors"
                placeholder="Email Address"
              />
              <label className="absolute left-0 -top-5 text-sm text-[#1A1A1A]/60 tracking-wide transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#1A1A1A]/40 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#C9A961]">
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="peer w-full px-0 py-3 bg-transparent border-b-2 border-[#D4C5B9] text-[#1A1A1A] placeholder-transparent focus:outline-none focus:border-[#C9A961] transition-colors"
                placeholder="Phone Number"
              />
              <label className="absolute left-0 -top-5 text-sm text-[#1A1A1A]/60 tracking-wide transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#1A1A1A]/40 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#C9A961]">
                Phone Number
              </label>
            </div>

            {/* Service Interest */}
            <div className="relative">
              <select
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#D4C5B9] text-[#1A1A1A] focus:outline-none focus:border-[#C9A961] transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select Service Interest</option>
                <option value="men">Men's Styling</option>
                <option value="women">Women's Styling</option>
                <option value="kids">Kids Programs</option>
                <option value="executive">Executive Teams</option>
                <option value="custom">Custom Request</option>
              </select>
              <label className="absolute left-0 -top-5 text-sm text-[#1A1A1A]/60 tracking-wide">
                Service Interest
              </label>
            </div>

            {/* Budget Range */}
            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b-2 border-[#D4C5B9] text-[#1A1A1A] focus:outline-none focus:border-[#C9A961] transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select Budget Range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
                <option value="flexible">Flexible</option>
              </select>
              <label className="absolute left-0 -top-5 text-sm text-[#1A1A1A]/60 tracking-wide">
                Budget Range
              </label>
            </div>

            {/* Vision */}
            <div className="relative">
              <textarea
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
                rows={6}
                className="peer w-full px-0 py-3 bg-transparent border-b-2 border-[#D4C5B9] text-[#1A1A1A] placeholder-transparent focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                placeholder="Tell us about your vision"
              />
              <label className="absolute left-0 -top-5 text-sm text-[#1A1A1A]/60 tracking-wide transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#1A1A1A]/40 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#C9A961]">
                Tell us about your vision
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full px-12 py-4 bg-[#1A1A1A] text-white tracking-[0.25em] uppercase text-sm hover:bg-[#C9A961] hover:text-[#1A1A1A] transition-all duration-500"
              >
                Submit Inquiry
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-3 text-sm text-[#1A1A1A]/60 pt-4">
              <Shield size={16} className="text-[#C9A961]" />
              <span className="tracking-wide">Consultations are strictly confidential</span>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="px-6 mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl tracking-[0.2em] font-serif mb-6">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9A961]/10 flex items-center justify-center">
                <span className="text-2xl font-serif text-[#C9A961]">1</span>
              </div>
              <p className="text-[#1A1A1A]/70">We review your inquiry within 24 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9A961]/10 flex items-center justify-center">
                <span className="text-2xl font-serif text-[#C9A961]">2</span>
              </div>
              <p className="text-[#1A1A1A]/70">Schedule your private consultation</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9A961]/10 flex items-center justify-center">
                <span className="text-2xl font-serif text-[#C9A961]">3</span>
              </div>
              <p className="text-[#1A1A1A]/70">Begin your transformation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
