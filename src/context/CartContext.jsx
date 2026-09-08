import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      return Array.isArray(parsedCart)
        ? parsedCart.filter((item) => item && item.id && item.quantity > 0)
        : [];
    } catch {
      localStorage.removeItem("cart");
      return [];
    }
  });

  // clears cart upon order placement, and prevents unnecessary re-renders by memoizing the clearCart function
  const clearCart = useCallback(() => {
    setCart((prev) => (prev.length ? [] : prev));

    // clears form data from localStorage when the cart is cleared
    localStorage.removeItem("checkoutForm");
    localStorage.removeItem("checkoutFormTime");
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const addToCart = (product) => {
    if (!product.stock || product.stock < 1) return;

    setCart((prev) => {
      const existAlready = prev.find((item) => item.id === product.id);

      if (existAlready) {
        return prev.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: Math.min(item.quantity + 1, product.stock),
            }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
