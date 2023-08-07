import React from "react";
// import { PLANET_LIST } from "../../../constants/constants";
const InputDropdown = ({ planetId, setPlanetId }) => {
  // 행성 제한 필요합니다. 게시판 리스트를 가져오던지, 여기서 적어야 하는 지 고민해야 합니다.
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-double font-TAEBAEKmilkyway">
      <select
        value={planetId}
        onChange={(e) => {
          console.log("target:", e.target.value);
          setPlanetId(e.target.value);
        }}
      >
        <option value="1"> 행성 1 </option>
        <option value="2"> 행성 2</option>
        <option value="3"> 행성 3</option>
        <option value="4"> 행성 4</option>
        <option value="5"> 행성 5</option>
        <option value="6"> 행성 6</option>
        <option value="7"> 행성 7</option>
        <option value="8"> 행성 8</option>
      </select>
    </div>
  );
};

export default InputDropdown;
