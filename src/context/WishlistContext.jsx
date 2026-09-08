import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext({
  wishlist: [],
  isWishlisted: () => false,
  toggleWishlist: () => {},
});

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      return Array.isArray(savedWishlist) ? savedWishlist : [];
    } catch {
      localStorage.removeItem("wishlist");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist((previous) => previous.includes(productId)
      ? previous.filter((id) => id !== productId)
      : [...previous, productId]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isWishlisted: (productId) => wishlist.includes(productId),
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);
