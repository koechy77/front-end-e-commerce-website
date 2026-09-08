import products from '../data/database';
import ProductsGrid from '../components/product/ProductsGrid';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';



export default function Products() {
  const [isSticky, setIsSticky] = useState(false);
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [stockOnly, setStockOnly] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll",
      handleScroll
    );

    return () => (
      window.removeEventListener("scroll",
        handleScroll
      )
    );
  }, []);

  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) =>
      (category === 'All' || product.category === category) &&
      (!stockOnly || product.stock > 0),
    );

    return [...filtered].sort((first, second) => {
      if (sort === 'price-low') return first.price - second.price;
      if (sort === 'price-high') return second.price - first.price;
      if (sort === 'rating') return second.rating - first.rating;
      return Number(second.featured) - Number(first.featured);
    });
  }, [category, sort, stockOnly]);

  return (
    <main className='mx-7 my-17 flex flex-col gap-7'>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
        className={`flex items-center justify-center font-extrabold
         sticky top-10 md:top-6 z-50 my-7 text-2xl transition-colors ${
          isSticky ? "text-orange-500"
                   : "text"
         }`}>
        All PRODUCTS
      </motion.h1>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <label className="font-poppins text-sm font-semibold text-gray-700">
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="ml-2 rounded border border-gray-300 px-2 py-1 font-normal">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="font-poppins text-sm font-semibold text-gray-700">
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="ml-2 rounded border border-gray-300 px-2 py-1 font-normal">
            <option value="featured">Featured</option>
            <option value="rating">Top rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
        <label className="flex items-center gap-2 font-poppins text-sm font-semibold text-gray-700">
          <input type="checkbox" checked={stockOnly} onChange={(event) => setStockOnly(event.target.checked)} />
          In stock only
        </label>
        <span className="ml-auto text-sm text-gray-500">{visibleProducts.length} products</span>
      </div>
      <ProductsGrid products={visibleProducts} />
    </main>
  );
}
