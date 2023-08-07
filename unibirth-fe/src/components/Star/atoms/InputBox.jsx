import React from "react";

const InputBox = ({ content, setContent }) => {
  return (
    <div className="flex h-40 w-80 flex-row justify-center font-TAEBAEKmilkyway">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <label htmlFor="text">내용 </label>
        </div>
        <input
          className="focus:shadow-outline  mb-1 flex h-80 transform items-center justify-center justify-center rounded-lg border border-black py-2 text-center font-TAEBAEKmilkyway text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-gray-100 focus:border-purple-500 focus:outline-none focus:ring-2"
          type="text"
          id="text"
          name="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요!"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputBox;
