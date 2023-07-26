import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import InputDropdown from "../atoms/InputDropdown";
import { useNavigation } from "../../hooks/useNavigation";

const Header3 = ({ buttons }) => {
  const [categoryname, setategoryname] = useState("별자리");
  const [query, setQuery] = useState("");
  const { navigateToSearchCommon } = useNavigation();

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", query);
    console.log("카테고리:", categoryname);
    navigateToSearchCommon(query, categoryname);
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
        value={query}
        onChange={handleSearchInputChange}
      />
      <InputDropdown planetname={categoryname} setPlanetname={setategoryname} />
      <button className="font-TAEBAEKmilkyway" onClick={handleSearch}>
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default Header3;
