import React from "react";

function BigButton({ value, onClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default BigButton;
