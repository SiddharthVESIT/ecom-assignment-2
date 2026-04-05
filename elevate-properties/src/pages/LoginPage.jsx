import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Zap, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  if (isLoggedIn) return <Navigate to="/dashboard" replace />;

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: '', width: '0%', color: '' };
    if (pwd.length < 4) return { label: 'Weak', width: '33%', color: 'var(--color-danger)' };
    if (pwd.length < 8 || !/[!@#$%^&*0-9]/.test(pwd)) return { label: 'Medium', width: '66%', color: 'var(--color-warning)' };
    return { label: 'Strong', width: '100%', color: 'var(--color-success)' };
  };

  const strength = getPasswordStrength(password);

  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
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
    <main className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-text-primary)] tracking-wide">
            BROKER <span className="gradient-text">PORTAL</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-2">Sign in to Elevate Estates</p>
        </div>

        <div
          className={`bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] ${shake ? 'wrong-shake' : ''}`}
        >
          {/* Demo Credentials */}
          <div className="mb-6 p-4 rounded-xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
            <p className="text-xs text-[var(--color-accent)] font-medium mb-2">🔑 Demo Credentials</p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Email: <span className="text-[var(--color-text-primary)]">broker@elevate.com</span>
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Password: <span className="text-[var(--color-text-primary)]">demo1234</span>
            </p>
            <button
              onClick={quickFill}
              className="mt-3 flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-accent)] text-[var(--color-text-primary)] text-xs font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              <Zap size={12} />
              Quick Fill
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-[var(--color-text-secondary)] mb-2">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full pl-12 pr-4 py-3 bg-[var(--color-bg)] border rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]/50 outline-none transition-colors ${
                    email && !isValidEmail(email) ? 'border-[var(--color-danger)]' : 'border-[var(--color-border)] focus:border-[var(--color-accent)]'
                  }`}
                />
              </div>
              {email && !isValidEmail(email) && (
                <p className="text-xs text-[var(--color-danger)] mt-1">Please enter a valid email</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm text-[var(--color-text-secondary)] mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
                <input
                  id="password"
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
              {/* Password Strength */}
              {password && (
                <div className="mt-2">
                  <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: strength.width, backgroundColor: strength.color }}
                    />
                  </div>
                  <p className="text-xs mt-1" style={{ color: strength.color }}>{strength.label}</p>
                </div>
              )}
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-[var(--color-danger)] bg-[var(--color-danger)]/10 px-4 py-2 rounded-lg">
                {error}
              </p>
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
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="text-xs text-[var(--color-text-secondary)]">or continue with</span>
            <div className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          {/* OAuth Buttons (Visual Only) */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-border)] transition-colors">
              Google
            </button>
            <button className="py-3 border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-border)] transition-colors">
              Apple
            </button>
          </div>

          <p className="text-center text-xs text-[var(--color-text-secondary)] mt-6">
            <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Forgot password?</a>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
