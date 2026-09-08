import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PiCurrencyDollarDuotone } from 'react-icons/pi';
import { FaStar, FaShieldAlt, FaTruck, FaArrowLeft } from 'react-icons/fa';
import products from '../data/database';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const [isSticky, setIsSticky] = useState(false);
  const { addToCart } = useCart();
  const { id } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-orange-500">Product not found</h2>
        <Link
          to="/products"
          className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:scale-105"
        >
          Browse products
        </Link>
      </main>
    );
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const benefits = [
    { icon: <FaTruck />, text: 'Fast delivery across the country' },
    { icon: <FaShieldAlt />, text: 'Secure checkout and trusted payment' },
    { icon: <FaStar />, text: 'Highly rated by our customers' },
  ];

  return (
    <main className="min-h-screen mx-7 my-17">
      <h1
        className={`flex items-center justify-center font-extrabold sticky top-10 md:top-6 z-50 my-7 text-2xl transition-colors font-poppins ${
          isSticky ? 'text-orange-500' : 'text-gray-900'
        }`}
      >
        PRODUCT DETAIL
      </h1>

      <div className="mx-auto max-w-6xl font-poppins">
        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
        >
          <FaArrowLeft />
          Back to products
        </Link>

        <div className="grid gap-8 rounded-3xl bg-white p-4 shadow-xl md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center gap-5">
            <div>
              <p className="mb-2 font-supermercado text-xl uppercase tracking-[0.2em] text-orange-500">
                {product.category}
              </p>
              <h2 className="font-supermercado text-3xl text-gray-900 md:text-4xl">{product.name}</h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-orange-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">{product.rating} rating</span>
            </div>

            <div className="flex items-center gap-2 text-3xl font-black text-orange-600">
              <PiCurrencyDollarDuotone />
              {product.price.toFixed(2)}
            </div>

            <div className="flex items-center gap-3">
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
              <span className="text-sm text-gray-500">Free returns within 30 days</span>
            </div>

            <p className="text-base leading-7 text-gray-700">{product.description}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              {benefits.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                  <span className="text-orange-500">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() => addToCart(product)}
                className="rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:scale-105"
              >
                Add to cart
              </Button>
              <Link
                to="/cart"
                className="rounded-full border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
              >
                Go to cart
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-3xl bg-gray-50 p-6 shadow-inner">
          <h3 className="mb-4 font-supermercado text-2xl text-gray-900">Why customers love this</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h4 className="mb-2 font-supermercado text-xl text-gray-900">Performance</h4>
              <p className="text-gray-600">Built for speed, comfort, and reliability wherever you use it.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h4 className="mb-2 font-supermercado text-xl text-gray-900">Quality</h4>
              <p className="text-gray-600">Carefully selected materials and dependable features that last.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h4 className="mb-2 font-supermercado text-xl text-gray-900">Value</h4>
              <p className="text-gray-600">Premium features at a price that makes everyday buying easier.</p>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h3 className="mb-6 font-supermercado text-2xl text-gray-900">You may also like</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
