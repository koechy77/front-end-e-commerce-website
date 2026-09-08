import { Link, useParams } from "react-router-dom";
import products from "../data/database";
import ProductCard from "../components/product/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
      product => product.category.toLowerCase() === category.toLowerCase(),
  );

  return (
    <main className="mx-7 my-17 min-h-screen">
      <h1 className="mb-8 text-center font-supermercado text-4xl text-gray-900">{category}</h1>
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-lg text-gray-600">No products were found in this category.</p>
          <Link to="/products" className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white">Browse all products</Link>
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2">
      {filteredProducts.map(product => (
        <ProductCard
        key={product.id}
        product={product} />
      ))}
        </div>
      )}
    </main>
  );
}
