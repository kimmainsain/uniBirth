import React from "react";
import { useNavigate } from "react-router-dom";

// Atom: Input field
export const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
}) => {
  return (
    <input
      className="w-30 flex flex-col border border-gray-300"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
};

// Atom: Button
export const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export const BackButton = ({ onClick }) => {
  const history = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      history(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="rounded bg-gray-500 px-4 py-2 text-white"
    >
      Back
    </button>
  );
};
