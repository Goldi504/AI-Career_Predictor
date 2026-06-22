const Input = ({
  label,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-slate-300">
        {label}
      </label>

      <input
        {...props}
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default Input;