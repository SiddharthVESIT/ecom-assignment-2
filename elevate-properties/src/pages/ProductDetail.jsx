import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Star, ArrowLeft, Check, CreditCard, ShieldCheck, IndianRupee } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import useRazorpay from '../hooks/useRazorpay';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const { initiatePayment, paymentStatus, setPaymentStatus } = useRazorpay();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [added, setAdded] = useState(false);
  const [paymentId, setPaymentId] = useState(null);

  if (!product) {
    return (
      <main className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[var(--color-text-primary)] mb-4">Property Not Found</h2>
          <Link to="/products" className="text-[var(--color-accent)] hover:underline">← Back to Properties</Link>
        </div>
      </main>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Token booking amount = 1% of property price
  const bookingAmount = Math.round(product.price * 0.01);

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    addItem(product, selectedSize || product.sizes[0], selectedColor || product.colors[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBookNow = () => {
    initiatePayment({
      amount: bookingAmount,
      description: `Token Booking — ${product.name}`,
      notes: {
        property_id: product.id,
        property_name: product.name,
        configuration: selectedSize || product.sizes[0],
        option: selectedColor || product.colors[0],
      },
      onSuccess: (response) => {
        setPaymentId(response.razorpay_payment_id);
      },
      onFailure: (error) => {
        console.error('Payment failed:', error);
      },
    });
  };

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8">
          <ArrowLeft size={18} />
          Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-4 py-1.5 text-sm font-bold rounded-full ${
                  product.badge === 'New' ? 'bg-[var(--color-accent)] text-[var(--color-text-primary)]'
                    : product.badge === 'Sale' ? 'bg-[var(--color-success)] text-black'
                    : 'bg-[var(--color-gold)] text-black'
                }`}
              >
                {product.badge}
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-[var(--color-accent)] text-sm font-medium uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[var(--color-text-primary)] mt-2 tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-border)]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-3xl font-bold text-[var(--color-text-primary)]">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-[var(--color-text-secondary)] line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-2 py-1 bg-[var(--color-success)]/10 text-[var(--color-success)] text-sm font-medium rounded">
                    {discount}% off
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Size Picker */}
            <div className="mt-8">
              <h4 className="text-[var(--color-text-primary)] font-semibold text-sm mb-3">Configuration</h4>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-text-primary)]'
                        : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-white hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            <div className="mt-6">
              <h4 className="text-[var(--color-text-primary)] font-semibold text-sm mb-3">Property Option</h4>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded border transition-all text-sm font-medium ${
                      selectedColor === color ? 'border-[var(--color-accent)] text-[var(--color-text-primary)] bg-[var(--color-accent)]' : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-white'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-[var(--color-success)] text-black'
                    : 'bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-soft)]'
                }`}
              >
                {added ? (
                  <>
                    <Check size={20} />
                    Broker Contacted!
                  </>
                ) : (
                  <>
                    <User size={20} />
                    Contact Broker
                  </>
                )}
              </button>
              <button className="w-14 h-14 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors">
                <Heart size={20} className="text-[var(--color-text-secondary)]" />
              </button>
            </div>

            {/* Book Now — Razorpay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <button
                id="book-now-btn"
                onClick={handleBookNow}
                disabled={paymentStatus === 'processing'}
                className="w-full py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white hover:from-[#16213e] hover:to-[#0f3460] disabled:opacity-60 disabled:cursor-not-allowed pulse-accent"
              >
                {paymentStatus === 'processing' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing…
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Book Now — ₹{bookingAmount.toLocaleString()} Token
                  </>
                )}
              </button>
              <p className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-text-secondary)] mt-2">
                <ShieldCheck size={14} className="text-[var(--color-success)]" />
                Secure payment via Razorpay · 1% token booking amount
              </p>
            </motion.div>

            {/* Payment Success Banner */}
            <AnimatePresence>
              {paymentStatus === 'success' && paymentId && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mt-6 bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 rounded-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={20} className="text-[var(--color-success)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">Booking Confirmed!</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm mt-1">
                        Your token booking for <strong>{product.name}</strong> has been received successfully.
                      </p>
                      <div className="mt-3 flex items-center gap-2 bg-[var(--color-surface)] rounded-lg px-3 py-2 border border-[var(--color-border)]">
                        <IndianRupee size={14} className="text-[var(--color-accent)]" />
                        <span className="text-xs text-[var(--color-text-secondary)]">Payment ID:</span>
                        <code className="text-xs font-mono text-[var(--color-text-primary)]">{paymentId}</code>
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
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mt-6 bg-[var(--color-danger)]/10 border border-[var(--color-danger)]/30 rounded-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-danger)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CreditCard size={20} className="text-[var(--color-danger)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">Payment Failed</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm mt-1">
                        Something went wrong with the payment. Please try again.
                      </p>
                      <button
                        onClick={() => { setPaymentStatus('idle'); handleBookNow(); }}
                        className="mt-3 text-sm font-medium text-[var(--color-accent)] hover:underline"
                      >
                        Retry Payment →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-text-primary)] tracking-wide mb-8">
              SIMILAR <span className="gradient-text">PROPERTIES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
