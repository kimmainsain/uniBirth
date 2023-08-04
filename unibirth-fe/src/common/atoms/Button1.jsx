import React from "react";

const Button1 = ({ value, onClick, className, icon }) => {
  return (
    <button
      className={`inline-flex items-center rounded-full border border-transparent bg-purple-700 p-2 text-white shadow-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
      onClick={onClick}
    >
      {icon && <div className="mr-2">{icon}</div>} {value}
    </button>
  );
};

export default Button1;
