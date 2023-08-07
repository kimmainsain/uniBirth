import React from "react";

const InputPassword = ({ onChange }) => {
  return (
    <div className="font-Pretendard flex w-full items-center justify-center">
      <div className="w-full">
        <label
          htmlFor="password"
          className="inline-block w-20 font-bold text-gray-600"
        >
          Password
        </label>
        <div className="mt-2 w-full">
          <input
            className="w-full flex-1 border-b-2 border-gray-400 py-2 text-gray-600 
          placeholder-gray-400 outline-none
          focus:border-green-400"
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
