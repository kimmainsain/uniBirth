import React from "react";

const Button3 = ({ value, className, icon }) => {
  return (
    <button className={`inline-flex items-center p-2 text-black  ${className}`}>
      {icon && <div className="mr-2">{icon}</div>} {value}
    </button>
  );
};

export default Button3;
