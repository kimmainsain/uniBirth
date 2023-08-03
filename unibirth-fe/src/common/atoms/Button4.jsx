import React from "react";

const Button4 = ({ onClick, value, className, icon }) => {
  return (
    <button
      className={`inline-flex items-center rounded-full border border-transparent bg-indigo-400 p-2 text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
      onClick={onClick}
    >
      {icon && <div className="mr-2">{icon}</div>} {value}
    </button>
  );
};

export default Button4;
