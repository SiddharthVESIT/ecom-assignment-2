import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RevenuePage from './pages/RevenuePage';
import MarketingPage from './pages/MarketingPage';
import CRMPage from './pages/CRMPage';
import SecurityPage from './pages/SecurityPage';
import AdminDashboard from './pages/AdminDashboard';
import SCMPage from './pages/SCMPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SubscriptionModelPage from './pages/SubscriptionModelPage';
import AffiliateModelPage from './pages/AffiliateModelPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // A micro-task delay allows Lenis/React to render first, then we snap to top.
    setTimeout(() => {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/products/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="/revenue" element={<PageWrapper><RevenuePage /></PageWrapper>} />
        <Route path="/marketing" element={<PageWrapper><MarketingPage /></PageWrapper>} />
        <Route path="/crm" element={<PageWrapper><CRMPage /></PageWrapper>} />
        <Route path="/security" element={<PageWrapper><SecurityPage /></PageWrapper>} />
        <Route path="/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
        <Route path="/scm" element={<PageWrapper><SCMPage /></PageWrapper>} />
        <Route path="/revenue/subscription" element={<PageWrapper><SubscriptionModelPage /></PageWrapper>} />
        <Route path="/revenue/affiliate" element={<PageWrapper><AffiliateModelPage /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
