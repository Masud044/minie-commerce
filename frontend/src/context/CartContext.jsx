import { createContext, useState, useContext } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const value = {
    cart,
    addToCart,
    updateQuantity,
    isSidebarOpen,
    setSidebarOpen,
    isCheckoutOpen,
    setCheckoutOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
