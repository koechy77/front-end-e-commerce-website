import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();

  const isCartEmpty = cart.length === 0;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main>
        <h1
          className={`flex items-center justify-center font-extrabold
         sticky top-10 md:top-6 z-50 my-7 text-2xl transition-colors ${
           isSticky ? "text-orange-500" : "text"
         }`}
        >
          CART
        </h1>
        <div className=" grid md:grid-cols-2 gap-17 mx-17 my-17">
          {cart.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              >
                <CartItem key={item.id} item={item} removeFromCart={item.id} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {isCartEmpty ? (
          <span
            className="block w-fit mx-auto px-3 font-bold rounded-lg bg-orange-500 py-3 text-center
          text-gray-900 opacity-50 cursor-not-allowed"
          >
            Your cart is empty
          </span>
        ) : (
          <Link
            to="/checkout"
            className="block w-fit mx-auto px-3 font-bold rounded-lg bg-orange-500 py-3 text-center
          text-gray-900 hover:shadow-xl active:shadow-xl transition"
          >
            proceed to checkout
          </Link>
        )}
      </main>
    </>
  );
}
