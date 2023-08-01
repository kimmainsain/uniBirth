import React from "react";

const InputBox = ({ onChange, value }) => {
  return (
    <div className="flex h-40 w-80 flex-row justify-center font-TAEBAEKmilkyway">
      <div className="flex flex-row">
        <label htmlFor="text">{value} : </label>
        <input
          className="border border-gray-300"
          type="text"
          id="text"
          name="text"
          onChange={onChange}
          placeholder="내용을 입력하세요"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputBox;
