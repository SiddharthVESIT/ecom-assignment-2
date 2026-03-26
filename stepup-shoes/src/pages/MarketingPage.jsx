import { motion } from 'framer-motion';
import { User, Target, Megaphone, Palette, Camera, Search, MessageSquare, Users, Sparkles } from 'lucide-react';

const personas = [
  {
    name: 'Campus Siddharth',
    age: '19–22',
    type: 'College Student',
    budget: '₹2K – ₹5K',
    channel: 'Instagram Reels',
    emoji: '🎓',
    description: 'Style-conscious college student who discovers trends on Instagram. Looks for affordable yet trendy sneakers that stand out on campus.',
    behaviors: ['Follows sneaker pages on Instagram', 'Influenced by peer reviews', 'Shops during sales and festivals', 'Values aesthetics over brand']
  },
  {
    name: 'Corporate Priya',
    age: '26–32',
    type: 'Working Professional',
    budget: '₹6K – ₹12K',
    channel: 'Google Search',
    emoji: '💼',
    description: 'Quality-focused professional who researches before buying. Searches for comfortable formal and semi-formal shoes for office and weekend outings.',
    behaviors: ['Reads product reviews thoroughly', 'Compares prices on Google', 'Prefers premium brands', 'Values comfort and durability']
  },
  {
    name: 'Fitness Rahul',
    age: '24–35',
    type: 'Gym-goer / Runner',
    budget: '₹5K – ₹10K',
    channel: 'YouTube / Reels',
    emoji: '🏃',
    description: 'Performance-driven fitness enthusiast who needs specialized footwear for different activities. Follows fitness influencers for recommendations.',
    behaviors: ['Watches fitness gear reviews on YouTube', 'Needs sport-specific shoes', 'Replaces shoes every 6 months', 'Willing to pay for tech features']
  }
];

const channels = [
  { name: 'Instagram Reels', percentage: 40, icon: Camera, color: '#E1306C' },
  { name: 'Google Ads', percentage: 25, icon: Search, color: '#4285F4' },
  { name: 'WhatsApp Remarketing', percentage: 20, icon: MessageSquare, color: '#25D366' },
  { name: 'Influencer Collabs', percentage: 15, icon: Users, color: '#FFD700' },
];

export default function MarketingPage() {
  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full text-[var(--color-accent)] text-sm font-medium mb-4">
            Assignment Module
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white tracking-wide">
            MARKETING <span className="gradient-text">STRATEGY</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Our multi-channel approach to reach, engage, and convert shoe enthusiasts across India
          </p>
        </motion.div>

        {/* Target Personas */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
          TARGET <span className="gradient-text">PERSONAS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="text-5xl mb-4">{persona.emoji}</div>
              <h3 className="text-white font-bold text-xl mb-1">{persona.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-[var(--color-border)] rounded text-xs text-[var(--color-text-secondary)]">
                  {persona.age} yrs
                </span>
                <span className="px-2 py-1 bg-[var(--color-border)] rounded text-xs text-[var(--color-text-secondary)]">
                  {persona.type}
                </span>
                <span className="px-2 py-1 bg-[var(--color-accent)]/10 rounded text-xs text-[var(--color-accent)]">
                  {persona.budget}
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                {persona.description}
              </p>
              <div className="pt-4 border-t border-[var(--color-border)]">
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Key Behaviors</p>
                <ul className="space-y-1.5">
                  {persona.behaviors.map(b => (
                    <li key={b} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                      <span className="text-[var(--color-accent)] mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Target size={14} className="text-[var(--color-accent)]" />
                <span className="text-xs text-[var(--color-text-secondary)]">
                  Primary Channel: <span className="text-white">{persona.channel}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Channel Mix */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
          CHANNEL <span className="gradient-text">MIX</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] flex items-center gap-6"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${channel.color}20` }}
                >
                  <Icon size={24} style={{ color: channel.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{channel.name}</h4>
                    <span className="font-[family-name:var(--font-display)] text-2xl" style={{ color: channel.color }}>
                      {channel.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${channel.percentage * 2.5}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: channel.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Voice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)] mb-20 text-center"
        >
          <Palette size={32} className="text-[var(--color-accent)] mx-auto mb-4" />
          <h3 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-4">
            BRAND VOICE
          </h3>
          <p className="text-[var(--color-accent)] text-xl font-medium italic mb-4">
            "Premium without pretension"
          </p>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            StepUp speaks to the modern Indian buyer — aspirational but approachable. We celebrate individuality,
            not elitism. Our tone is bold, confident, and youthful. We inspire action, not envy.
          </p>
        </motion.div>

        {/* Campaign Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=500&fit=crop&q=80"
            alt="Your Next Step Campaign"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end p-12">
            <Sparkles size={24} className="text-[var(--color-accent)] mb-3" />
            <span className="text-xs text-[var(--color-accent)] uppercase tracking-widest mb-2">Campaign Concept</span>
            <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white text-center">
              "YOUR NEXT STEP"
            </h3>
            <p className="text-[var(--color-text-secondary)] text-center mt-3 max-w-lg">
              Tying personal milestones — first job, marathon finish, college graduation — to the act of buying a new pair of shoes. Every big moment deserves the right step.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
