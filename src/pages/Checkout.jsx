import CheckoutForm from "../components/cart/CheckoutForm";
import OrderSummary from "../components/cart/OrderSummary";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen mx-7 my-17">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex items-center justify-center font-extrabold
         sticky top-10 md:top-6 z-50 my-7 text-2xl transition-colors ${
           isSticky ? "text-orange-500" : "text"
         }`}
      >
        SHIPPING INFORMATION
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8 min-h-[70vh]">
        <CheckoutForm />
        <OrderSummary />
      </div>
    
    </main>
  );
}
