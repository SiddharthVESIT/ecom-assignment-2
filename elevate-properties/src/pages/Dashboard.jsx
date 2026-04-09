import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Package, Star, Crown, ShoppingBag, Copy, Check, Share2, Gift, Users, Percent } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState, useCallback, useEffect } from 'react';

const dummyOrders = [
  {
    id: 'INV-20250301',
    date: '2025-03-01',
    items: ['Skyline Oasis Penthouse - Advance'],
    total: 2500000,
    status: 'Invested'
  },
  {
    id: 'INV-20250215',
    date: '2025-02-15',
    items: ['Lakeview Manor (Legal Fees)'],
    total: 150000,
    status: 'Completed'
  },
  {
    id: 'INV-20250128',
    date: '2025-01-28',
    items: ['Palm Breeze Apartments - Token'],
    total: 500000,
    status: 'Invested'
  }
];

/* ── referral helpers ── */
function generateReferralCode(name) {
  const prefix = (name || 'USER').split(' ').map(n => n[0]).join('').toUpperCase();
  const suffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `EE-${prefix}-${suffix}`;
}

function getReferralStats() {
  // Hardcoded stats for demo — no backend
  return { totalReferred: 4, activeCodes: 1, totalSaved: 127500 };
}

const dummyReferrals = [
  { name: 'Riya Kapoor', date: '2025-02-10', status: 'Converted', savings: '₹85,000' },
  { name: 'Amit Sinha', date: '2025-02-22', status: 'Converted', savings: '₹42,500' },
  { name: 'Neha Verma', date: '2025-03-05', status: 'Pending', savings: '—' },
  { name: 'Rahul Das', date: '2025-03-12', status: 'Signed Up', savings: '—' },
];

