import { useCart } from "../../context/CartContext";
import { PiCurrencyDollarDuotone } from "react-icons/pi";
import Button from "../ui/Button";

export default function OrderSummary() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const subtotal = totalPrice;

  const shipping = 10;

  const total = subtotal + shipping;

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold my-4">Order Summary</h2>

        <div className="grid grid-cols-[3fr_1fr_1fr] font-supermercado">
          <div>
            <h3 className="font-bold">Products</h3>
          </div>

          <div>
            <h3 className="text-center font-bold">Qty</h3>
          </div>
          <div>
            <h3 className="text-right font-bold">Price</h3>
          </div>
        </div>

        <hr className="border-dashed border-gray-500 my-2" />

        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[3fr_1fr_1fr] font-supermercado space-y-3"
          >
            <p>{item.name}</p>
            <span className="text-center">{item.quantity}</span>
            <span className="flex justify-end items-center">
              <PiCurrencyDollarDuotone className="text-green-950 " />
              {item.price * item.quantity}
            </span>
          </div>
        ))}

        <hr className="border-dashed border-gray-500 my-2" />

        <div className="font-bold font-supermercado">
          <p className="flex items-center">
            Subtotal:
            <PiCurrencyDollarDuotone />
            {totalPrice}
          </p>
          <p className="flex items-center">
            Shipping: <PiCurrencyDollarDuotone />
            {shipping}
          </p>

          <hr className="border-dashed border-gray-500 my-1" />

          <p className="flex items-center">
            Total: <PiCurrencyDollarDuotone />
            {total}
          </p>
        </div>

        <aside className="mt-12">
          <Button
           type="submit"
            form="check-out-form"
          >
            Place Order
          </Button>
        </aside>
      </div>
    </>
  );
}
