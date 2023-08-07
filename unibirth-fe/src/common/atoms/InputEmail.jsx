import React from "react";

const InputEmail = ({ onChange }) => {
  return (
    <div className="flex flex-row justify-center font-TAEBAEKmilkyway">
      <div className="flex flex-row">
        <label htmlFor="email">Email</label>
        <input
          className="border border-gray-300"
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          placeholder="email을 입력하세요"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputEmail;
