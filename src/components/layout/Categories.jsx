import products from "../../data/database";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import MobileCategories from "./MobileCategories";

export default function Categories() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex items-center justify-center font-extrabold my-7 text-2xl"
      >
        SHOP BY CATEGORY
      </motion.h2>

      <MobileCategories categories={categories}/>
      <div className="hidden md:grid grid-cols-7 ">
        {categories.map((category) => {
          const product = products.find((p) => p.category === category);

          return (
            <Link key={category} to={`/category/${category}`}>
              <CategoryCard category={category} image={product.image} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
