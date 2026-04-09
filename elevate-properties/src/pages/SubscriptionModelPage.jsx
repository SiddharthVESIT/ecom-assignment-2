import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Star, Zap, ShieldCheck, Users, BarChart, CheckCircle2, CreditCard, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import useRazorpay from '../hooks/useRazorpay';

const benefits = [
  {
    icon: Zap,
    title: 'Pre-Launch Properties',
    description: 'Get exclusive 48-hour early access to high-value properties before they hit the public market, ensuring you get the best deals for your clients.',
  },
  {
    icon: Users,
    title: 'Exclusive Leads Generation',
    description: 'Receive verified, high-intent HNI (High Net Worth Individual) leads routed directly to your dashboard based on your specialty.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Branding',
    description: 'Display a "Verified Premium" badge on your public profile, significantly increasing trust and conversion rates among buyers.',
  },
  {
    icon: Star,
    title: 'Dedicated Account Manager',
    description: 'Enjoy 24/7 priority support and a dedicated relationship manager to assist with smooth transaction closures and legal queries.',
  },
  {
    icon: BarChart,
    title: 'Advanced Market Analytics',
    description: 'Access proprietary market trends, predictive property valuation tools, and custom reports to advise your clients better.',
  },
];

const plans = [
  {
    name: 'Pro Broker',
    price: '₹15,000',
    priceNum: 15000,
    frequency: '/month',
    features: ['Access to Pre-launch Properties (24h)', '5 Exclusive Leads per month', 'Basic Analytics', 'Standard Support'],
    isPopular: false,
  },
  {
    name: 'Enterprise Elite',
    price: '₹45,000',
    priceNum: 45000,
    frequency: '/month',
    features: ['Pre-launch Properties (48h)', 'Unlimited High-Intent Leads', 'Premium Branding Badge', 'Dedicated Account Manager', 'Advanced Market Analytics'],
    isPopular: true,
  },
];

