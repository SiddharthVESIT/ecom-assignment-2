import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=700&fit=crop&q=85"
          alt="StepUp Hero Shoe"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full text-[var(--color-accent)] text-sm font-medium mb-6">
              🔥 New Collection 2025
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-[family-name:var(--font-display)] text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            YOUR NEXT
            <br />
            <span className="gradient-text">STEP</span> STARTS
            <br />
            HERE
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Premium footwear crafted for those who refuse to blend in.
            Bold designs. Unmatched comfort. Make every step count.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="group px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-[var(--color-accent-soft)] transition-all duration-300 pulse-accent"
            >
              Shop Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/revenue"
              className="px-8 py-4 border border-[var(--color-border)] text-white font-semibold rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              View Assignment
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex gap-12 mt-16"
          >
            {[
              { value: '50+', label: 'Premium Styles' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '4.8', label: 'Avg Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-display)] text-3xl text-white">{stat.value}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-[var(--color-text-secondary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
