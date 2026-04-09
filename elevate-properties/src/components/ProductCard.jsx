import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { toggleItem, isWishlisted } = useWishlist();
  const liked = isWishlisted(product.id);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative bg-[var(--color-surface)] rounded-xl overflow-hidden product-card-hover border border-[var(--color-border)]">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${
                  product.badge === 'New'
                    ? 'bg-[var(--color-accent)] text-[var(--color-text-primary)]'
                    : product.badge === 'Sale'
                    ? 'bg-[var(--color-success)] text-black'
                    : 'bg-[var(--color-gold)] text-black'
                }`}
              >
                {product.badge}
              </span>
            )}

            {/* Wishlist Heart */}
            <button
              onClick={handleWishlistToggle}
              className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                liked
                  ? 'bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 scale-110'
                  : 'bg-black/50 hover:bg-black/70'
              }`}
            >
              <Heart
                size={16}
                className={`transition-all duration-300 ${liked ? 'fill-[var(--color-accent)] text-[var(--color-accent)] scale-110' : 'text-[var(--color-text-primary)]'}`}
              />
            </button>
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h3 className="text-[var(--color-text-primary)] font-semibold text-base truncate">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[var(--color-accent)] font-bold text-lg">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-[var(--color-text-secondary)] text-sm line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-[var(--color-success)] text-xs font-medium">
                    {discount}% off
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center gap-1 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${i < Math.floor(product.rating) ? 'text-[var(--color-gold)]' : 'text-[var(--color-border)]'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-[var(--color-text-secondary)]">
                ({product.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
