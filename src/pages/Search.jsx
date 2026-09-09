import { useMemo, useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useSearchParams } from "react-router-dom";
import products from "../data/database";
import ProductCard from "../components/product/ProductCard";

export default function Search() {
  const [isSticky, setIsSticky] = useState(false);
  const { searchQuery } = useSearch();
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || searchQuery;

  const normalizedQuery = urlQuery.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.description,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="mx-7 my-17 min-h-screen flex flex-col gap-7">
      <h1
        className={`flex items-center justify-center font-extrabold
         sticky top-10 md:top-6 z-50 my-7 text-2xl transition-colors ${
           isSticky ? "text-orange-500" : "text"
         }`}
      >
        SEARCH RESULTS
      </h1>

      {!normalizedQuery ? (
        <p className="text-center text-lg text-gray-600">
          Search for a product to see matching results.
        </p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No products match “{urlQuery.trim()}”. Try another search.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
