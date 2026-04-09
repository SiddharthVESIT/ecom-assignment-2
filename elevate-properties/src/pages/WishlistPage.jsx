import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ArrowLeft, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistPage() {
  const { items, removeItem, clearWishlist, itemCount } = useWishlist();

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8">
          <ArrowLeft size={18} />
          Back to Properties
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[var(--color-text-primary)] tracking-wide">
              MY <span className="gradient-text">WISHLIST</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-2">
              {itemCount} {itemCount === 1 ? 'property' : 'properties'} saved
            </p>
          </div>
          {itemCount > 0 && (
            <button
              onClick={clearWishlist}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-danger,#ef4444)] hover:border-[var(--color-danger,#ef4444)] transition-colors text-sm font-medium"
            >
              <Trash2 size={16} />
              Clear Wishlist
            </button>
          )}
        </motion.div>

        {/* Empty State */}
        {itemCount === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-6">
              <Heart size={40} className="text-[var(--color-text-secondary)]" />
            </div>
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
              Your wishlist is empty
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-md mb-8">
              Start exploring properties and tap the heart icon to save your favourites here.
            </p>
            <Link
              to="/products"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              <Sparkles size={18} />
              Explore Properties
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => {
                const discount = item.originalPrice
                  ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
                  : 0;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-accent)]/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <Link to={`/products/${item.id}`} className="sm:w-48 shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </Link>

                      {/* Info */}
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">
                                {item.category}
                              </p>
                              <Link to={`/products/${item.id}`}>
                                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
                                  {item.name}
                                </h3>
                              </Link>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-danger,#ef4444)] hover:bg-[var(--color-danger,#ef4444)]/10 transition-colors shrink-0"
                              title="Remove from wishlist"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-1 mt-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-xs ${i < Math.floor(item.rating) ? 'text-[var(--color-gold)]' : 'text-[var(--color-border)]'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-xs text-[var(--color-text-secondary)]">
                              ({item.reviewCount})
                            </span>
                          </div>

                          {/* Config tags */}
                          {item.sizes && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {item.sizes.map(size => (
                                <span key={size} className="px-2 py-1 text-xs rounded bg-[var(--color-border)] text-[var(--color-text-secondary)]">
                                  {size}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-[var(--color-accent)]">
                              ₹{item.price.toLocaleString()}
                            </span>
                            {item.originalPrice && (
                              <>
                                <span className="text-sm text-[var(--color-text-secondary)] line-through">
                                  ₹{item.originalPrice.toLocaleString()}
                                </span>
                                <span className="text-xs font-medium text-[var(--color-success)]">
                                  {discount}% off
                                </span>
                              </>
                            )}
                          </div>
                          <Link
                            to={`/products/${item.id}`}
                            className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-text-primary)] text-sm font-semibold rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