export default function SubscriptionModelPage() {
  const { initiatePayment, paymentStatus, setPaymentStatus } = useRazorpay();
  const [subscribedPlan, setSubscribedPlan] = useState(null);
  const [subscriptionPaymentId, setSubscriptionPaymentId] = useState(null);

  const handleSelectPlan = (plan) => {
    initiatePayment({
      amount: plan.priceNum,
      description: `${plan.name} Subscription — ${plan.frequency.replace('/', '')}ly`,
      notes: {
        plan_name: plan.name,
        frequency: plan.frequency,
      },
      onSuccess: (response) => {
        setSubscribedPlan(plan.name);
        setSubscriptionPaymentId(response.razorpay_payment_id);
      },
      onFailure: (error) => {
        console.error('Subscription payment failed:', error);
      },
    });
  };

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
              <Key size={32} className="text-[var(--color-accent)]" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[var(--color-text-primary)] tracking-wide">
            SUBSCRIPTION <span className="gradient-text">MODEL</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Empowering premium brokers with exclusive tools, early access to inventory, and high-intent buyer leads to 10x their business.
          </p>
        </motion.div>

        {/* What You Get */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] text-center mb-10">
            WHAT THE <span className="gradient-text">SUBSCRIPTION GIVES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] flex items-center justify-center border border-[var(--color-border)] group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/30 transition-colors mb-6">
                    <Icon size={24} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{benefit.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Premium Profile Demonstration */}
        <div className="mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] mb-4">
              THE <span className="gradient-text">PREMIUM ADVANTAGE</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              How Enterprise Elite brokers stand out to High-Net-Worth clients on the marketplace.
            </p>
          </motion.div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-[80px]" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-surface)] shadow-[0_0_0_2px_rgba(var(--color-accent-rgb),0.5)] shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256" 
                  alt="Premium Broker Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
                  <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">Rajesh Sharma</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                    <ShieldCheck size={16} className="text-[var(--color-accent)]" />
                    <span className="text-xs font-bold text-[var(--color-accent)] tracking-wide uppercase">Enterprise Elite</span>
                  </div>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-6 text-lg">
                  Top 1% Luxury Property Specialist in South Mumbai
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
                  <div>
                    <span className="block text-2xl font-bold text-[var(--color-text-primary)]">240+</span>
                    <span className="text-sm text-[var(--color-text-secondary)]">Properties Sold</span>
                  </div>
                  <div className="w-px h-10 bg-[var(--color-border)] hidden md:block" />
                  <div>
                    <span className="block text-2xl font-bold text-[var(--color-text-primary)]">Exclusive</span>
                    <span className="text-sm text-[var(--color-text-secondary)]">Lead Routing Active</span>
                  </div>
                  <div className="w-px h-10 bg-[var(--color-border)] hidden md:block" />
                  <div>
                    <span className="block text-2xl font-bold text-[var(--color-text-primary)]">Top Tier</span>
                    <span className="text-sm text-[var(--color-text-secondary)]">Verified Trust</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[var(--color-border)] relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between bg-[var(--color-bg)]/50 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Zap size={24} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="text-[var(--color-text-primary)] font-semibold mb-1">Pre-Launch Privilege Active</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">Rajesh has access to DLF's new launch 48 hours before the public.</p>
                </div>
              </div>
              <button className="px-6 py-2.5 bg-[var(--color-accent)] text-black font-semibold rounded-xl hover:bg-[var(--color-accent-soft)] transition-colors shrink-0">
                Contact Rajesh
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
           <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] text-center mb-10">
            SUBSCRIPTION <span className="gradient-text">TIERS</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex-1 bg-[var(--color-surface)] rounded-3xl p-8 border ${plan.isPopular ? 'border-[var(--color-accent)] shadow-[0_0_30px_rgba(var(--color-accent-rgb),0.1)] relative' : 'border-[var(--color-border)]'}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-[var(--color-text-primary)]">{plan.price}</span>
                  <span className="text-[var(--color-text-secondary)] mb-1">{plan.frequency}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {subscribedPlan === plan.name ? (
                  <div className="w-full py-3 rounded-xl font-medium text-center bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/30 flex items-center justify-center gap-2">
                    <Check size={18} />
                    Subscribed!
                  </div>
                ) : (
                  <button
                    id={`select-plan-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleSelectPlan(plan)}
                    disabled={paymentStatus === 'processing'}
                    className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-soft)]'
                        : 'bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                    } disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {paymentStatus === 'processing' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>
                        <CreditCard size={16} />
                        Select Plan
                      </>
                    )}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Razorpay Trust Badge */}
          <p className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-text-secondary)] mt-6">
            <ShieldCheck size={14} className="text-[var(--color-success)]" />
            All payments are secured via Razorpay · PCI DSS Compliant
          </p>
        </div>

        {/* Subscription Success Banner */}
        <AnimatePresence>
          {paymentStatus === 'success' && subscribedPlan && subscriptionPaymentId && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="max-w-2xl mx-auto mb-16 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center shrink-0">
                  <Check size={24} className="text-[var(--color-success)]" />
                </div>
                <div>
                  <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">Welcome to {subscribedPlan}!</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm mt-1">
                    Your subscription is now active. All premium features have been unlocked.
                  </p>
                  <div className="mt-3 flex items-center gap-2 bg-[var(--color-surface)] rounded-lg px-3 py-2 border border-[var(--color-border)]">
                    <CreditCard size={14} className="text-[var(--color-accent)]" />
                    <span className="text-xs text-[var(--color-text-secondary)]">Payment ID:</span>
                    <code className="text-xs font-mono text-[var(--color-text-primary)]">{subscriptionPaymentId}</code>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Payment Failed Banner */}
        <AnimatePresence>
          {paymentStatus === 'failed' && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="max-w-2xl mx-auto mb-16 bg-[var(--color-danger)]/10 border border-[var(--color-danger)]/30 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-danger)]/20 flex items-center justify-center shrink-0">
                  <CreditCard size={24} className="text-[var(--color-danger)]" />
                </div>
                <div>
                  <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">Payment Failed</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm mt-1">
                    We couldn't process your subscription payment. Please try again.
                  </p>
                  <button
                    onClick={() => setPaymentStatus('idle')}
                    className="mt-3 text-sm font-medium text-[var(--color-accent)] hover:underline"
                  >
                    Try Again →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

