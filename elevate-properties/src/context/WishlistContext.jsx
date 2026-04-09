import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

const WishlistContext = createContext(null);

const DB_NAME = 'ElevateEstatesDB';
const DB_VERSION = 1;
const STORE_NAME = 'wishlist';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

function dbGetAll(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbPut(db, item) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(item);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function dbDelete(db, id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

function dbClear(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const dbRef = useRef(null);

  // Initialise IndexedDB and load items
  useEffect(() => {
    let cancelled = false;
    openDB().then(async (db) => {
      dbRef.current = db;
      const stored = await dbGetAll(db);
      if (!cancelled) setItems(stored);
    });
    return () => { cancelled = true; };
  }, []);

  const toggleItem = useCallback(async (product) => {
    const db = dbRef.current;
    if (!db) return;

    setItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        dbDelete(db, product.id);
        return prev.filter(item => item.id !== product.id);
      } else {
        const entry = {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          category: product.category,
          rating: product.rating,
          reviewCount: product.reviewCount,
          badge: product.badge,
          sizes: product.sizes,
          colors: product.colors,
          addedAt: Date.now(),
        };
        dbPut(db, entry);
        return [...prev, entry];
      }
    });
  }, []);

  const isWishlisted = useCallback((productId) => {
    return items.some(item => item.id === productId);
  }, [items]);

  const removeItem = useCallback(async (productId) => {
    const db = dbRef.current;
    if (!db) return;
    await dbDelete(db, productId);
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const clearWishlist = useCallback(async () => {
    const db = dbRef.current;
    if (!db) return;
    await dbClear(db);
    setItems([]);
  }, []);

  const itemCount = items.length;

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isWishlisted, removeItem, clearWishlist, itemCount }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
