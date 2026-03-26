import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Shop' },
  { path: '/revenue', label: 'Revenue' },
  { path: '/marketing', label: 'Marketing' },
  { path: '/crm', label: 'CRM' },
  { path: '/security', label: 'Security' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-white">
            STEP<span className="text-[var(--color-accent)]">UP</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)] ${
                location.pathname === link.path
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-secondary)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/products" className="relative p-2 hover:text-[var(--color-accent)] transition-colors">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--color-accent)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Auth Button */}
          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/dashboard"
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              <User size={16} />
              Login
            </Link>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#0A0A0A]/95 backdrop-blur-xl transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium py-3 border-b border-[#2A2A2A] transition-colors ${
                location.pathname === link.path
                  ? 'text-[var(--color-accent)]'
                  : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="text-lg font-medium py-3 border-b border-[#2A2A2A] text-white">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-lg font-medium py-3 text-left text-[var(--color-accent)]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg"
            >
              <User size={18} />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
