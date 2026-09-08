import ProductsGrid from '../product/ProductsGrid';
import products from '../../data/database';
import { motion } from 'framer-motion';

export default function FeaturedProducts() {
    const featuredProducts = products.filter(
        (products) => products.featured
    );

    return (
        <section>
            <motion.p 
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            className="flex items-center justify-center font-extrabold my-7 text-2xl">
                FEATURED PRODUCTS
            </motion.p>
            <div>
                <ProductsGrid products={featuredProducts} />
            </div>
        </section>
    );
}
