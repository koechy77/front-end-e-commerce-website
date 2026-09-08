import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/database";
import ProductCard from "../components/product/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="mx-7 my-17 min-h-screen">
      <h1
        className={`flex items-center justify-center font-extrabold
         sticky top-10 md:top-6 z-50 my-7 text-2xl transition-colors ${
           isSticky ? "text-orange-500" : "text"
         }`}
      >
        {category}
      </h1>
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-lg text-gray-600">
            No products were found in this category.
          </p>
          <Link
            to="/products"
            className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white"
          >
            Browse all products
          </Link>
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
