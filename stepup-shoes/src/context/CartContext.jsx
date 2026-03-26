import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('stepup_cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('stepup_cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, selectedSize, selectedColor) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + 1 };
        return updated;
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        selectedSize,
        selectedColor,
        quantity: 1
      }];
    });
  }, []);

  const removeItem = useCallback((id, selectedSize, selectedColor) => {
    setItems(prev => prev.filter(
      item => !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
    ));
  }, []);

  const updateQuantity = useCallback((id, selectedSize, selectedColor, quantity) => {
    if (quantity <= 0) {
      removeItem(id, selectedSize, selectedColor);
      return;
    }
    setItems(prev => prev.map(item =>
      item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
        ? { ...item, quantity }
        : item
    ));
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