export default function Dashboard() {
  const { isLoggedIn, user, logout } = useAuth();
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    if (!user) return;
    const stored = localStorage.getItem('elevate_referral');
    if (stored) {
      setReferralCode(stored);
    } else {
      const code = generateReferralCode(user.name);
      localStorage.setItem('elevate_referral', code);
      setReferralCode(code);
    }
  }, [user]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [referralCode]);

  const shareReferral = useCallback(() => {
    const shareData = {
      title: 'Elevate Estates Referral',
      text: `Use my referral code ${referralCode} on Elevate Estates and get 0.1% discount on your next property booking!`,
      url: window.location.origin,
    };
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      copyToClipboard();
    }
  }, [referralCode, copyToClipboard]);

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const tierConfig = {
    Bronze: { color: 'var(--color-bronze)', icon: Star },
    Silver: { color: 'var(--color-silver)', icon: Crown },
    Gold: { color: 'var(--color-gold)', icon: Crown },
  };

  const tier = tierConfig[user?.tier] || tierConfig.Silver;
  const TierIcon = tier.icon;
  const stats = getReferralStats();

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-text-primary)] tracking-wide">
                MY <span className="gradient-text">DASHBOARD</span>
              </h1>
              <p className="text-[var(--color-text-secondary)] mt-1">
                Welcome back, {user?.name || 'User'}!
              </p>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors self-start"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Tier Card */}
            <div
              className={`bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)] ${user?.tier === 'Gold' ? 'gold-glow' : ''}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${tier.color}20` }}
                >
                  <TierIcon size={22} style={{ color: tier.color }} />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">Your Tier</p>
                  <p className="text-xl font-bold" style={{ color: tier.color }}>{user?.tier}</p>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Enjoy exclusive {user?.tier} member benefits
              </p>
            </div>

            {/* Total Orders */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Package size={22} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">Total Orders</p>
                  <p className="text-xl font-bold text-[var(--color-text-primary)]">{dummyOrders.length}</p>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">All orders delivered successfully</p>
            </div>

            {/* Total Spent */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center">
                  <ShoppingBag size={22} className="text-[var(--color-success)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">Total Spent</p>
                  <p className="text-xl font-bold text-[var(--color-text-primary)]">
                    ₹{dummyOrders.reduce((s, o) => s + o.total, 0).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">Lifetime purchases</p>
            </div>
          </div>

          {/* ═══════ REFERRAL PROGRAM ═══════ */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] tracking-wide mb-6">
            REFERRAL <span className="gradient-text">PROGRAM</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Referral Code Card — spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)] rounded-2xl p-6 md:p-8 border border-[var(--color-accent)]/20 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Gift size={20} className="text-[var(--color-accent)]" />
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Share & Earn</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-lg">
                  Share your unique referral code with friends. When they sign up and book a property,
                  they get a <strong className="text-[var(--color-accent)]">0.1% discount</strong> on the booking amount — and you earn <strong className="text-[var(--color-accent)]">bonus loyalty points</strong>!
                </p>

                {/* Code Display */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                  <div className="flex-1 bg-[var(--color-bg)] border-2 border-dashed border-[var(--color-accent)]/30 rounded-xl px-5 py-4 flex items-center justify-between gap-3">
                    <code className="text-lg md:text-xl font-mono font-bold text-[var(--color-accent)] tracking-widest select-all">
                      {referralCode}
                    </code>
                    <button
                      onClick={copyToClipboard}
                      className={`shrink-0 p-2 rounded-lg transition-all ${
                        copied
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20'
                      }`}
                      title="Copy code"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>

                  <button
                    onClick={shareReferral}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold rounded-xl hover:bg-[var(--color-accent-soft)] transition-colors"
                  >
                    <Share2 size={18} />
                    Share
                  </button>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[var(--color-bg)] rounded-lg px-4 py-3 text-center">
                    <Users size={16} className="text-[var(--color-accent)] mx-auto mb-1" />
                    <p className="text-xl font-bold text-[var(--color-text-primary)]">{stats.totalReferred}</p>
                    <p className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wide">Referred</p>
                  </div>
                  <div className="bg-[var(--color-bg)] rounded-lg px-4 py-3 text-center">
                    <Gift size={16} className="text-green-500 mx-auto mb-1" />
                    <p className="text-xl font-bold text-[var(--color-text-primary)]">{stats.activeCodes}</p>
                    <p className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wide">Active Codes</p>
                  </div>
                  <div className="bg-[var(--color-bg)] rounded-lg px-4 py-3 text-center">
                    <Percent size={16} className="text-[var(--color-gold)] mx-auto mb-1" />
                    <p className="text-xl font-bold text-[var(--color-text-primary)]">₹{stats.totalSaved.toLocaleString()}</p>
                    <p className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wide">Savings Generated</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How it works card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]"
            >
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-5">How it Works</h3>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Share Your Code', desc: 'Copy or share your unique referral code with friends and family.' },
                  { step: '2', title: 'They Sign Up', desc: 'Your friend creates an account and enters your referral code.' },
                  { step: '3', title: 'They Get 0.1% Off', desc: 'On their first property token booking, they get a 0.1% discount.' },
                  { step: '4', title: 'You Earn Points', desc: 'You receive 100 bonus loyalty points per successful referral.' },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[var(--color-accent)]">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Referral History */}
          <h3 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4">Referral History</h3>
          <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    {['Referred User', 'Date', 'Status', 'Savings Earned'].map(h => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dummyReferrals.map(ref => (
                    <tr key={ref.name} className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-border)]/20 transition-colors">
                      <td className="px-5 py-3 text-sm font-medium text-[var(--color-text-primary)]">{ref.name}</td>
                      <td className="px-5 py-3 text-sm text-[var(--color-text-secondary)]">{ref.date}</td>
                      <td className="px-5 py-3">
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${
                          ref.status === 'Converted' ? 'bg-green-500/10 text-green-500'
                            : ref.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400'
                            : 'bg-blue-500/10 text-blue-400'
                        }`}>
                          {ref.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-sm font-medium text-[var(--color-accent)]">{ref.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order History */}
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] tracking-wide mb-6">
            ORDER HISTORY
          </h2>
          <div className="space-y-4">
            {dummyOrders.map(order => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <p className="text-[var(--color-text-primary)] font-semibold">{order.id}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{order.date}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {order.items.join(', ')}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-[var(--color-text-primary)] font-bold">₹{order.total.toLocaleString()}</p>
                  <span className="px-3 py-1 bg-[var(--color-success)]/10 text-[var(--color-success)] text-xs font-medium rounded-full">
                    {order.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              Explore Properties →
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
