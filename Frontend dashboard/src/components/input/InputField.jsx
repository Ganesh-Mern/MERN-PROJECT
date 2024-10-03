import React from "react";

const InputField = ({
  label,
  id,
  type,
  placeholder,
  onClick,
  children,
  relative,
  value, handleChange,
  name,
  className
}) => {
  return (
    <div className={relative}>
      <label className="text-sm font-medium text-gray-700" htmlFor="email">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange} 
        // onClick={onClick}
        className={className}
      />
      {children}
    </div>
  );
};

export default InputField;
