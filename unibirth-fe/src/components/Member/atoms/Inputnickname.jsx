import React from "react";

const Inputnickname = ({ onChange }) => {
  return (
    <div className="flex flex-row justify-center font-TAEBAEKmilkyway">
      <label htmlFor="nickname">Nickname</label>
      <input
        className="w-30 border border-gray-300"
        type="text"
        name="nickname"
        onChange={onChange}
        placeholder="nickname"
        autoComplete="off"
        id="nickname"
      />
    </div>
  );
};

export default Inputnickname;
