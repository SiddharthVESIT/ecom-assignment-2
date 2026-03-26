import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Product Not Found</h2>
          <Link to="/products" className="text-[var(--color-accent)] hover:underline">← Back to Shop</Link>
        </div>
      </main>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    addItem(product, selectedSize || product.sizes[0], selectedColor || product.colors[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors mb-8">
          <ArrowLeft size={18} />
          Back to Shop
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
                  product.badge === 'New' ? 'bg-[var(--color-accent)] text-white'
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
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mt-2 tracking-wide">
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
              <span className="text-3xl font-bold text-white">₹{product.price.toLocaleString()}</span>
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
              <h4 className="text-white font-semibold text-sm mb-3">Select Size (UK)</h4>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                        : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-white hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Select Color</h4>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)]'
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && <Check size={16} className={color === '#FFFFFF' || color === '#FFD700' ? 'text-black' : 'text-white'} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-[var(--color-success)] text-black'
                    : 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-soft)]'
                }`}
              >
                {added ? (
                  <>
                    <Check size={20} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    Add to Cart
                  </>
                )}
              </button>
              <button className="w-14 h-14 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-colors">
                <Heart size={20} className="text-[var(--color-text-secondary)]" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-wide mb-8">
              YOU MAY ALSO <span className="gradient-text">LIKE</span>
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
