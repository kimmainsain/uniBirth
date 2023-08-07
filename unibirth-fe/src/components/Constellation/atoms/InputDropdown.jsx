import React from "react";
import { PLANET_LIST } from "../../../constants/constants";
const InputDropdown = ({ planetId, setPlanetId }) => {
  // 행성 제한 필요합니다. 게시판 리스트를 가져오던지, 여기서 적어야 하는 지 고민해야 합니다.
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-double font-TAEBAEKmilkyway">
      <select value={planetId} onChange={(e) => setPlanetId(e.target.value)}>
        {PLANET_LIST.map((planet) => (
          <option key={planet.planetId} value={planet.planetId}>
            {planet.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
