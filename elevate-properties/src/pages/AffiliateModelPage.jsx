import { motion } from 'framer-motion';
import { Handshake, Landmark, Paintbrush, Scale, IndianRupee, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [
  {
    category: 'Home Loan Banks',
    icon: Landmark,
    items: [
      { name: 'HDFC Bank', commission: '0.5%', leads: 142, revenue: '₹12.5L' },
      { name: 'SBI Home Loans', commission: '0.4%', leads: 89, revenue: '₹6.2L' },
      { name: 'ICICI Bank', commission: '0.5%', leads: 110, revenue: '₹9.8L' },
    ],
  },
  {
    category: 'Interior Designers',
    icon: Paintbrush,
    items: [
      { name: 'Livspace', commission: '5.0%', leads: 45, revenue: '₹8.4L' },
      { name: 'HomeLane', commission: '4.5%', leads: 32, revenue: '₹5.1L' },
      { name: 'Bonito Designs', commission: '5.0%', leads: 18, revenue: '₹3.2L' },
    ],
  },
  {
    category: 'Legal & Advisory',
    icon: Scale,
    items: [
      { name: 'Khaitan & Co (RE Desk)', commission: '10%', leads: 24, revenue: '₹4.5L' },
      { name: 'AZB & Partners', commission: '8%', leads: 12, revenue: '₹2.1L' },
      { name: 'Local Registration Agents', commission: '15%', leads: 85, revenue: '₹1.8L' },
    ],
  },
];

const recentCommissions = [
  { id: 'TRX-9921', partner: 'HDFC Bank', client: 'Sharma Family', amount: '₹85,000', status: 'Credited', date: 'Oct 12, 2026' },
  { id: 'TRX-9922', partner: 'Livspace', client: 'A. Gupta', amount: '₹1,20,000', status: 'Credited', date: 'Oct 10, 2026' },
  { id: 'TRX-9923', partner: 'ICICI Bank', client: 'Mehta Group', amount: '₹45,000', status: 'Pending', date: 'Oct 08, 2026' },
  { id: 'TRX-9924', partner: 'Khaitan & Co', client: 'R. Desai', amount: '₹35,000', status: 'Credited', date: 'Oct 05, 2026' },
];

export default function AffiliateModelPage() {
  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center">
              <Handshake size={32} className="text-[var(--color-accent)]" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[var(--color-text-primary)] tracking-wide">
            AFFILIATE <span className="gradient-text">PARTNERSHIPS</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Creating a comprehensive real estate ecosystem while generating significant passive commission revenue through trusted industry partners.
          </p>
        </motion.div>

        {/* Global Affiliate Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           {[
            { label: 'Total Affiliate Revenue (YTD)', value: '₹53.6L', icon: IndianRupee },
            { label: 'Active Partners', value: '24', icon: Handshake },
            { label: 'Avg Monthly Growth', value: '+14%', icon: TrendingUp },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                <stat.icon size={24} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-[var(--color-text-primary)]">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="space-y-12 mb-16">
          {partners.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-[var(--color-border)] pb-4">
                  <CategoryIcon size={24} className="text-[var(--color-accent)]" />
                  <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, i) => (
                    <div key={item.name} className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">{item.name}</h3>
                        <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold px-2 py-1 rounded">
                          {item.commission} Cut
                        </span>
                      </div>
                      <div className="flex justify-between items-end mt-6 pt-4 border-t border-[var(--color-border)]">
                        <div>
                          <p className="text-xs text-[var(--color-text-secondary)]">Leads Sent</p>
                          <p className="font-medium text-[var(--color-text-primary)]">{item.leads}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[var(--color-text-secondary)]">Revenue Generated</p>
                          <p className="font-medium text-[var(--color-accent)] flex items-center justify-end gap-1">
                            {item.revenue} <ArrowUpRight size={14} />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Recent Commissions Table */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12"
        >
          <div className="p-6 border-b border-[var(--color-border)]">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Recent Commission Intel</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--color-bg)]/50 text-[var(--color-text-secondary)] text-sm">
                  <th className="p-4 font-medium border-b border-[var(--color-border)]">Transaction ID</th>
                  <th className="p-4 font-medium border-b border-[var(--color-border)]">Partner</th>
                  <th className="p-4 font-medium border-b border-[var(--color-border)]">Client Ref</th>
                  <th className="p-4 font-medium border-b border-[var(--color-border)]">Date</th>
                  <th className="p-4 font-medium border-b border-[var(--color-border)]">Amount</th>
                  <th className="p-4 font-medium border-b border-[var(--color-border)]">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-[var(--color-text-primary)]">
                {recentCommissions.map((trx, i) => (
                  <tr key={trx.id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg)]/30 transition-colors">
                    <td className="p-4 font-mono text-[var(--color-text-secondary)]">{trx.id}</td>
                    <td className="p-4 font-medium">{trx.partner}</td>
                    <td className="p-4">{trx.client}</td>
                    <td className="p-4 text-[var(--color-text-secondary)]">{trx.date}</td>
                    <td className="p-4 font-semibold text-[var(--color-accent)]">{trx.amount}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        trx.status === 'Credited' 
                          ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                       }`}>
                        {trx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Back Link */}
        <div className="text-center">
             <Link to="/revenue">
              <button className="px-6 py-2.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-all flex items-center gap-2 mx-auto">
                Back to Revenue Model
              </button>
            </Link>
        </div>

      </div>
    </main>
  );
}
