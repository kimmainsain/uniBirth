import React from "react";

const InputImage = ({ image, content, jodiacname, onChange }) => {
  return (
    <div className="flex flex-col content-center items-center justify-center space-y-2 pl-10 font-TAEBAEKmilkyway">
      <label htmlFor="profileimage">너의 별자리 </label>
      <img src={image} className="h-52 w-52" />
      <p jodiacname={jodiacname}>{jodiacname}</p>
      <p content={content}> {content}</p>
      <input
        className=" w-30 border border-gray-300"
        type="date"
        name="birthdate"
        id="birthdate"
        onChange={onChange}
      />
    </div>
  );
};

export default InputImage;
