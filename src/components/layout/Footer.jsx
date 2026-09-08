import { useState } from "react";
import { Link } from "react-router-dom";

function FooterSection({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left md:cursor-default md:pointer-events-none"
      >
        <h3 className="font-supermercado text-2xl text-gray-900">{title}</h3>
        <span className="text-xl text-orange-500 md:hidden">{open ? "−" : "+"}</span>
      </button>

      <ul className={`${open ? "mt-3 block" : "hidden md:block"} space-y-2 text-sm text-gray-600 md:mt-4`}>
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} className="transition hover:text-orange-500">
                {item.label}
              </Link>
            ) : (
              <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-orange-500">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-300 bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <h2 className="font-supermercado text-4xl text-orange-600"><i>CHmart</i></h2>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
            Quality products, trusted service, and everyday deals that keep shopping simple.
          </p>
        </div>

        <FooterSection
          title="Quick Links"
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: "Cart", to: "/cart" },
          ]}
        />

        <FooterSection
          title="Customer Service"
          items={[
            { label: "Contact Us", to: "/contact" },
            { label: "FAQ", to: "/#faq" },
            { label: "Shipping Policy", to: "/#shipping-policy" },
          ]}
        />

        <FooterSection
          title="Follow Us"
          items={[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "X", href: "https://x.com" },
            { label: "Facebook", href: "https://facebook.com" },
          ]}
        />
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-300 pt-4 text-center text-sm font-semibold text-gray-700">
        © 2026 CHmart. All rights reserved.
      </div>
    </footer>
  );
}