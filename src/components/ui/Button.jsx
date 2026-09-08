export default function Button({
  children,
  onClick,
  type,
  form,
  disabled,
  ariaLabel,
  className,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      form={form}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`bg-orange-500/80 shadow-xl rounded
         items-center px-3 py-1 my-2 text-gray-700
          ${className || ""}`.trim()}
    >
      {children}
    </button>
  );
}
