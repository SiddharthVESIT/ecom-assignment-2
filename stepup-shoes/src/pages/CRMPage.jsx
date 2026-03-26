import { motion } from 'framer-motion';
import { Crown, Star, Award, Gift, Truck, MessageCircle, Mail, HeartHandshake, TrendingUp } from 'lucide-react';
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
            Assignment Module
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white tracking-wide">
            CRM <span className="gradient-text">STRATEGY</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Customer segmentation, loyalty tiers, and retention strategies to maximize lifetime value
          </p>
        </motion.div>

        {/* Tier Cards */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
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

        {/* Customer Table */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
          CUSTOMER <span className="gradient-text">DATABASE</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden mb-20"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  {['Customer', 'Email', 'Tier', 'LTV', 'Orders', 'Last Purchase', 'Category'].map(h => (
                    <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => {
                  const tierColor = tierBenefits[customer.tier]?.color || '#fff';
                  return (
                    <tr key={customer.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-border)]/30 transition-colors">
                      <td className="px-6 py-4 text-sm text-white font-medium">{customer.name}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{customer.email}</td>
                      <td className="px-6 py-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                          style={{ backgroundColor: `${tierColor}20`, color: tierColor }}
                        >
                          {customer.tier}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-white font-medium">₹{customer.ltv.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{customer.orders}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{customer.lastPurchase}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{customer.favoriteCategory}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Tier Upgrade Progress */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
          TIER UPGRADE <span className="gradient-text">PROGRESS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {customers.filter(c => c.tier !== 'Gold').slice(0, 4).map(c => {
            const nextTier = c.tier === 'Bronze' ? 'Silver' : 'Gold';
            const nextThreshold = c.tier === 'Bronze' ? 5000 : 15000;
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
                  <p className="text-white font-semibold">{c.name}</p>
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
                  <span>₹{c.ltv.toLocaleString()} LTV</span>
                  <span>₹{nextThreshold.toLocaleString()} needed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Retention Strategies */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
          RETENTION <span className="gradient-text">STRATEGY</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Mail, title: 'Win-back Emails', desc: 'Automated emails to inactive customers after 30 days with personalized product recommendations' },
            { icon: Gift, title: 'Birthday Discounts', desc: 'Special 15% discount code sent automatically on customer birthdays with curated picks' },
            { icon: HeartHandshake, title: 'Loyalty Points', desc: 'Earn 1 point per ₹100 spent. Redeem points for discounts on future purchases' },
            { icon: TrendingUp, title: 'Referral Program', desc: 'Both referrer and friend get ₹200 credit when a new customer makes their first purchase' },
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
              <h4 className="text-white font-semibold mb-2">{title}</h4>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
