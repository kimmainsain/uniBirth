import React from "react";

// Atom: Input field
export const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  id,
}) => {
  return (
    <input
      className=" w-30 border border-gray-300"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      id={id}
    />
  );
};
