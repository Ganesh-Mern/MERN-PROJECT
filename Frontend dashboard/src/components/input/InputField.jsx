/* eslint-disable react/prop-types */
const InputField = ({
  label,
  htmlFor,
  name,
  value,
  type,
  placeholder,
  handleChange,
  children,
  className,
}) => {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-gray-700" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#006FEE] focus:border-[#006FEE]"
      />
      {children}
    </div>
  );
};

export default InputField;
