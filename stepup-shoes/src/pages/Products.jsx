import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹3,000', min: 0, max: 3000 },
  { label: '₹3,000 – ₹6,000', min: 3000, max: 6000 },
  { label: '₹6,000 – ₹10,000', min: 6000, max: 10000 },
  { label: 'Above ₹10,000', min: 10000, max: Infinity },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      const priceMatch = p.price >= selectedPrice.min && p.price <= selectedPrice.max;
      return catMatch && priceMatch;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white tracking-wide">
            ALL <span className="gradient-text">PRODUCTS</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-2">
            {filtered.length} products found
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterPanel
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </aside>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <SlidersHorizontal size={20} />
          </button>

          {/* Mobile Filter Overlay */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black/80 flex justify-end">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                className="w-80 bg-[var(--color-surface)] h-full p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-semibold text-lg">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={20} className="text-white" />
                  </button>
                </div>
                <FilterPanel
                  selectedCategory={selectedCategory}
                  setSelectedCategory={(v) => { setSelectedCategory(v); }}
                  selectedPrice={selectedPrice}
                  setSelectedPrice={(v) => { setSelectedPrice(v); }}
                  sortBy={sortBy}
                  setSortBy={(v) => { setSortBy(v); }}
                />
              </motion.div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[var(--color-text-secondary)] text-lg">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function FilterPanel({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, sortBy, setSortBy }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                selectedPrice.label === range.label
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] hover:text-white'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Sort By</h4>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="w-full px-4 py-2.5 bg-[var(--color-border)] text-white rounded-lg text-sm border-none outline-none"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}
