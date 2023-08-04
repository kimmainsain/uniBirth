import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Header2 = ({ buttons }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", searchKeyword);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      {buttons &&
        buttons.map((button, index) => {
          const ButtonComponent = button.component;
          return (
            <ButtonComponent
              key={index}
              className="font-TAEBAEKmilkyway"
              value={button.value}
              onClick={button.onClick}
              icon={button.icon}
            />
          );
        })}
      <input
        className="font-TAEBAEKmilkyway"
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchKeyword}
        onChange={handleSearchInputChange}
      />
      <button className="font-TAEBAEKmilkyway" onClick={handleSearch}>
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default Header2;
