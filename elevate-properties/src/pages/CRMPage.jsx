import { motion } from 'framer-motion';
import { Crown, Star, Award, Gift, Truck, MessageCircle, Mail, HeartHandshake, TrendingUp, Trophy, Medal, Flame, Zap } from 'lucide-react';
import { customers, tierBenefits } from '../data/customers';

const tierIcons = { Bronze: Award, Silver: Star, Gold: Crown };

export default function CRMPage() {
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
            Enterprise Module
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[var(--color-text-primary)] tracking-wide">
            CRM <span className="gradient-text">STRATEGY</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Broker segmentation, Buyer tiers, and rewarding platform engagement
          </p>
        </motion.div>

        {/* Tier Cards */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          LOYALTY <span className="gradient-text">TIERS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {Object.entries(tierBenefits).map(([tier, data], i) => {
            const Icon = tierIcons[tier];
            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className={`bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] ${
                  tier === 'Gold' ? 'gold-glow' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${data.color}20` }}
                  >
                    <Icon size={24} style={{ color: data.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: data.color }}>{tier}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      LTV: ₹{data.minLTV.toLocaleString()} {data.maxLTV === Infinity ? '+' : `– ₹${data.maxLTV.toLocaleString()}`}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {data.benefits.map(benefit => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span style={{ color: data.color }} className="mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Leaderboard */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          CUSTOMER <span className="gradient-text">LEADERBOARD</span>
        </h2>

        {(() => {
          const ranked = [...customers].sort((a, b) => b.points - a.points);
          const maxPoints = ranked[0]?.points || 1;
          const rankEmojis = ['🥇', '🥈', '🥉'];
          const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32'];
          const top3 = ranked.slice(0, 3);
          const rest = ranked.slice(3);

          return (
            <>
              {/* Top 3 Podium */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {top3.map((customer, i) => {
                  const tierColor = tierBenefits[customer.tier]?.color || '#fff';
                  const barWidth = (customer.points / maxPoints) * 100;
                  return (
                    <motion.div
                      key={customer.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, type: 'spring', stiffness: 200 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="relative bg-[var(--color-surface)] rounded-2xl p-6 border-2 transition-shadow duration-300"
                      style={{
                        borderColor: `${rankColors[i]}40`,
                        boxShadow: `0 0 30px ${rankColors[i]}15`,
                      }}
                    >
                      {/* Rank Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg" style={{ backgroundColor: rankColors[i], boxShadow: `0 4px 20px ${rankColors[i]}50` }}>
                        {rankEmojis[i]}
                      </div>

                      {/* Rank Number */}
                      <div className="text-6xl font-black opacity-[0.08] absolute top-4 left-5 font-[family-name:var(--font-display)]">
                        #{i + 1}
                      </div>

                      {/* Avatar */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-4"
                        style={{ background: `linear-gradient(135deg, ${rankColors[i]}30, ${rankColors[i]}10)`, color: rankColors[i] }}
                      >
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>

                      {/* Name & Role */}
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{customer.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                          customer.role === 'Broker'
                            ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                            : 'bg-blue-500/10 text-blue-400'
                        }`}>
                          {customer.role}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"
                          style={{ backgroundColor: `${tierColor}20`, color: tierColor }}
                        >
                          {customer.tier}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mt-5">
                        <div className="bg-[var(--color-bg)] rounded-lg px-3 py-2">
                          <p className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wide">Volume</p>
                          <p className="text-sm font-bold text-[var(--color-text-primary)]">₹{(customer.ltv / 10000000).toFixed(1)} Cr</p>
                        </div>
                        <div className="bg-[var(--color-bg)] rounded-lg px-3 py-2">
                          <p className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wide">Properties</p>
                          <p className="text-sm font-bold text-[var(--color-text-primary)]">{customer.orders}</p>
                        </div>
                      </div>

                      {/* Points Bar */}
                      <div className="mt-5">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                            <Zap size={12} className="text-[var(--color-accent)]" />
                            Points
                          </span>
                          <span className="text-sm font-bold" style={{ color: rankColors[i] }}>
                            {customer.points.toLocaleString()} ⭐
                          </span>
                        </div>
                        <div className="h-2.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${barWidth}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${rankColors[i]}80, ${rankColors[i]})` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Rest of the leaderboard */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden mb-20"
              >
                {rest.map((customer, i) => {
                  const rank = i + 4;
                  const tierColor = tierBenefits[customer.tier]?.color || '#fff';
                  const barWidth = (customer.points / maxPoints) * 100;
                  return (
                    <motion.div
                      key={customer.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-border)]/20 transition-colors"
                    >
                      {/* Rank */}
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-bg)] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-[var(--color-text-secondary)]">#{rank}</span>
                      </div>

                      {/* Avatar + Name */}
                      <div className="flex items-center gap-3 sm:w-48">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                          style={{ background: `${tierColor}15`, color: tierColor }}
                        >
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{customer.name}</p>
                          <p className="text-xs text-[var(--color-text-secondary)]">{customer.email}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex items-center gap-2 sm:w-36">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                          customer.role === 'Broker'
                            ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                            : 'bg-blue-500/10 text-blue-400'
                        }`}>
                          {customer.role}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"
                          style={{ backgroundColor: `${tierColor}20`, color: tierColor }}
                        >
                          {customer.tier}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm sm:w-40">
                        <div>
                          <p className="text-[10px] text-[var(--color-text-secondary)] uppercase">Volume</p>
                          <p className="font-semibold text-[var(--color-text-primary)]">₹{(customer.ltv / 10000000).toFixed(1)}Cr</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-[var(--color-text-secondary)] uppercase">Deals</p>
                          <p className="font-semibold text-[var(--color-text-primary)]">{customer.orders}</p>
                        </div>
                      </div>

                      {/* Points Bar */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[var(--color-text-secondary)]">Points</span>
                          <span className="text-xs font-bold text-[var(--color-accent)]">{customer.points} ⭐</span>
                        </div>
                        <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${barWidth}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                            className="h-full rounded-full bg-[var(--color-accent)]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </>
          );
        })()}

        {/* Tier Upgrade Progress */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          TIER UPGRADE <span className="gradient-text">PROGRESS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {customers.filter(c => c.tier !== 'Gold' && c.role === 'Broker').slice(0, 4).map(c => {
            const nextTier = c.tier === 'Bronze' ? 'Silver' : 'Gold';
            const nextThreshold = c.tier === 'Bronze' ? 50000000 : 150000000;
            const progress = Math.min((c.ltv / nextThreshold) * 100, 100);
            const nextColor = tierBenefits[nextTier].color;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[var(--color-text-primary)] font-semibold">{c.name}</p>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    → <span style={{ color: nextColor }}>{nextTier}</span>
                  </span>
                </div>
                <div className="h-3 bg-[var(--color-border)] rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: nextColor }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[var(--color-text-secondary)]">
                  <span>₹{(c.ltv / 10000000).toFixed(1)}Cr Volume</span>
                  <span>₹{(nextThreshold / 10000000).toFixed(1)}Cr needed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement Strategies */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
          ENGAGEMENT <span className="gradient-text">STRATEGY</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MessageCircle, title: 'Automated Lead Messaging', desc: 'When a buyer shortlists a property, instantly connect them to the listing broker with AI chat.' },
            { icon: Gift, title: 'Engagement Points', desc: 'Brokers earn points for verified reviews and high-quality photo uploads. Points increase visibility scoring.' },
            { icon: HeartHandshake, title: 'Enhanced Commissions', desc: 'Gold Tier brokers automatically receive a 0.5% commission bump on all platform-verified transactions.' },
            { icon: TrendingUp, title: 'Referral Program', desc: 'Both referrer and friend get premium listing credits when a new broker successfully closes their first deal.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)]"
            >
              <Icon size={24} className="text-[var(--color-accent)] mb-4" />
              <h4 className="text-[var(--color-text-primary)] font-semibold mb-2">{title}</h4>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Automated Feedback & Complaint Analysis */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mt-20 mb-8 border-t border-[var(--color-border)] pt-16">
          AUTOMATED <span className="gradient-text">COMPLAINT ANALYSIS</span>
        </h2>
        <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] mb-20">
          <p className="text-[var(--color-text-secondary)] mb-8">
            Our CRM does more than just loyalty points. We aggregate <strong>customer feedback, reviews, and complaints</strong>, processing them through our automated analysis pipeline. This system flags major anomalies for immediate review, ensuring platform stability and improving buyer experience continuously.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)]">
              <p className="text-xl font-bold">1,245</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Total Reports Analyzed (30d)</p>
            </div>
             <div className="p-6 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] border-l-4 border-l-orange-500">
              <p className="text-xl font-bold">3</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Major Issues Flagged</p>
            </div>
             <div className="p-6 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] border-l-4 border-l-green-500">
              <p className="text-xl font-bold">98%</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Resolution Rate</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                  <th className="px-4 py-3">Flagged Issue</th>
                  <th className="px-4 py-3">Volume (Reports)</th>
                  <th className="px-4 py-3">Automated Diagnosis</th>
                  <th className="px-4 py-3">Action Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[var(--color-border)]">
                   <td className="px-4 py-4 font-semibold text-[var(--color-text-primary)]">Payment Gateway Unresponsive</td>
                   <td className="px-4 py-4"><span className="text-red-400 font-bold">700</span></td>
                   <td className="px-4 py-4 text-[var(--color-text-secondary)]">Bank node timeout during KYC verifications exceeding 5000ms.</td>
                   <td className="px-4 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-bold">Fixed via failover</span></td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                   <td className="px-4 py-4 font-semibold text-[var(--color-text-primary)]">Image Loading Errors</td>
                   <td className="px-4 py-4"><span className="text-orange-400 font-bold">142</span></td>
                   <td className="px-4 py-4 text-[var(--color-text-secondary)]">Broken Unsplash IDs propagating through prop-001 pipeline.</td>
                   <td className="px-4 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-bold">Patched IDs</span></td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                   <td className="px-4 py-4 font-semibold text-[var(--color-text-primary)]">Agent Unreachable</td>
                   <td className="px-4 py-4"><span className="text-yellow-400 font-bold">85</span></td>
                   <td className="px-4 py-4 text-[var(--color-text-secondary)]">Leads dropping due to weekend off-hours in Bangalore Zone.</td>
                   <td className="px-4 py-4"><span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-bold">Developing AI coverage</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
