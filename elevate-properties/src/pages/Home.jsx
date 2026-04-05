import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Handshake, ShieldCheck, Key, Clock } from 'lucide-react';

const brands = ['LODHA', 'DLF', 'GODREJ', 'PRESTIGE', 'OBEROI', 'BRIGADE'];

const features = [
  { icon: Handshake, title: 'Expert Consulting', desc: 'Personalized property advice' },
  { icon: ShieldCheck, title: 'Verified Properties', desc: 'RERA approved listings' },
  { icon: Key, title: 'Secure Transactions', desc: 'End-to-end legal support' },
  { icon: Clock, title: 'Fast Closings', desc: 'Streamlined documentation' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <HeroSection />

      {/* Dark → Light Transition */}
      <div
        style={{
          height: '120px',
          background: 'linear-gradient(to bottom, #0a0a0a 0%, var(--color-bg) 100%)',
        }}
      />

      {/* Brand Strip */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex justify-between items-center overflow-x-auto gap-8">
          {brands.map(brand => (
            <span
              key={brand}
              className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-secondary)]/40 tracking-widest whitespace-nowrap select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[var(--color-text-primary)] tracking-wide">
              PREMIUM <span className="gradient-text">LISTINGS</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-3 text-lg">
              Our handpicked exclusive properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block px-8 py-4 border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-16 px-6 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                <Icon size={22} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <h4 className="text-[var(--color-text-primary)] font-semibold text-sm">{title}</h4>
                <p className="text-[var(--color-text-secondary)] text-xs">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf15b4?w=1400&h=500&fit=crop&q=80"
              alt="Elevate Exclusive"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-12 max-w-lg">
                <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
                  JOIN ELEVATE <span className="text-[var(--color-accent)]">EXCLUSIVE</span>
                </h3>
                <p className="text-zinc-300 mb-6">
                  Get off-market deals, priority viewings, and premium support for serious investors and buyers.
                </p>
                <Link
                  to="/revenue"
                  className="inline-block px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
