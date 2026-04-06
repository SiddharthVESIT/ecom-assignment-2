import { motion } from 'framer-motion';
import { ShoppingBag, Crown, Handshake, Users, TrendingUp, IndianRupee, BarChart3, Target, HandCoins, Building2, Megaphone, Key } from 'lucide-react';
import { revenueStats, revenueStreams, monthlyRevenue } from '../data/revenueStats';

const iconMap = { ShoppingBag, Crown, Handshake, Users, HandCoins, Building2, Megaphone, Key };

export default function RevenuePage() {
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
            REVENUE <span className="gradient-text">MODEL</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            How Elevate Estates generates sustainable revenue through diversified real estate streams
          </p>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: IndianRupee, label: 'Monthly GMV', value: revenueStats.monthlyGMV },
            { icon: Target, label: 'Conversion Rate', value: revenueStats.conversionRate },
            { icon: ShoppingBag, label: 'Avg Order Value', value: revenueStats.averageOrderValue },
            { icon: TrendingUp, label: 'Returning Customers', value: revenueStats.returningCustomers },
          ].map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] text-center"
            >
              <Icon size={24} className="text-[var(--color-accent)] mx-auto mb-3" />
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[var(--color-text-primary)]">{value}</p>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue Streams */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8 text-center">
          REVENUE <span className="gradient-text">STREAMS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {revenueStreams.map((stream, i) => {
            const Icon = iconMap[stream.icon] || ShoppingBag;
            return (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Icon size={24} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                    {stream.percentage}%
                  </span>
                </div>
                <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mb-2">{stream.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                  {stream.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-secondary)]">Monthly Revenue</span>
                  <span className="text-[var(--color-accent)] font-bold">{stream.stats}</span>
                </div>
                {/* Progress Bar */}
                <div className="mt-3 h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stream.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-[var(--color-accent)] rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dummy Ads Example for Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] mb-16 text-center"
        >
          <h3 className="text-[var(--color-text-secondary)] font-semibold text-lg mb-4">Ad Network Placeholder</h3>
          <div className="w-full h-32 border-2 border-dashed border-[var(--color-border)] rounded flex items-center justify-center text-[var(--color-text-secondary)]">
            <span>[ Sponsored Content: "New Launch by DLF - Buy Now!" ]</span>
          </div>
        </motion.div>

        {/* Revenue Chart (CSS bar chart) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)]"
        >
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 size={24} className="text-[var(--color-accent)]" />
            <h3 className="text-[var(--color-text-primary)] font-semibold text-lg">Monthly Revenue Trend (₹ Crores)</h3>
          </div>
          <div className="flex items-end justify-between gap-4 h-48">
            {monthlyRevenue.map((item, i) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-[var(--color-text-secondary)]">₹{item.revenue}Cr</span>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(item.revenue / 500) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * i }}
                  className="w-full bg-gradient-to-t from-[var(--color-accent)] to-[var(--color-accent-soft)] rounded-t-lg"
                />
                <span className="text-xs text-[var(--color-text-secondary)]">{item.month}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
