import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Lock, Shield, Globe, Clock, Hash, Code, Mail, Eye, EyeOff, Zap, Loader2, ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const securityPractices = [
  {
    icon: Globe,
    title: 'HTTPS / TLS Encryption',
    description: 'All document transmissions (KYC, Sale Deeds) between the user\'s browser and our servers are encrypted using TLS 1.3.',
    color: '#4CAF50'
  },
  {
    icon: ShieldCheck,
    title: 'JWT Token Sessions',
    description: 'Stateless authentication using JSON Web Tokens ensures broker portal sessions are securely maintained with strict 24-hour expiry.',
    color: '#2196F3'
  },
  {
    icon: Clock,
    title: 'Rate Limiting',
    description: 'Broker portal API endpoints are protected with rate limiting to prevent brute-force attacks and ensure continuous platform availability.',
    color: '#FF9800'
  },
  {
    icon: Hash,
    title: 'Client Data Hashing',
    description: 'All passwords and sensitive client IDs are hashed using bcrypt with 10 salt rounds before storage to ensure complete confidentiality.',
    color: '#9C27B0'
  },
  {
    icon: Shield,
    title: 'CORS Policy',
    description: 'Cross-Origin Resource Sharing is strictly configured to only accept requests from whitelisted origins. This prevents unauthorized websites from making API calls on behalf of users.',
    color: '#00BCD4'
  },
  {
    icon: Code,
    title: 'KYC Input Sanitization',
    description: 'All user inputs, especially KYC forms, are sanitized to prevent script attacks ensuring safe processing of real estate documentation.',
    color: '#F44336'
  }
];

export default function SecurityPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: '', width: '0%', color: '', level: 0 };
    let score = 0;
    if (pwd.length >= 4) score++;
    if (pwd.length >= 8) score++;
    if (/[!@#$%^&*]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;

    if (score <= 1) return { label: 'Weak', width: '33%', color: 'var(--color-danger)', level: 1 };
    if (score <= 3) return { label: 'Medium', width: '66%', color: 'var(--color-warning)', level: 2 };
    return { label: 'Strong', width: '100%', color: 'var(--color-success)', level: 3 };
  };

  const strength = getPasswordStrength(password);
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = login(email, password);
    if (result) {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      setLoading(false);
      setError('Invalid credentials. Use the demo account.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const quickFill = () => {
    setEmail('broker@elevate.com');
    setPassword('demo1234');
    setError('');
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
          <span className="inline-block px-4 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full text-[var(--color-accent)] text-sm font-medium mb-4">
            Enterprise Module
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-[var(--color-text-primary)] tracking-wide">
            SECURITY <span className="gradient-text">DEMO</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto text-lg">
            Interactive login form demonstration with real-time validation and security best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Login Form Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] tracking-wide mb-6">
              LOGIN FORM <span className="gradient-text">DEMO</span>
            </h2>
            <div
              className={`bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] ${shake ? 'wrong-shake' : ''}`}
            >
              {/* Demo Credentials */}
              <div className="mb-6 p-4 rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">🔑 Demo Credentials</p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Email: <span className="text-[var(--color-text-primary)] font-mono">broker@elevate.com</span>
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Password: <span className="text-[var(--color-text-primary)] font-mono">demo1234</span>
                </p>
                <button
                  onClick={quickFill}
                  className="mt-3 flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-accent)] text-[var(--color-text-primary)] text-xs font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
                >
                  <Zap size={12} />
                  Quick Fill
                </button>
              </div>

              {success ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <ShieldCheck size={32} className="text-[var(--color-success)]" />
                  </motion.div>
                  <p className="text-[var(--color-success)] font-semibold">Login Successful!</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Redirecting to dashboard...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="sec-email" className="block text-sm text-[var(--color-text-secondary)] mb-2">Email Address</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                      <input
                        id="sec-email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={`w-full pl-12 pr-4 py-3 bg-[var(--color-bg)] border rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/50 outline-none transition-colors ${
                          email && !isValidEmail(email) ? 'border-[var(--color-danger)]' : 'border-[var(--color-border)] focus:border-[var(--color-accent)]'
                        }`}
                      />
                      {email && isValidEmail(email) && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-success)]">✓</span>
                      )}
                    </div>
                    {email && !isValidEmail(email) && (
                      <p className="text-xs text-[var(--color-danger)] mt-1">Please enter a valid email address</p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="sec-password" className="block text-sm text-[var(--color-text-secondary)] mb-2">Password</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                      <input
                        id="sec-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-12 pr-12 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/50 outline-none focus:border-[var(--color-accent)] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {/* Strength Bar */}
                    {password && (
                      <div className="mt-2">
                        <div className="flex gap-1">
                          {[1, 2, 3].map(level => (
                            <div
                              key={level}
                              className="flex-1 h-1.5 rounded-full transition-colors duration-300"
                              style={{
                                backgroundColor: strength.level >= level ? strength.color : 'var(--color-border)'
                              }}
                            />
                          ))}
                        </div>
                        <p className="text-xs mt-1" style={{ color: strength.color }}>{strength.label}</p>
                      </div>
                    )}
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-[var(--color-danger)] bg-[var(--color-danger)]/10 px-4 py-2 rounded-lg"
                    >
                      {error}
                    </motion.p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[var(--color-accent-soft)] transition-colors disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <Lock size={16} />
                        Sign In
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Features Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] tracking-wide mb-6">
              FORM <span className="gradient-text">FEATURES</span>
            </h2>
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)]">
              <ul className="space-y-4">
                {[
                  'Real-time email format validation',
                  'Password strength indicator (Weak / Medium / Strong)',
                  'Show/hide password toggle',
                  'Shake animation on wrong credentials',
                  '1.5s loading spinner on submit',
                  'Quick Fill button for demo credentials',
                  'Success animation before redirect',
                  'Demo Mode — no real authentication'
                ].map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[var(--color-accent)] text-xs">✓</span>
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Security Practices */}
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8 text-center">
          SECURITY <span className="gradient-text">PRACTICES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPractices.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)]/20 transition-colors"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="text-[var(--color-text-primary)] font-semibold text-lg mb-3">{title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
