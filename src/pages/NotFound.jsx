import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">404</p>
      <h1 className="mt-4 font-supermercado text-5xl text-gray-900 md:text-7xl">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600">That page has moved or does not exist. Let&apos;s get you back to the products.</p>
      <Link to="/products" className="mt-8 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
        Browse products
      </Link>
    </main>
  );
}
