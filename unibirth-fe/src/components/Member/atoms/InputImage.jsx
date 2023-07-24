import React from "react";

const InputImage = ({ onChange }) => {
  return (
    <div className="flex flex-col content-center items-center justify-center pl-10">
      <label htmlFor="profileimage">프로필 이미지</label>
      <input
        className=" w-30 border border-gray-300"
        type="file"
        name="profileimage"
        id="profileimage"
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};

export default InputImage;
