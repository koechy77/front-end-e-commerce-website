import Button from "../ui/Button";
import { useCart } from "../../context/CartContext";
import { PiCurrencyDollarDuotone } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import slugify from 'slugify';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const { isWishlisted, toggleWishlist } = useWishlist();
    const wishlisted = isWishlisted(product.id);

    return (
        <>
            <div className="relative w-full place-items-center border-white rounded-lg
             bg-linear-to-r from bg-gray-400 via-gray-300 to gray-200
              shadow-xl hover:scale-105 active:scale-105 transition-transform text-orange-500 font-extrabold font-supermercado">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover h-64 rounded-lg"
                />
                <button
                    type="button"
                    aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                    aria-pressed={wishlisted}
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-lg text-orange-500 shadow transition hover:scale-110"
                >
                    {wishlisted ? <FaHeart /> : <FaRegHeart />}
                </button>
                <h2>{product.name}</h2>
                <p className="flex items-center"><PiCurrencyDollarDuotone className="font-extrabold text-xl" />{product.price}</p>

                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                                <FaStar
                                    key={`filled-${i}`}

                                />
                            ))}

                            {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
                                <FaStar
                                    key={`empty-${i}`}
                                    className="text-gray-400"
                                />
                            ))}
                        </span>
                        {product.rating}
                    </div>

                    <div className="flex gap-2 items-center">
                    <Button ariaLabel={product.stock > 0 ? `Add ${product.name} to cart` : `${product.name} is out of stock`} disabled={product.stock < 1} onClick={() => addToCart(product)}>
                        <FaCartArrowDown className="font-extrabold text-2xl w-full" />
                    </Button>

                    <Link to={`/products/${slugify(product.name, { lower: true })}`}>
                    view details
                    </Link>
                    </div>
                </div>

            </div>

        </>
    );
}
