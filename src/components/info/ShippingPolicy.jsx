import { shippingPolicy } from '../../data/database';

export default function ShippingPolicy() {
  return (
    <section
      id="shipping-policy"
      className="py-20 px-5 md:px-10"
    >
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Shipping Policy
        </h2>

        <p className="mt-4 text-gray-600">
          Learn how we process, ship, and deliver your orders.
        </p>
      </div>

      {/* Policies */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {shippingPolicy.map((policy) => (

          <div
            key={policy.id}
            className="
              rounded-2xl
              border
              border-gray-200
              p-6
              transition-all
              duration-300
              hover:shadow-[7px_3px]
              hover:shadow-orange-500
              active:shadow-[7px_3px]
              active:shadow-orange-500
            "
          >

            <h3 className="text-xl font-semibold mb-3 font-poppins">
              {policy.title}
            </h3>

            <p className="leading-7 font-supermercado text-orange-500">
              {policy.description}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}
