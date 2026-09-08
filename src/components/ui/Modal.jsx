import Button from "./Button";
import { useEffect } from "react";

export default function Modal({
  isOpen,
  title,
  message,
  onClose,
  buttonText = "Go to Products",
  closeOnOverlayClick = true,
  children,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="presentation"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className="w-[90%] max-w-md rounded-2xl border border-white/30 bg-white/40 p-6
         shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 id="modal-title" className="mb-3 text-2xl font-semibold text-gray-900">{title}</h2>
        )}

        {message && (
          <p className="mb-5 leading-relaxed text-gray-700">{message}</p>
        )}

        {children}

        <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="rounded-full bg-linear-to-r from-orange-500 to-amber-400
             px-4 py-2 text-sm font-semibold
             text-white shadow-lg shadow-orange-500/20"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
