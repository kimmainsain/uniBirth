import React from "react";
import { useNavigate } from "react-router-dom";

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
      className="bg-gray-500 text-white px-4 py-2 rounded"
    >
      Back
    </button>
  );
};
