import { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import products from "../../data/database";

export default function MobileCategories({ categories }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="md:hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center my-7"
      >
        <button
          className="flex items-center justify-center text-2xl font-extrabold"
          onClick={() => setOpen(prev => !prev)}
        >
          SHOP BY CATEGORY
          <RiArrowDropDownLine
            className={`text-orange-500 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </motion.h2>
      {open && (
        <div className="grid grid-cols-2 gap-2 ">
          {categories.map((category) => {
            const product = products.find((p) => p.category === category);

            return (
              <Link key={category} to={`/category/${category}`}>
                <CategoryCard category={category} image={product.image} />
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
