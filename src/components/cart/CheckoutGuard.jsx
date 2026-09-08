import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";

export default function CheckoutGuard({ cart, buttonText }) {
  const location = useLocation();
  const navigate = useNavigate();
  const showModal = location.pathname === "/checkout" && cart.length === 0;

  const handleClose = () => {
    navigate("/products");
  };

  return (
    <Modal
      isOpen={showModal}
      title="Cart is empty"
      message="You need to add items to your cart before proceeding to checkout."
      buttonText={buttonText}
      onClose={handleClose}
      closeOnOverlayClick={true}
    />
  );
}
