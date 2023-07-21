import React from "react";

export const Text = (text) => {
  text = { text };
  return <p className="text-italic text-lg">{text}</p>;
};
