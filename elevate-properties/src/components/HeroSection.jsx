import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  /* Parallax layers — different speeds = depth illusion */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);



  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center overflow-hidden bg-[#0a0a0a]"
      id="hero-section"
    >
      {/* ═══════════ LAYER 1 — Deep Background (slowest) ═══════════ */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="/building-skyscraper-crescent-moon-starry-sky-2732x2732-352.jpg"
          alt="Luxury building at twilight"
          className="w-full h-[120%] object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
      </motion.div>

      {/* ═══════════ LAYER 2 — Depth Blur Overlay (fog/atmosphere) ═══════════ */}
      <motion.div
        style={{ y: midY, opacity: overlayOpacity }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(10,10,10,0) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.95) 100%)',
          }}
        />
      </motion.div>

      {/* ═══════════ LAYER 3 — Side Blur Panels (depth-of-field) ═══════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left blur panel */}
        <div
          className="absolute top-0 left-0 w-[40%] h-full"
          style={{
            background:
              'linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 60%, transparent 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 100%)',
          }}
        />
        {/* Right blur panel */}
        <div
          className="absolute top-0 right-0 w-[40%] h-full"
          style={{
            background:
              'linear-gradient(to left, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 60%, transparent 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[45%]"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 40%, transparent 100%)',
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute top-0 left-0 w-full h-[30%]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ═══════════ LAYER 4 — Foreground Text Content ═══════════ */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 max-w-[1280px] mx-auto px-6 py-32 md:py-0 w-full will-change-transform"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-20 md:mt-16">
          {/* ★ Main headline — Cormorant Garamond for luxury feel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8"
          >
            {/* Shadow text behind — creates depth */}
            <div
              className="select-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '-0.01em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.05)',
                position: 'absolute',
                top: '5px',
                left: '5px',
                right: '-5px',
                pointerEvents: 'none',
                filter: 'blur(3px)',
              }}
              aria-hidden="true"
            >
              <span style={{ fontWeight: 300 }}>Elevate</span>
              <br />
              <span style={{ fontWeight: 400, fontStyle: 'italic' }}>Your Living</span>
            </div>

            {/* Main text */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '-0.01em',
                position: 'relative',
              }}
            >
              <span
                className="block"
                style={{
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.95)',
                  textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                }}
              >
                Elevate
              </span>
              <span
                className="block"
                style={{
                  fontWeight: 400,
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg, #e8c876 0%, #f5dfa0 30%, #c5a059 60%, #a67c00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  paddingBottom: '0.15em',
                  filter: 'drop-shadow(0 2px 20px rgba(197,160,89,0.35))',
                }}
              >
                Your Living
              </span>
            </h1>
          </motion.div>

          {/* Decorative line divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--color-accent)]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/70" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--color-accent)]/60" />
          </motion.div>

          {/* Subtext with glass panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            className="relative mb-12 max-w-2xl"
          >
            <p
              className="text-lg md:text-xl leading-relaxed font-medium px-6 py-4 rounded-2xl"
              style={{
                color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.05)',
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
            >
              Premium properties curated for those who demand the best in lifestyle and luxury.
              Discover your sanctuary today.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Link
              to="/products"
              className="group relative px-10 py-4 font-semibold rounded-xl flex items-center gap-3 transition-all duration-500 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), #B08D57)',
                color: 'white',
                boxShadow: '0 8px 32px rgba(197,160,89,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              {/* Hover shine effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',
                }}
              />
              <span className="relative z-10">Explore Properties</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats — glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
            className="flex flex-wrap gap-6 md:gap-10 justify-center"
          >
            {[
              { value: '500+', label: 'Premium Listings' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '4.8', label: 'Avg Rating' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="px-6 py-4 rounded-xl text-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  minWidth: '120px',
                }}
              >
                <p
                  className="font-[family-name:var(--font-display)] text-2xl md:text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #fff 30%, var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-white/40 mt-1 tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════ Scroll Indicator ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* ═══════════ Subtle noise texture overlay ═══════════ */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </section>
  );
}
