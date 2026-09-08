import { useMemo, useState, useDeferredValue } from "react";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { GrFormSearch } from "react-icons/gr";
import products from "../../data/database";

export default function Input() {
  const navigate = useNavigate();

  const { searchQuery, setSearchQuery } = useSearch();
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isFocused, setIsFocused] = useState(false);
  const deferredInputValue = useDeferredValue(inputValue);

  const suggestions = useMemo(() => {
    const normalizedQuery = deferredInputValue.trim().toLowerCase();
    const matchingProducts = normalizedQuery
      ? products.filter((product) =>
        [product.name, product.category, product.description]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
      : products;

    return matchingProducts.slice(0, 5);
  }, [deferredInputValue]);

  const handleSearch = () => {
    const trimmedQuery = inputValue.trim();

    if (!trimmedQuery) return;

    setSearchQuery(trimmedQuery);
    setIsFocused(false);
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    setInputValue(product.name);
    setIsFocused(false);
    navigate(`/products/${product.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Search products"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400 active:scale-90 transition-transform cursor-pointer"
        onClick={handleSearch}
      >
        <GrFormSearch />
      </button>
      <input
        type="search"
        placeholder="Search products..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => window.setTimeout(() => setIsFocused(false), 120)}
        onKeyDown={handleKeyDown}
        className="border border-gray-400 rounded-sm text-black w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
      />

      {isFocused && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          {suggestions.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-orange-50"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleSuggestionClick(product)}
              >
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-10 rounded object-cover"
                />
                <span className="min-w-0">
                  <span className="block truncate font-semibold text-gray-900">{product.name}</span>
                  <span className="block text-xs text-gray-500">{product.category}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
