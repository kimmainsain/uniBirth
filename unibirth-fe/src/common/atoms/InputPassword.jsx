import React from "react";

const InputPassword = ({ onChange }) => {
  return (
    <div className="flex flex-row justify-center font-TAEBAEKmilkyway">
      <div className="flex flex-row">
        <label htmlFor="password">Password</label>
        <input
          className="border border-gray-300"
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputPassword;
