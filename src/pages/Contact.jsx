import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const contactDetails = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@chmart.com",
    href: "mailto:hello@chmart.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+1 (555) 014-2026",
    href: "tel:+15550142026",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Studio",
    value: "24 Market Street, New York",
    href: "https://maps.google.com/?q=24+Market+Street+New+York",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen px-5 py-16 md:px-10 md:py-24">
      <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Customer care
          </p>
          <h1 className="mt-4 font-supermercado text-5xl leading-tight text-gray-900 md:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-gray-600">
            Need help with an order, a product, or a delivery? Send us a note and our team will get back to you within one business day.
          </p>

          <div className="mt-10 space-y-5">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 text-gray-700 transition-colors hover:text-orange-500"
                target={label === "Studio" ? "_blank" : undefined}
                rel={label === "Studio" ? "noreferrer" : undefined}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-100 text-orange-500">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500">{label}</span>
                  <span className="font-poppins">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="font-poppins text-sm font-semibold text-gray-700">
              Name
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </label>
            <label className="font-poppins text-sm font-semibold text-gray-700">
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </label>
          </div>

          <label className="mt-6 block font-poppins text-sm font-semibold text-gray-700">
            Subject
            <input
              required
              name="subject"
              type="text"
              placeholder="How can we help?"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </label>

          <label className="mt-6 block font-poppins text-sm font-semibold text-gray-700">
            Message
            <textarea
              required
              name="message"
              rows="6"
              placeholder="Tell us what you need..."
              className="mt-2 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-orange-500 px-5 py-3 font-poppins font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
          >
            Send message
          </button>

          {submitted && (
            <p role="status" className="mt-4 text-center font-poppins text-sm font-semibold text-green-600">
              Thanks for reaching out. We&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
