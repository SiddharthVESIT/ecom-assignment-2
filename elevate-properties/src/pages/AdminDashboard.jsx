import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Truck, IndianRupee, Megaphone, ShieldCheck, Database, LayoutDashboard } from 'lucide-react';

export default function AdminDashboard() {
  const cards = [
    { title: 'CRM Strategy', path: '/crm', icon: Users, color: '#4CAF50', desc: 'Customer Relationship Management & Feedback' },
    { title: 'SCM Strategy', path: '/scm', icon: Truck, color: '#FF9800', desc: 'Supply Chain, Brokers & Agent Network' },
    { title: 'Revenue Model', path: '/revenue', icon: IndianRupee, color: '#E1306C', desc: 'Diversified income streams & financial mapping' },
    { title: 'Marketing Strategy', path: '/marketing', icon: Megaphone, color: '#2196F3', desc: 'Campaigns, Reach, & Social Media' },
    { title: 'Security Protocol', path: '/security', icon: ShieldCheck, color: '#9C27B0', desc: 'Data security, privacy, & practices' },
  ];

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen border-t border-[var(--color-border)]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full text-[var(--color-accent)] text-sm font-medium mb-4">
            <ShieldCheck size={16} /> Admin Portal
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[var(--color-text-primary)] tracking-wide">
            ENTERPRISE <span className="gradient-text">ERP</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Master command center for Elevate Estates enterprise modules
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Link to={card.path} key={card.title} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] h-full hover:border-[var(--color-accent)]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: `${card.color}15` }}>
                    <Icon size={24} style={{ color: card.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {card.desc}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="mt-16 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
               <Database className="text-zinc-400" size={20} />
             </div>
             <div>
               <h4 className="font-semibold text-zinc-200">System Status</h4>
               <p className="text-xs text-zinc-500">All ERP modules operational and synchronized.</p>
             </div>
           </div>
           <div className="px-4 py-2 rounded bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             Online
           </div>
        </motion.div>
      </div>
    </main>
  );
}
