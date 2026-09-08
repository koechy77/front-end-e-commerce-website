import ProductCard from './ProductCard';

export default function ProductsGrid({ products }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  min-h-screen gap-4'>
      {products?.map((product) => (
        <div
          key={product.id}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}