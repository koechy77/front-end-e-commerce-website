import { PiCurrencyDollarDuotone } from "react-icons/pi";
import Button from "../ui/Button";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import Modal from "../ui/Modal";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";


export default function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="font-extrabold flex flex-col w-full place-items-center border-white rounded-xl
             bg-linear-to-r from bg-gray-400 via-gray-300 to gray-200
              shadow-xl hover:scale-110 transition-transform text-orange-500 font-supermercado fit-content">

        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full object-cover h-64"
          />
          <h2>{item.name}</h2>
          <p className="flex items-center"><PiCurrencyDollarDuotone className="font-extrabold text-xl"/>{item.price}</p>
        </div>

        <div className="flex place-items-center gap-2">
          <Button ariaLabel={`Decrease quantity of ${item.name}`} onClick={() => (decreaseQuantity(item.id))} className="text-7xl font-extrabold">
            <BsCartDash className="text-2xl"/>
          </Button>

          <span>{item.quantity}</span>

          <Button ariaLabel={`Increase quantity of ${item.name}`} disabled={item.quantity >= item.stock} onClick={() => (increaseQuantity(item.id))} className="text-2xl font-extrabold">
<BsCartPlus className="text-2xl"/>
          </Button>

          <Button ariaLabel={`Remove ${item.name} from cart`} onClick={() => setIsOpen(true)}>
            <MdOutlineRemoveShoppingCart className="text-2xl"/>
          </Button>

          <Modal
            isOpen={isOpen}
            title="Remove item"
            message={`Are you sure you want to remove ${item.name} from your cart?`}
            onClose={() => setIsOpen(false)}
            buttonText="Cancel"
            closeOnOverlayClick={true}
          >
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => {
                  removeFromCart(item);
                  setIsOpen(false);
                }}
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Remove
              </Button>
            </div>
          </Modal>
        </div>

      </div>
    </>
  );
}
