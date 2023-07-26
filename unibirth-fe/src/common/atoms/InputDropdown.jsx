import React from "react";

const Dropdown = ({ planetname, setPlanetname }) => {
  // 행성 제한 필요합니다. 게시판 리스트를 가져오던지, 여기서 적어야 하는 지 고민해야 합니다.
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-double font-TAEBAEKmilkyway">
      <select
        value={planetname}
        onChange={(e) => setPlanetname(e.target.value)}
      >
        <option value="유저"> 유저 </option>
        <option value="별자리"> 별자리</option>
        <option value="별"> 별</option>
      </select>
    </div>
  );
};

export default Dropdown;
