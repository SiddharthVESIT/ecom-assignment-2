import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Package, Star, Crown, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const dummyOrders = [
  {
    id: 'ORD-20250301',
    date: '2025-03-01',
    items: ['AirStep Pro X', 'CloudRun Elite'],
    total: 10998,
    status: 'Delivered'
  },
  {
    id: 'ORD-20250215',
    date: '2025-02-15',
    items: ['UrbanGlide Classic'],
    total: 3499,
    status: 'Delivered'
  },
  {
    id: 'ORD-20250128',
    date: '2025-01-28',
    items: ['StreetFlex Hype', 'CanvasWalk Retro'],
    total: 9498,
    status: 'Delivered'
  }
];

export default function Dashboard() {
  const { isLoggedIn, user, logout } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const tierConfig = {
    Bronze: { color: 'var(--color-bronze)', icon: Star },
    Silver: { color: 'var(--color-silver)', icon: Crown },
    Gold: { color: 'var(--color-gold)', icon: Crown },
  };

  const tier = tierConfig[user?.tier] || tierConfig.Silver;
  const TierIcon = tier.icon;

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
              Continue Shopping →
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
