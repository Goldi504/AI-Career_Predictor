import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary:
      "bg-purple-600 hover:bg-purple-700 text-white",
    outline:
      "border border-slate-600 hover:bg-slate-800",
  };

  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-xl font-medium transition-all duration-300 active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;