import React from "react";

export const Text = (text) => {
  text = { text };
  return <p className="text-lg text-italic">{text}</p>;
};
