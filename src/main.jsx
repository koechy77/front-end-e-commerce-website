import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/front-end-e-commerce-website">
      <SearchProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollTop />
            <App />
          </WishlistProvider>
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
);
