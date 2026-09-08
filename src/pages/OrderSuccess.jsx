import SuccessIcon from "../components/layout/SuccessIcon";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const { clearCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("orderConfirmed") !== "true") {
      navigate("/cart", { replace: true });
      return undefined;
    }

    clearCart();

    const timer = setTimeout(() => {
      sessionStorage.removeItem("orderConfirmed");
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [clearCart, navigate]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4 text-center px-6">
      <SuccessIcon />
      <h2 className="text-3xl font-bold">Order placed successfully!</h2>
      <p className="text-gray-500">Redirecting to homepage...</p>
    </section>
  );
}
