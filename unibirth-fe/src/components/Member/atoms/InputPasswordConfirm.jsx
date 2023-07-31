import React from "react";

const InputPasswordConfirm = ({ onChange }) => {
  return (
    <div className="flex flex-row justify-center font-TAEBAEKmilkyway">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        className="border border-gray-300"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={onChange}
        placeholder="비밀번호 확인"
        autoComplete="off"
      />
    </div>
  );
};

export default InputPasswordConfirm;
