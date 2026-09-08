import { lazy, Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import OrderSuccess from './pages/OrderSuccess';
import CheckoutGuard from './components/cart/CheckoutGuard';
import { useCart } from './context/CartContext';


const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const Search = lazy(() => import('./pages/Search'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));



export default function App() {
  const { cart } = useCart();
  
  return (
    <>

    <CheckoutGuard cart={cart} buttonText="Go back to products" />

    <Navbar />

<Suspense fallback={<p className='flex items-center justify-center
 min-h-screen bg-black text-white font-extrabold'>Loading...</p>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/ordersuccess" element={<OrderSuccess />} />
      <Route path='/category/:category' element={<CategoryPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
</Suspense>

    </>
  );
}
